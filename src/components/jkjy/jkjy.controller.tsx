import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

import { PhotoNamePlaceMainSection } from '@components/common/main/PhotoNamePlace';
import { BridePoem } from '@components/common/setence/BridePoem';
import { BasicContact } from '@components/common/contact/BasicContact';
import { FamilyContact } from '@components/common/contact/FamilyContact';
import { WeddingGalleryList } from '@components/common/gallery/GalleryList';
import { useDispatch } from 'react-redux';
import { getWedding, getWeddingSaga, setWeddingId, weddingSaga } from '@redux/wedding';

function JkJyController({ id }: { id: string }) {
    const app = useSelector((state: RootState) => state.app);
    const wedding = useSelector((state: RootState) => state.wedding);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(setWeddingId(id));
        dispatch(getWedding(id));
    }, []);

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

    console.log(app);
    console.log(wedding);
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
            <WeddingGalleryList countPerRow={3} images={new Array(12).fill(0)} />
        </>
    );
}

export default JkJyController;
