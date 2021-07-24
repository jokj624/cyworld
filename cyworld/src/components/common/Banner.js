import React from 'react';
import styled from 'styled-components';
import music from '../../music/airplane.mp3';
import '../common/Wrapper.css';

const OuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 15vh;
    margin-left: 3%;
    background: white;
    border: 1px solid #8f8f8f;
    border-radius: 5px;
    audio {
        width: 95%;
        height: 30px;
        margin: 0 auto;
    }
`;
const Music = styled.div`
    width: 90%;
    height: 20px;
    margin: 5% auto;
    padding: 5px;
    font-family: DOSGothic;
    font-size: 0.8em;
    background: #dbdbdb;
`
const Banner = () => {
    return (
        <OuterDiv>
            <Music>💿 비행기 - 거북이</Music>
            <audio controls autoPlay> <source src={music} type="audio/mp3" /> </audio>
        </OuterDiv>
    );
};

export default Banner;