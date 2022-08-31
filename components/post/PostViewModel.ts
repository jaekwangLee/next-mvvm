import React from 'react';
import { PostModel } from '../../model/postModel';

export class PostViewModel {
    private post: PostModel;

    constructor(postModel: PostModel) {
        this.post = postModel;
    }

    getPosts() {
        return this.post.getPosts();
    }

    getOne(postNumber: number) {
        return this.post.getPost(postNumber)
    }
}