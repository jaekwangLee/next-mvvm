import { RootState } from '@redux/store';
import React from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';

export const GallerySlickModal = () => {
    const app = useSelector((state: RootState) => state.app);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Modal isOpen={app.galleryModal}>
            <Slider {...settings} />
        </Modal>
    );
};
