import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import music from '../../music/music';
import '../common/Wrapper.css';

const OuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 18%;
    height: 20vh;
    margin-left: 3%;
    background: white;
    border: 1px solid #8f8f8f;
    border-radius: 5px;
    audio {
        width: 95%;
        height: 30px;
        margin: 0 auto;
    }
`;
const Music = styled.div`
    width: 90%;
    height: 20px;
    margin: 5% auto;
    padding: 5px;
    font-family: DOSGothic;
    font-size: 0.8em;
    background: #dbdbdb;
`

const List = styled.div`
    postion: relative;
    display: inline-block;
    margin: auto 3%;
    button {
        font-size: .9em;
        border: none;
    }
    &:hover{
        .content {
            display: block;
        }
        button {
            background-color: #ddd;
        }
    }
    .content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        z-index: 100;
        button {
            display: block;
            width: 100%;
            color: black;
            padding: 10px;
            background-color: #f1f1f1;
            &:hover {
                background-color: #ddd;
            }
        }
    }
`
const Banner = () => {
    const [index, setIndex] = useState(0);
    const [src, setSrc] = useState(music[index].src);
    const audioRef = useRef();

    const updateSong = (source) => {
        setSrc(source);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            audioRef.current.play();
        }
    }
    return (
        <OuterDiv>
            <Music>💿 {music[index].title}</Music>
            <audio ref={audioRef} autoPlay controls loop > <source src={src} type="audio/mp3" /> </audio>
            <List>
                <button>🎶 Music List</button>
                <div className="content">
                    <button onClick={()=>{setIndex(0); updateSong(music[0].src);}}>프리스타일 - Y</button>
                    <button onClick={() => { setIndex(1); updateSong(music[1].src); }}>에픽하이 - Love Love Love</button>
                    <button onClick={() => { setIndex(2); updateSong(music[2].src); }}>하울 - 사랑인가요</button>
                    <button onClick={()=>{setIndex(3); updateSong(music[3].src);}}>거북이 - 비행기</button>
                </div>
            </List>
        </OuterDiv>
    );
};

export default Banner;