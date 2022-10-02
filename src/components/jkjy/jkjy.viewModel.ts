import { RootState } from '@redux/store';
import { getWedding, setWeddingId } from '@redux/wedding';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export function useWedding(id: string) {
    const app = useSelector((state: RootState) => state.app);
    const wedding = useSelector((state: RootState) => state.wedding);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(setWeddingId(id));
        dispatch(getWedding(id));
    }, [dispatch, id]);

    console.log(app);
    console.log(wedding);

    return { info: wedding.info };
}
