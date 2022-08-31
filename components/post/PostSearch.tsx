import React from 'react';

export const PostSearchBar = ({ index, indexHandler, onSearch }: { index: string; indexHandler: (e: React.ChangeEvent<HTMLInputElement>) => void; onSearch: () => void; }) => (
    <div>
        <input placeholder='어떤 글을 볼지 글 넘버를 입력해주세요.' value={index} onChange={indexHandler} onSubmit={onSearch} style={{ width: '240px' }} />
        <button onClick={onSearch}>검색</button>
    </div>
)