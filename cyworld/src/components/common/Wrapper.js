import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const WrapperDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 75%;
    height: 98vh;
`;

const Card2 = styled.div`
    width: 100%;
    height: 90vh;
    padding: 20px;
    background: #b4e5ff;
    border: 1px solid black;
    border-radius: 10px;
`;

const InnerDiv = styled.div`
    width: 97%;
    height: 88vh;
    margin: auto;
    padding: 10px;
    border: 3px dashed white;
    border-radius: 10px;
`;

const ContentDiv = styled.div`
    width: 95%;
    height: 80vh;
    margin: 5px auto;
    padding: 20px;
    background: #ebeeee;
    border: 1px solid black;
    border-radius: 10px;
`;
const Wrapper = () => {
    return(
        <WrapperDiv>
            <Card2>
                <InnerDiv>
                    <ContentDiv>
                        <Card />
                    </ContentDiv>
                </InnerDiv>
            </Card2>
        </WrapperDiv>
    );
};

export default Wrapper;