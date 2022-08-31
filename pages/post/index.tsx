import React, { useState } from 'react';
import { PostViewController } from '../../components/post/PostViewController';
import { PostViewModel } from '../../components/post/postVIewModel';
import { PostModel } from '../../model/postModel';

const PostProvider = () => {
    const _postModel = new PostModel();
    const [postModel] = useState(new PostViewModel(_postModel))

    return (
        <PostViewController postModel={postModel} />
    )
}

export default PostProvider;