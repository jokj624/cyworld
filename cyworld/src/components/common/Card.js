import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Home from '../content/Home';
import Profile from '../profile/Profile';
import './Wrapper.css';

const OuterDiv = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 100%;
`;

const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 23%;
    height: 100vh;
    & > span {
        display: flex;
        justify-content: center;
        margin: 5px auto;
        font-family: DOSGothic;
        font-size: 0.75em;
        p {
            margin: 0 5px;
            color: red;
        }
    }
`;

const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    width: 75%;
    height: 100vh;
    & > span {
        display: flex;
        font-weight: bold;
        font-size: 1.2em;
        font-family: DOSGothic;
        color: #1f83c4;
        margin: 2px 5px;
        p {
            font-weight: bold;
            font-size: 1.2em;
            font-family: sandol;
            margin-top: 0px;
            margin-bottom: 0px;
            
        }
    }
`;
const Left = styled.div`
    height: 75vh;
    border: 1px solid #8f8f8f;
    border-radius: 10px;
    background: white;
`;
const Right = styled.div`
    z-index: 5;
    height: 75vh;
    border: 1px solid #8f8f8f;
    border-radius: 10px;
    background: white;
`;
const Card = () => {
    return (
        <OuterDiv>
            <LeftDiv>
                <span>TODAY <p> 123</p>  | TOTAL 991211</span>
                <Left>
                    <Profile />
                </Left>
            </LeftDiv>
            <RightDiv>
                <span>잊으면 <p>D</p>ㅣ진ㄷ<p>r</p></span>
                <Right>
                    <Home />
                </Right>
                <Navbar />
            </RightDiv>
        </OuterDiv>
    );
};

export default Card;