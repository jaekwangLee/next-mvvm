import React, { useEffect } from 'react';
const WhatePage = () => {
    useEffect(() => {
        console.log('과연...');
    }, []);

    return (
        <div>
            <p>로딩됨</p>
        </div>
    );
};

export default WhatePage;
