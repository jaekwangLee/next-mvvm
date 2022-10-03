import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';

import { PhotoNamePlaceMainSection } from '@components/common/main/PhotoNamePlace';
import { BridePoem } from '@components/common/setence/BridePoem';
import { BasicContact } from '@components/common/contact/BasicContact';
import { FamilyContact } from '@components/common/contact/FamilyContact';
import { WeddingGalleryList } from '@components/common/gallery/GalleryList';
import { GallerySlickModal } from '@components/common/gallery/SlickModal';
import { useWedding } from './jkjy.viewModel';
import { updateGalleryModal } from '@redux/app';
import { setWeddingGalleryIndex } from '@redux/wedding';
import { DatePhotoNameMainSection } from '@components/common/main/DatePhotoName';
import { getWeddingDate } from '@libs/day';
import { BasicTextBanner } from '@components/common/banner/TextBanner';

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
        setInnerWidth(window.innerWidth);
    };

    const openGalleryModal = (imageIndex: number) => {
        console.log(imageIndex);
        dispatch(setWeddingGalleryIndex(imageIndex));
        dispatch(updateGalleryModal(true));
    };

    const groom = '이재광';
    const bride = '서지예';
    const weddingHole = '수원 루클라비 웨딩홀';
    const groomContact = '01080059417';
    const brideContact = '01095044220';
    const groomParent = {
        father: '',
        mother: '허경희',
        fatherContact: '',
        motherContact: '01045229417'
    };
    const brideParent = {
        father: '서기영',
        mother: '최경애',
        fatherContact: '01045229417',
        motherContact: '01045229417'
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
                man={groom}
                woman={bride}
                place={weddingHole}
            />
            {!!info.poem && <BridePoem title='우리결혼합니다' poem={info.poem.split('\n')} />}
            <BasicTextBanner image={'wedding1.jpeg'} text={'소중한 당신을 초대합니다'} />
            <BasicContact groom={groomContact} bride={brideContact} />
            <FamilyContact
                groomFather={groomParent.father}
                groomFatherContact={groomParent.fatherContact}
                groomMother={groomParent.mother}
                groomMotherContact={groomParent.motherContact}
                brideFather={brideParent.father}
                birdeFatherContact={brideParent.fatherContact}
                brideMother={brideParent.mother}
                brideMotherContact={brideParent.motherContact}
            />
            {info.galleries && info.galleries.length > 0 && (
                <WeddingGalleryList
                    countPerRow={3}
                    windowWidth={innerWidth}
                    images={info.galleries}
                    showImage={openGalleryModal}
                />
            )}
            <GallerySlickModal />
        </>
    );
}

export default JkJyController;
