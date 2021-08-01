import React, { useState } from 'react';
import styled from 'styled-components';
import LockView from './LockView';
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
    width: 90%;
    height: 100%;
`;
const InnerBlock = styled.div`
    display: flex;
    justify-content: center;
    algin-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 5%;
`;
const TitleDiv = styled.div`
    width: 100%;
    border-top: 1px solid #c9c9c9;
    padding-top: 5px;
    padding-bottom: 5px;
    line-height: 1;
    font-weight: bold;
    font-family: DOSGothic;
    font-size: 1.2em;
    background-color: #f2f2f2;
    text-align: center;
`;

const InfoDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    font-size: 0.8em;
    font-color: #f9f9f9;
    margin-top: 5px;
    span {
        font-family: DOSGothic;
        font-weight: bold;
        font-size: 1.1em;
        color: #1f83c4;
    }
`;

const VideoDiv = styled.div`
    width: 100%;
    margin-top: 20px;
    text-align: center;
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
`;

const Form = styled.form`
    margin-top: 5%;
    input[type=submit] {
        font-size: 1em;
        font-family: DOSGothic;
        border: 1px solid #54acca;
        border-radius: 3px;
        background: #54acca;
        margin-left: 2%;
        color: white;
    }
`

const Check = styled.div`
    font-size: 0.8em;
    color: red;
    margin-top: 5px;
`; 
const DiaryView = () => {
    const [password, setPW] = useState("");
    const [view, setView] = useState(false);

    const handlePasswordInput = (event) => {
        setPW(event.currentTarget.value);
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        event.target.reset();
        if (password === "jieunlovestimi") {
            setView(true);
        }
        else {
            document.getElementById('validation').innerHTML = '비밀번호가 일치하지 않습니다.';
            setTimeout(() => {
                document.getElementById('validation').innerHTML = '';
            }, 2000) // 시간. 2초 후 실행
        }
    };
    return (
        <>
        {!view &&
            <LockView>
                <Form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" name="password" placeholder="비밀 번호 입력" onChange={handlePasswordInput}  />
                    </label>
                    <input type="submit" value="확인" />
                </Form>
                <Check id="validation"></Check>
            </LockView>
        }
        {view &&
        <OuterDiv>
            <Block>
                <InnerBlock>
                    <TitleDiv>🔮 운팀장이 운티미들에게 🔮</TitleDiv>
                    <InfoDiv><span>황지은</span> 2021.7.31 스크랩 28</InfoDiv>
                    <VideoDiv>
                        <Video controls autoPlay>
                            <source src="https://sopt-connector.s3.ap-northeast-2.amazonaws.com/jieun.mp4" type="video/mp4"></source>
                        </Video>
                    </VideoDiv>
                </InnerBlock>
            </Block>
        </OuterDiv>
        }
        </>
    );
};

export default DiaryView;