import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { PhotoNamePlaceMainSection } from '@components/common/main/PhotoNamePlace';
import { BridePoem } from '@components/common/setence/BridePoem';
import { BasicContact } from '@components/common/contact/BasicContact';
import { FamilyContact } from '@components/common/contact/FamilyContact';
import { WeddingGalleryList } from '@components/common/gallery/GalleryList';
import { GallerySlickModal } from '@components/common/gallery/SlickModal';
import { useWedding } from './jkjy.viewModel';
import { updateGalleryModal } from '@redux/app';
import { setWeddingGalleryIndex } from '@redux/wedding';

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

    const mainPhoto = '/images/main_jkjy.jpg';
    const groom = '이재광';
    const bride = '서지예';
    const weddingDate = '2023. 03. 12. 일요일 오전 11:00';
    const weddingHole = '수원 루클라비 웨딩홀';
    const poem =
        '서로가 마주보며 다져온 사랑을\n이제 함께 한 곳을 바라보며\n걸어갈 수 있는 큰 사랑으로 키우고자 합니다.\n저희 두 사람이 사랑의 이름으로\n지켜나갈 수 있게 앞날을\n축복해 주시면 감사하겠습니다.';
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
            <PhotoNamePlaceMainSection
                title='우리결혼합니다'
                uri={mainPhoto}
                man={groom}
                woman={bride}
                date={weddingDate}
                place={weddingHole}
            />
            <BridePoem poem={poem.split('\n')} />
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
