import React from 'react';
import styled from 'styled-components';
import room from '../../image/room.jpeg';
import Guest from './Guest';
import '../common/Wrapper.css';

const OuterDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Title = styled.div`   
    width: 100%;
    h4 {
        margin: 10px 25px;
        color: #1f83c4
    }
`;
const Image = styled.img`
    width: 90%;
    height: 70%;
`;

const Home = () => {
    return (
        <OuterDiv>
            <Title><h4>미니룸</h4></Title>
            <Image src={room} />
            <Guest />
        </OuterDiv>
    );
};

export default Home;