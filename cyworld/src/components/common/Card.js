import React from 'react';
import styled from 'styled-components';

const OuterDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    hegiht: 100%;
`;

const Left = styled.div`
    width: 23%;
    height: 70vh;
    margin-top: 5%;
    border: 1px solid black;
    border-radius: 5px;
    background: white;
`;
const Right = styled.div`
    width: 75%;
    height: 70vh;
    margin-top: 5%;
    border: 1px solid black;
    border-radius: 5px;
    background: white;
`;
const Card = () => {
    return (
        <OuterDiv>
            <Left />
            <Right />
        </OuterDiv>
    );
};

export default Card;