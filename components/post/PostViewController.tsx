import React, { useCallback, useState } from 'react';
import { Post } from '../../model/postModel';
import { PostItem } from './PostItem';
import { PostSearchBar } from './PostSearch';
import { PostViewModel } from './postVIewModel';

export const PostViewController = ({ postModel }: { postModel: PostViewModel }) => {
    const [post, setPost] = useState<Post>();
    const [postIndex, setPostIndex] = useState('');

    const postIndexHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (isNaN(Number(value))) {
            return null;
        }

        setPostIndex(value);
    }

    const handleViewPost = useCallback(async () => {
        const nextPost = await postModel.getOne(Number(postIndex));
        if (nextPost && nextPost.status === 200) {
            setPost(nextPost.data);
        }
    }, [postModel, postIndex]);

    return (
        <>
            <PostSearchBar index={postIndex} indexHandler={postIndexHandler} onSearch={handleViewPost} />
            {!!post && <PostItem 
                index={post.id}
                title={post.title}
                body={post.body}
            />}
        </>
    )
}