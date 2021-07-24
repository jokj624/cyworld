import React from 'react';
import styled from 'styled-components';
import Wrapper from '../common/Wrapper';
import Banner from '../common/Banner';
import RightBar from '../common/RightBar';
import LeftBar from '../common/LeftBar';
import Home from '../content/Home';

const Div = styled.div`
    z-index: -10;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 15px;
    width: 100%;
    background: #a584ff;
`;

const Main = () => {
    return (
        <Div>
            <Wrapper left={<LeftBar />} right={<RightBar><Home /></RightBar>} />
            <Banner />
        </Div>
    );
};

export default Main;
