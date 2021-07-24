import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
    justify-content: space-around;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 90%;
    height: 30%;
    border: 1px solid #c9c9c9;
    background-color: #f2f2f2;
    form {
        width: 90%;
    }
    label {
        font-size: 0.9em;
        font-weight: bold;
        color: #1f83c4;
    }
    input[type=text] {
        width: 50%;
        margin: 10px 15px;
    }
`;

const GuestDiv = styled.div`
    display: flex;
    justify-content: center;
    algin-items: center;
    flex-direction: column;
    width: 90%;
`;

const TitleDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
    border-bottom: 1px solid #c9c9c9;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 5px;
    line-height: 1;
    font-size: 1em;
    text-align: center;
    span {
        color: #1f83c4;
    }
    .date {
        margin-left: 5px;
        margin-top: 5px;
        font-family: DOSGothic;
        font-size: .9em;
        color: #8f8f8f;
    }
`;

const Guest = () => {
    const [name, setName] = useState("");
    const [guest, setGuest] = useState("");
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        async function get() {
            const response = await axios.get("/guest");
            setGuests(response.data.data);
        }
        get();
    }, []);

    const handleNameInput = (event) => {
        setName(event.currentTarget.value);
    };

    const handleContentInput = (event) => {
        setGuest(event.currentTarget.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.target.reset();
        let body = {
            name: name,
            content: guest
        };
        const response = await axios.post("/guest", body);
        setGuests(response.data.data);
    };
    return (
        <OuterDiv>
            <FormDiv>
            <form onSubmit={handleSubmit}>
                <label>
                    일촌평
                    <input type="text" name="guest" placeholder="일촌과 나누고 싶은 이야기를 남겨보세요 ~!" onChange={handleContentInput} />
                    이름
                    <input type="text" name="name" style={{width:"10%"}} onChange={handleNameInput} />
                </label>
                <input type="submit" value="확인" />
            </form>
            </FormDiv>
            {guests.map((item)=> {
                return (
                    <GuestDiv>
                        <TitleDiv>• {item.content} (<span>{item.name}</span>) <span className="date">2021.7.25</span></TitleDiv>
                    </GuestDiv>
                );
            })}
        </OuterDiv>
    );
};

export default Guest;