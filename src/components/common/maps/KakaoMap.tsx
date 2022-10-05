import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export const KakaoMapView = ({ mapImageSource }: { mapImageSource: string }) => {
    return (
        <MapContainer>
            <StyledMap>
                <div style={{ width: '100%', height: '100%' }}>
                    <MapImage
                        className='map'
                        src={`http://t1.daumcdn.net/roughmap/imgmap/${mapImageSource}`}
                        style={{ width: '100%', height: '100%' }}
                        alt='지도이미지'
                    />
                </div>
            </StyledMap>
        </MapContainer>
    );
};

const MapContainer = styled.div`
    width: 100%;
`;

const StyledMap = styled.div`
    width: 100vw;
    max-width: 500px;
    height: 56vw;
    max-height: 280px;
    margin: 0 auto;

    position: relative;
    font: 'normal normal 400 12px/normal dotum, sans-serif';
    color: '#333333';
`;

const MapImage = styled.img``;

const MapPointer = styled.img``;
