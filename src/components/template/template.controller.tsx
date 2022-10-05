import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';

import { useWedding } from './template.viewModel';
import { AccountInfo, setAccountInfo, updateAccountModal, updateGalleryModal } from '@redux/app';
import { setWeddingGalleryIndex } from '@redux/wedding';
import { getWeddingDate } from '@libs/day';
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

function JkJyController({ id }: { id: string }) {
    const dispatch = useDispatch();
    const { info } = useWedding(id);
    const [innerWidth, setInnerWidth] = useState(0);

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

    console.log('info: ', info);
    if (!info) {
        return <></>;
    }

    return (
        <>
            <DatePhotoNameMainSection
                day={dayjs(info.date).format('M月D日')}
                date={getWeddingDate(info.date)}
                uri={info.galleries[0]}
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
                    images={info.galleries}
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
            <GallerySlickModal />
            <AccountModal />
        </>
    );
}

export default JkJyController;
