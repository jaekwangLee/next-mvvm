import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';

import { AccountInfo, setAccountInfo, updateAccountModal, updateGalleryModal } from '@redux/app';
import { setWeddingGalleryIndex } from '@redux/wedding';
import { WeddingInfo } from '@redux/wedding/types';
import { getWeddingDate } from '@utils/day';
import { BridePoem } from '@components/common/setence/BridePoem';
import { BasicContact } from '@components/common/contact/BasicContact';
import { FamilyContact } from '@components/common/contact/FamilyContact';
import { WeddingGalleryList } from '@components/common/gallery/GalleryList';
import { GallerySlickModal } from '@components/common/gallery/SlickModal';
import { DatePhotoNameMainSection } from '@components/common/main/DatePhotoName';
import { BasicTextBanner } from '@components/common/banner/TextBanner';
import { KakaoMapView } from '@components/common/maps/KakaoMap';
import { PlaceAddress } from '@components/common/maps/PlaceAddress';
import { WeddingShopTransportGuide } from '@components/common/maps/TransportGuide';
import { GroomBirdeAccount } from '@components/common/account/GroomBrideAccount';
import { AccountModal } from '@components/common/account/AccountModal';
import { useFlowerEffect } from '@components/common/effect/flowerEffect';
import { ReviewInput } from '@components/common/message/ReviewInput';
import {
    addReview,
    deleteReview,
    ReviewInitialState,
    updateNewReviewState,
    updateReviewPageState
} from '@redux/review';
import { clearTextSpace } from '@utils/strings';
import { ReviewTableList } from '@components/common/table/list';
import { TablePagination } from '@components/common/table/pagination';

export type ReviewInputTypes = 'name' | 'password' | 'message';

function JkJyController({ info, review }: { info?: WeddingInfo; review?: ReviewInitialState }) {
    const dispatch = useDispatch();
    const [innerWidth, setInnerWidth] = useState(0);
    const PER_PAGE = 5;
    useFlowerEffect();

    console.log('review:', review);
    useEffect(() => {
        resizeInnerWidth();
        window.addEventListener('resize', resizeInnerWidth);
        return () => {
            window.removeEventListener('reisze', resizeInnerWidth, false);
        };
    }, []);

    const resizeInnerWidth = () => {
        setInnerWidth(window.innerWidth > 576 ? 576 : window.innerWidth);
    };

    const openGalleryModal = (imageIndex: number) => {
        dispatch(setWeddingGalleryIndex(imageIndex));
        dispatch(updateGalleryModal(true));
    };

    const openAccountModal = (info: AccountInfo) => {
        dispatch(setAccountInfo(info));
        dispatch(updateAccountModal(true));
    };

    const onChangeInput = ({ type, value }: { type: ReviewInputTypes; value: string }) => {
        dispatch(updateNewReviewState({ type, value }));
    };

    const onAddReview = () => {
        if (!info || !review) return;

        const { initialId } = info;
        const { editReview } = review;
        if (!editReview.name || !editReview.password || !editReview.message) return;

        dispatch(
            addReview(initialId, {
                name: clearTextSpace(editReview.name),
                password: clearTextSpace(editReview.password),
                message: clearTextSpace(editReview.message)
            })
        );
    };

    const setPrevPage = () => {
        const currPage = review?.reviewPage || 0;
        const reviewLen = review?.reviews.length || 0;
        const totalPageLen = Math.floor(reviewLen / PER_PAGE);
        console.log(currPage, reviewLen, totalPageLen);
        if (0 > currPage - 1) {
            return;
        }

        dispatch(updateReviewPageState(currPage - 1));
    };

    const setNextPage = () => {
        const currPage = review?.reviewPage || 0;
        const reviewLen = review?.reviews.length || 0;
        const totalPageLen = Math.floor(reviewLen / PER_PAGE);
        console.log(currPage, reviewLen, totalPageLen);
        if (totalPageLen < currPage + 1) {
            return;
        }

        dispatch(updateReviewPageState(currPage + 1));
    };

    const onDeleteReviewMessage = (rvId: string, password: string) => {
        dispatch(deleteReview(rvId, password));
    };

    if (!info) {
        return <></>;
    }

    return (
        <>
            <DatePhotoNameMainSection
                day={dayjs(info.date).format('M月D日')}
                date={getWeddingDate(info.date)}
                uri={info.mainPhoto}
                man={info.groom.name}
                woman={info.bride.name}
                store={info.store}
            />
            {!!info.poem && <BridePoem title='우리결혼합니다' poem={info.poem.split('\n')} />}
            <BasicTextBanner image={'wedding1.jpeg'} text={'소중한 당신을 초대합니다'} />
            <BasicContact groom={info.groom.contact} bride={info.bride.contact} />
            <FamilyContact
                groomFather={info.groom.father}
                groomFatherContact={info.groom.fatherContact}
                groomMother={info.groom.mother}
                groomMotherContact={info.groom.motherContact}
                brideFather={info.bride.father}
                birdeFatherContact={info.bride.fatherContact}
                brideMother={info.bride.mother}
                brideMotherContact={info.bride.motherContact}
            />
            {info.galleries && info.galleries.length > 0 && (
                <WeddingGalleryList
                    countPerRow={3}
                    windowWidth={innerWidth}
                    images={info.galleries.slice(0, 6)}
                    showImage={openGalleryModal}
                />
            )}
            <PlaceAddress contact={info.wholeContact} store={info.store} address={info.place} />
            <KakaoMapView mapImageSource={info.wholeAddressLink} />
            <WeddingShopTransportGuide
                subway={info.parking.subway}
                bus={info.parking.bus}
                park={info.parking.park}
                rentBus={info.parking.rentBus}
                notice={info.parking.notice}
            />
            <GroomBirdeAccount
                openGroomModal={() => {
                    openAccountModal(info.groom.account);
                }}
                openBrideModal={() => {
                    openAccountModal(info.bride.account);
                }}
            />
            <ReviewInput onChangeInput={onChangeInput} review={review?.editReview} register={onAddReview} />
            <ReviewTableList
                list={review?.reviews || []}
                currPage={review?.reviewPage || 0}
                perPage={PER_PAGE}
                onDelete={(rvId: string) => {
                    const password = window.prompt('축하메시지에 설정한 비밀번호를 입력해주세요.');
                    if (!password) return;

                    onDeleteReviewMessage(rvId, password);
                }}
            />
            <TablePagination
                currentPage={review?.reviewPage || 0}
                perPage={PER_PAGE}
                total={review?.reviews.length || 0}
                onPrev={setPrevPage}
                onNext={setNextPage}
            />
            <GallerySlickModal />
            <AccountModal />
        </>
    );
}

export default JkJyController;
