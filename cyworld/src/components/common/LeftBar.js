import React from 'react';
import styled from 'styled-components';
import Left from './Left';
import Profile from '../profile/Profile';

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

const LeftBar = () => {
    return (
        <LeftDiv>
            <span>TODAY <p> 123</p>  | TOTAL 991211</span>
            <Left>
                <Profile />
            </Left>
        </LeftDiv>
    );
};

export default LeftBar;