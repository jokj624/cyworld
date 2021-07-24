import React from 'react';
import styled from 'styled-components';
import room from '../../image/room.jpeg';
import Guest from './Guest';
import TopContent from './TopContent';
import '../common/Wrapper.css';

const OuterDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    font-family: DOSGothic;
    font-size: 1.2em;
    width: 90%;
    span {
        color: #1f83c4;
        font-size: .8em;
        font-weight: bold;
        margin: 10px 25px;
    }
`;

const Title = styled.div`   
    width: 50%;
    color: #1f83c4
   
`;
const Image = styled.img`
    width: 90%;
    height: 70%;
`;

const Home = () => {
    return (
        <OuterDiv>
            <TopContent />
            <TitleDiv>
                <Title>🏠 Mini Room</Title>
                <span>🔮 마법 티미단</span>
            </TitleDiv>
            <Image src={room} />
            <Guest />
        </OuterDiv>
    );
};

export default Home;