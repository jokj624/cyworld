import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import avatarArray from '../../image/avatar';

const axios = require('axios');

const OuterDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const FormDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 90%;
    border: 1px solid #c9c9c9;
    background-color: #f2f2f2;
    form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        width: 90%;
    }
    label {
        font-size: 0.9em;
        font-weight: bold;
        color: #1f83c4;
    }
    textarea {
        width: 80%;
    }
    input[type=text] {
        margin: 10px 5px;
        width: 35%;
    }
    input[type=submit] {
        margin: 10px 0;
        height: 50%;
    }
    .textdiv {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding-top: 10px;
        width: 95%;
    }
    .submitdiv {
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        width: 95%;
    }
`;

const LetterDiv = styled.div`
    display: flex;
    justify-content: center;
    algin-items: center;
    margin-top: 5%;
    flex-direction: column;
    width: 90%;
`;

const TitleDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
    border-top: 1px solid #c9c9c9;
    padding-top: 5px;
    padding-bottom: 5px;
    line-height: 1;
    color: #1f83c4;
    font-family: DOSGothic;
    font-size: .8em;
    background-color: #f2f2f2;
    text-align: center;
    span {
        margin: 0 10px;
        font-size: .78em;
        color: black;
    }
`;

const MainDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 10px;
    width: 90%;
`;

const Image = styled.img`
    width: 15%;
    height: 100px;
`;

const Text = styled.div`
    width: 70%;
    font-family: DOSGothic;
    font-size: 0.8em;
`;
const PostLetter = () => {
    const [name, setName] = useState("");
    const [letter, setLetter] = useState("");
    const [letters, setLetters] = useState([]);
    const [index, setIndex] = useState(0);
    let count = 0;

    useEffect(() => {
        const num = randomIndex();
        setIndex(num);
        async function get() {
            const response = await axios.get("/letter");
            setLetters(response.data.data);
        }
        get();
    }, []);
    
    const randomIndex = () => {
        const index = Math.floor(Math.random() * 7);
        return index;
    };

    const handleNameInput = (event) => {
        setName(event.currentTarget.value);
    };

    const handleLetterInput = (event) => {
        setLetter(event.currentTarget.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.target.reset();
        let body = {
            name: name,
            letter: letter,
            avartar: avatarArray[index]
        };
        const response = await axios.post("/letter", body);
        setLetters(response.data.data);
    };

    return (
        <OuterDiv>
            <FormDiv>
                <form onSubmit={handleSubmit}>
                    <div className="textdiv">
                        <Image src={avatarArray[index]} />
                        <textarea name="letter" cols="50" onChange={handleLetterInput} />
                    </div>
                    <div className="submitdiv">
                        <label>
                            이름
                            <input type="text" name="name" onChange={handleNameInput} />
                        </label>
                        <input type="submit" value="확인" />
                    </div>
                </form>
            </FormDiv>
            {letters.map((item) => {
                return (
                    <LetterDiv>
                        <TitleDiv>
                            <span>NO.{++count}</span>{item.name} 🏠
                        </TitleDiv>
                        <MainDiv>
                            <Image src={item.avartar} />
                            <Text>{item.letter}</Text>
                        </MainDiv>
                    </LetterDiv>
                );
            })}
        </OuterDiv>
    );
};

export default PostLetter;