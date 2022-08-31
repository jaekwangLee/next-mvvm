import React from 'react';

export const PostItem = ({ title, body, index }: { title: string; body: string; index: number }) => (
    <div>
        <h3>{ index }. { title }</h3>
        <h4>{ body }</h4>
    </div>
)