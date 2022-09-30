import axios from 'axios';
import { BASE_URL } from '@utils/constants';

export const getWeddingById = (id: string) => {
    return axios.get(`${BASE_URL}/wedding/${id}/info`);
};

export const getWeddingPages = () => {
    return axios.get(`${BASE_URL}/wedding/pages`);
};
