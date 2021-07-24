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
    align-items: center;
    margin-top: 5px;
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
        width: 70%;
        margin: 10px 15px;
    }
`;

const Guest = () => {
    return (
        <OuterDiv>
            <FormDiv>
            <form>
                <label>
                    일촌평
                    <input type="text" name="guest" placeholder="일촌과 나누고 싶은 이야기를 남겨보세요 ~!"/>
                </label>
                <input type="submit" value="확인" />
            </form>
            </FormDiv>
        </OuterDiv>
    );
};

export default Guest;