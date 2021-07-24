import React from 'react';
import Wrapper from '../common/Wrapper';
import LeftBar from '../common/LeftBar';
import RightBar from '../common/RightBar';
import GalleryView from '../content/GalleryView';

const Gallery = () => {
    return (
        <Wrapper left={<LeftBar />} right={<RightBar><GalleryView /></RightBar>} />
    );
};

export default Gallery;