import dayjs from 'dayjs';

export const getMeridien = (date: Date) => {
    const time = dayjs(date).get('hour');
    if (time >= 12) return '오후';
    else return '오전';
};

export const getDay = (date: Date) => {
    const day = dayjs(date).get('day');
    switch (day) {
        case 0:
            return '일요일';
        case 1:
            return '월요일';
        case 2:
            return '화요일';
        case 3:
            return '수요일';
        case 4:
            return '목요일';
        case 5:
            return '금요일';
        case 6:
            return '토요일';
    }
};

export const getWeddingDate = (date: Date) => {
    return `${getDay(date)} ${getMeridien(date)} ${dayjs(date).format('H시 m분')}`;
};
