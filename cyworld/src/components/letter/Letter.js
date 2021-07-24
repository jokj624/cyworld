import React from 'react';
import Wrapper from '../common/Wrapper';
import LeftBar from '../common/LeftBar';
import RightBar from '../common/RightBar';
import PostLetter from '../content/PostLetter';

const Letter = () => {
    return (
        <Wrapper left={<LeftBar />} right={<RightBar><PostLetter /></RightBar>}/>
    );
};

export default Letter;