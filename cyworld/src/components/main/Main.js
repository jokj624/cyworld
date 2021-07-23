import React from 'react';
import styled from 'styled-components';
import Wrapper from '../common/Wrapper';
import Banner from '../common/Banner';

const Div = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 20px;
    width: 100%;
    background: #a584ff;
`;

const Main = () => {
    return (
        <Div>
            <Wrapper>
            </Wrapper>
            <Banner />
        </Div>
    );
};

export default Main;
