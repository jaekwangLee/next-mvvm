import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { useDispatch } from 'react-redux';
import { updateGalleryModal } from '@redux/app';
import { setWeddingGalleryIndex } from '@redux/wedding';

const modalStyle = {
    content: {
        padding: 0,
        border: 0,
        inset: 0,
        backgroundColor: 'black',
        borderRadius: 0
    }
};

export const GallerySlickModal = () => {
    const dispatch = useDispatch();
    const app = useSelector((state: RootState) => state.app);
    const wedding = useSelector((state: RootState) => state.wedding);
    const [innerWidth, setInnerWidth] = useState(0);
    const [mainSlick, setMainSlick] = useState<any>();
    const [pagingSlick, setPagingSlick] = useState<any>();

    useEffect(() => {
        resizePageSize();
        window.addEventListener('resize', resizePageSize);
        return () => {
            window.removeEventListener('resize', resizePageSize, false);
        };
    }, []);

    const resizePageSize = () => {
        setInnerWidth(window.innerWidth);
    };

    const closeModal = () => {
        dispatch(setWeddingGalleryIndex(0));
        dispatch(updateGalleryModal(false));
    };

    const mainSettings = {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        initialSlide: wedding.galleryIndex
    };

    const pagingSettings = {
        dots: false,
        arrows: false,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: '4px',
        focusOnSelect: true,
        swipeToSlide: true,
        swipe: false,
        initialSlide: wedding.galleryIndex
    };

    const pageSize = innerWidth / 5.5;

    return (
        <Modal isOpen={app.galleryModal} style={modalStyle}>
            <ModalHeader title='갤러리' onClose={closeModal} />
            <SliderContainer size={window.innerHeight - pageSize - 48}>
                <Slider
                    className='main-slider'
                    asNavFor={pagingSlick}
                    ref={slider => setMainSlick(slider)}
                    {...mainSettings}
                >
                    {wedding.info?.galleries.map((image, index) => (
                        <MainContentContainer key={'gallery-main-content-' + index}>
                            <MainContent src={image} alt='갤러리 메인 컨테츠' />
                        </MainContentContainer>
                    ))}
                </Slider>
            </SliderContainer>
            <SliderContainer>
                <Slider
                    className='paging-slider'
                    asNavFor={mainSlick}
                    ref={slider => setPagingSlick(slider)}
                    {...pagingSettings}
                >
                    {wedding.info?.galleries.map((image, index) => (
                        <CustomPagingElement
                            key={'gallery-main-paging-content-' + index}
                            source={image}
                            size={pageSize}
                        />
                    ))}
                </Slider>
            </SliderContainer>
        </Modal>
    );
};

const CustomPagingElement = ({ source, size }: { size: number; source?: string }) => {
    if (!source) return <></>;

    return <ListContentContainer size={size} style={{ backgroundImage: `url(${source})` }}></ListContentContainer>;
};

export const ModalHeader = ({ title, onClose }: { title: string; onClose: () => void }) => (
    <HeaderContainer>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderCloseButtonWrapper onClick={onClose}>
            <HeaderCloseButton src='/images/close.png' alt='모달닫기버튼' />
        </HeaderCloseButtonWrapper>
    </HeaderContainer>
);

const SliderContainer = styled.div`
    position: relative;

    .main-slider {
        height: ${(props: { size?: number }) => `${props.size || 0}px`};
        margin-bottom: 4px;
        overflow: hidden;
    }

    .main-slider .slick-track {
        display: flex;
        align-items: center;
        max-height: ${(props: { size?: number }) => `${props.size || 0}px`};
    }

    .main-slider .slick-track .slick-slide {
        max-height: ${(props: { size?: number }) => `${props.size || 0}px`};
    }

    .main-slider .slick-track .slick-slide > div {
        max-height: ${(props: { size?: number }) => `${props.size || 0}px`};
    }

    .main-slider .slick-track .slick-slide > div > div {
        max-height: ${(props: { size?: number }) => `${props.size || 0}px`};
    }

    .main-slider .slick-track .slick-slide > div > div > img {
        max-height: ${(props: { size?: number }) => `${props.size || 0}px`};
    }

    .paging_items {
        filter: grayscale(1);

        &:hover {
            filter: none;
        }
    }

    .slick-current .paging_items {
        filter: none;
    }
`;
const MainContentContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const MainContent = styled.img`
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
`;

const ListContentContainer = styled.div`
    width: ${(props: { size: number }) => (props.size ? `${props.size}px` : '0')};
    height: ${(props: { size: number }) => (props.size ? `${props.size}px` : '0')};
    max-height: ${(props: { size: number }) => (props.size ? `${props.size}px` : '0')};

    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
`;

const HeaderContainer = styled.div`
    width: 100%;
    height: 44px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderTitle = styled.h3`
    font-size: 13px;
    color: #ffffff;
    font-weight: 600;
`;

const HeaderCloseButtonWrapper = styled.span`
    display: inline-block;
    width: 28px;
    height: 28px;
    padding: 6px;
    cursor: pointer;
    position: absolute;
    right: 8px;
    top: 8px;
`;

const HeaderCloseButton = styled.img`
    width: 16px;
    height: 16px;
`;
