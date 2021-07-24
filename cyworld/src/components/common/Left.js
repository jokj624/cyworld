import React from 'react';
import styled from 'styled-components';

const LeftDiv = styled.div`
    height: 75vh;
    border: 1px solid #8f8f8f;
    border-radius: 10px;
    background: white;
`;

const Left = ({ children }) => {
    return (
        <LeftDiv> {children} </LeftDiv>
    )
};

export default Left;