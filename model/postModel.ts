import axios from 'axios';

export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export class PostModel {
    async getPosts() {
        try { 
            const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return posts;
        } catch(error) {
            console.log('get post list error: ', error)
            throw error;
        }
    }

    async getPost(postNumber: number) {
        try { 
            const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${ postNumber }`);
            return post;
        } catch(error) {
            console.log('get post error: ', error)
            throw error;
        }
    }
}