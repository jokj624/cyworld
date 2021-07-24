import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    z-index: 10;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 75%;
    height: 100vh;
`;

const Card2 = styled.div`
    width: 100%;
    height: 90vh;
    padding: 10px;
    background: #92cadd;
    border: 1px solid #8f8f8f;
    border-radius: 10px;
`;

const InnerDiv = styled.div`
    width: 97%;
    height: 87vh;
    margin: auto;
    padding: 5px;
    border: 3px dashed white;
    border-radius: 10px;
`;

const ContentDiv = styled.div`
    position: relative;
    width: 95%;
    height: 80vh;
    padding: 20px;
    margin: 5px auto; 
    background: #dbddda;
    border: 1px solid #8f8f8f;
    border-radius: 10px;
`;

const OuterDiv = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const Wrapper = ({ left, right }) => {
    return(
        <WrapperDiv>
            <Card2>
                <InnerDiv>
                    <ContentDiv >
                        <OuterDiv>
                            {left}
                            {right}
                        </OuterDiv>
                    </ContentDiv>
                </InnerDiv>
            </Card2>
        </WrapperDiv>
    );
};

export default Wrapper;