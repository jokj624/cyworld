import React from 'react';
import styled from 'styled-components';

const OuterDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: 20px;
    width: 90%;
`;

const News = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0 5px;
    width: 50%;
    font-family: DOSGothic;
    font-size: 1.2em;
    .up {
        border-bottom: 1px solid #c9c9c9;
        color: #1f83c4;
    }
    ul {
        margin-top: 0px;
        font-size: .8em;
    }
    li {
        color: #123C73;
        margin-top: 10px;
    }
    table {
        margin-top: 5px;
        color: #123C73;
        font-size: .8em;
        border-spacing: 0 5px;
        span {
            font-size: .8em;
        }
    }
`;

const TopContent = () => {
    return (
        <OuterDiv>
            <News>
                <div className="up">📌 Updated News</div>
                <ul>
                    <li>황지은 운팀장 하느라</li>
                    <li>고생 많았다!</li>
                    <li>28기 마법 티미단</li>
                    <li>잊으면 디진다.</li>
                </ul>
            </News>
            <News>
                <div className="up">📌 Nothing</div>
                <table >
                    <tbody>
                        <tr>
                            <td>사진첩 <span>0/31</span></td>
                            <td>방명록 <span>0/15</span></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>쥬크박스 <span>0/3</span></td>
                            <td>다이어리 <span>0/0</span></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>이거 <span>12/12</span></td>
                            <td>그냥 디자인임 <span>6/24</span></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>심심해서 <span>7/22</span></td>
                            <td>넣어봄 <span>0/1</span></td>
                        </tr>
                    </tbody>
                </table>
            </News>
        </OuterDiv>
    );
};

export default TopContent;