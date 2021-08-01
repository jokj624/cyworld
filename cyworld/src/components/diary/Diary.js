import React from 'react';
import Wrapper from '../common/Wrapper';
import LeftBar from '../common/LeftBar';
import RightBar from '../common/RightBar';
import DiaryView from '../content/DiaryView';

const Diary = () => {
    return (
        <Wrapper left={<LeftBar />} right={<RightBar><DiaryView /></RightBar>} />
    );
};

export default Diary;