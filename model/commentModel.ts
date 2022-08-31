import axios from 'axios';

export class CommentModel {
    async getComments(page?: number) {
        try { 
            const comments = await axios.get('https://jsonplaceholder.typicode.com/comments');
            return comments;
        } catch(error) {
            console.log('get comment list error: ', error)
            throw error;
        }
    }
}