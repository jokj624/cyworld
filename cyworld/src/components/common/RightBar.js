import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Right from './Right';

const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
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

const RightBar = ({ children }) => {
    return (
        <RightDiv>
            <span>잊으면 <p>D</p>ㅣ진ㄷ<p>r</p></span>
            <Right>
                {children}
            </Right>
            <Navbar />
        </RightDiv>
    );
};

export default RightBar