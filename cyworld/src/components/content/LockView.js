import React from 'react';
import styled from 'styled-components';
import '../common/Wrapper.css';

const OuterDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Card = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 40%;
    height: 20%;
    text-align: center;
    border: 1px solid #54acca;
    border-radius: 5px;
    font-family: DOSGothic;
    font-size: 0.9em;
`
const LockView = ({ children }) => {
    return (
        <OuterDiv>
            <Card>
                🔒 비밀이야
                {children}
            </Card>
        </OuterDiv>
    );  
};

export default LockView;