import React from 'react';

import { PhotoNamePlaceMainSection } from '@components/common/main/PhotoNamePlace';
import { BridePoem } from '@components/common/setence/BridePoem';
import { BasicContactSection } from '@components/common/contact/BasicContact';

function JkJyController() {
    const mainPhoto =
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMTlfNDkg%2FMDAxNjM5ODg4MzEwMjY0.5eV_3id7deE3VNSVZzPBEBiCnbEE5HnFTIqIQW4xavsg.jqydUXsHiWi5cV5BnXk1SLtq2Q9_WEHDsnJNdo_M29Ug.JPEG.tjsrud5818%2FDSC07404.JPG&type=a340';
    const groom = '이재광';
    const bride = '서지예';
    const weddingDate = '2023. 03. 12. 일요일 오전 11:00';
    const weddingHole = '수원 루클라비 웨딩홀';
    const poem =
        '서로가 마주보며 다져온 사랑을\n이제 함께 한 곳을 바라보며\n걸어갈 수 있는 큰 사랑으로 키우고자 합니다.\n저희 두 사람이 사랑의 이름으로\n지켜나갈 수 있게 앞날을\n축복해 주시면 감사하겠습니다.';
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
            <BasicContactSection />
        </>
    );
}

export default JkJyController;
