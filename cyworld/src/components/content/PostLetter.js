import React from 'react';
import styled from 'styled-components';

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
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
    width: 90%;
    height: 10%;
    border: 1px solid #c9c9c9;
    background-color: #f2f2f2;
    form {
        display: flex;
        justify-content: center;
        flex-direction: row;
        text-align: center;
        width: 90%;
    }
    label {
        font-size: 0.9em;
        font-weight: bold;
        color: #1f83c4;
    }
    input[type=text] {
        margin: 10px 10px;
        width: 35%;
    }
    input[type=submit] {
        margin-left: 5%;
        height: 40px;
    }
`;

const PostLetter = () => {
    return (
        <OuterDiv>
            <FormDiv>
                <form>
                    <label>
                        이름
                        <input type="text" name="name" />
                    </label>
                    <textarea name="letter" cols="40"/>
                    <input type="submit" value="확인" />
                </form>
            </FormDiv>
        </OuterDiv>
    );
};

export default PostLetter;