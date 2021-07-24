import React from 'react';
import Wrapper from '../common/Wrapper';
import RightBar from '../common/RightBar';
import LeftBar from '../common/LeftBar';
import Home from '../content/Home';

const Main = () => {
    return (
        <Wrapper left={<LeftBar />} right={<RightBar><Home /></RightBar>} />
    );
};

export default Main;
