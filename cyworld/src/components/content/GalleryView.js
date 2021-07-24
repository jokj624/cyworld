import React from 'react';
import styled from 'styled-components';
import array from '../../image/galleryImage';
import '../common/Wrapper.css';

const OuterDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Block = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 5%;
    width: 90%;
    height: 100%;
`;
const InnerBlock = styled.div`
    display: flex;
    justify-content: center;
    algin-items: center;
    flex-direction: column;
    width: 100%;
`;
const TitleDiv = styled.div`
    width: 100%;
    border-top: 1px solid #c9c9c9;
    font-weight: bold;
    font-family: DOSGothic;
    font-size: 1em;
    background-color: #f2f2f2;
    text-align: center;
`;

const InfoDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    font-size: 0.8em;
    font-color: #f9f9f9;
    span {
        font-family: DOSGothic;
        font-weight: bold;
        font-size: 1.1em;
        color: #1f83c4;
    }
`;

const Image = styled.img`
    width: 80%;
    height: 70%;
`;
const GalleryView = () => {
    return (
        <OuterDiv>
            <Block>
                {array.map((item)=> {
                    return( 
                        <InnerBlock>
                            <TitleDiv>{item.title}</TitleDiv>
                            <InfoDiv><span>{item.writer}</span> {item.date} 스크랩 0</InfoDiv>
                            <Image src={item.url} />
                        </InnerBlock>
                    );
                })}
            </Block>
        </OuterDiv>
    );
};

export default GalleryView;