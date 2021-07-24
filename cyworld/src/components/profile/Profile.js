import React from 'react';
import styled from 'styled-components';
import profile from '../../image/profileImage.png';
import '../common/Wrapper.css';

const OuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
`;

const Image = styled.img`
    width: 80%;
    height: 30%;
    margin-top: 10%;
`;

const Text = styled.div`
    margin-top: 5%;
    font-family: DOSGothic;
    font-size: .8em;
    text-aligh: center;
`;

const Feel = styled.div`
    width: 75%;
    padding: 1% 5%;
    margin-top: 15%;
    border: 1px solid #8f8f8f;
    border-radius: 5px;
    font-family: DOSGothic;
    font-size: 0.9em;
    & > span {
        color: #1f83c4;
    }
`;

const Info = styled.div`
    width: 80%;
    margin-top: 15%;
    border-top: 1px dashed #8f8f8f;
    font-family: DOSGothic;
    div {
        display: flex;
        justify-cotent: center;
    }
    h5 {
        color: #1f83c4;
    }
    span {
        font-size: 0.8em;
        margin-top: 25px;
        margin-left: 2px;
        color: #8f8f8f;
    }
    p {
        margin-top: -15px;
        font-size: 0.9em;
        color: #ce8658;
    }
`;

const Select = styled.select`
    width: 80%;
    height: 25px;
    option {
        font-family: DOSGothic;
    }
`;
const Profile = () => {
    return (    
        <OuterDiv>
            <Image src={profile} />
            <Text>황지은 좋아하지마 <br/><br/>그게 뭔데 <br/> <br/>황지은 좋아하지 말라고. <br/> <br/> 그거 어떻게 하는건데.</Text>
            <Feel><span>Today is ... </span>💔 사랑</Feel>
            <Info>
                <div>
                    <h5>황지은</h5>
                    <span>(♀)1999.12.11</span>
                </div>
                <p>timi@cyworld.com</p>
            </Info>
            <Select>
                <option>★ 일촌 파도타기</option>
                <option>황지은</option>
                <option>운팀장</option>
                <option>해줘서</option>
                <option>고맙다</option>
            </Select>
        </OuterDiv>
    );
};

export default Profile;