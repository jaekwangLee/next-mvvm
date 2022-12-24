import { getReviewList } from '@redux/review';
import { RootState } from '@redux/store';
import { getWedding, setWeddingId } from '@redux/wedding';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export function useWedding(id: string) {
    const review = useSelector((state: RootState) => state.review);
    const wedding = useSelector((state: RootState) => state.wedding);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(setWeddingId(id));
        dispatch(getWedding(id));
        dispatch(getReviewList(id));
    }, [dispatch, id]);

    return { info: wedding.info, reviewInfo: review };
}
