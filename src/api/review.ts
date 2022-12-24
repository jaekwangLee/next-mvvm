import axios from 'axios';
import { BASE_URL } from '@utils/constants';
import { Review } from '@redux/review';
import { StyledInterface } from 'styled-components';

export const getWeddingReviews = (couId: string) => {
    return axios.get(`${BASE_URL}/review/${couId}/list`);
};

export const addWeddingReview = ({ initCouId, review }: { initCouId: string; review: Review }) => {
    return axios.post(`${BASE_URL}/review/add`, { initCouId, info: review });
};

export const deleteWeddingReview = ({ rvId, password }: { rvId: string; password: string }) => {
    return axios.post(`${BASE_URL}/review/${rvId}/delete`, { password });
};
