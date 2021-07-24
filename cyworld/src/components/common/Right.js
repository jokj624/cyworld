import React from 'react';
import styled from 'styled-components';

const RightDiv = styled.div`
    overflow-y: scroll;
    z-index: 5;
    height: 75vh;
    border: 1px solid #8f8f8f;
    border-radius: 10px;
    background: white;
`;

const Right = ({ children }) => {
    return (
        <RightDiv> {children} </RightDiv>
    )
};

export default Right;