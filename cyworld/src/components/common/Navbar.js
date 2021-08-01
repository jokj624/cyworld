import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    z-index: 1;
    position: absolute;
    top: 80px;
    right: -50px;
    ul {
        list-style: none;
        a {
            display: inline-block;
            width: 60px;
            height: 15px;
            margin-bottom: 5px;
            padding: 10px 10px 10px 15px;
            border-radius: 10px;
            background: #54acca;
            text-align: center;
            text-decoration: none;
            color: #fff;
            font-family: DOSGothic;
            font-size: 0.85rem;
            &.focused {
                background: #fff;
                color: #333;
            }
        }
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="focused">홈</NavLink>
                </li>
                <li>
                    <NavLink exact to="/gallery" activeClassName="focused">사진첩</NavLink>
                </li>
                <li>
                    <NavLink exact to="/letter" activeClassName="focused">방명록</NavLink>
                </li>
                <li>
                    <NavLink exact to="/diary" activeClassName="focused">다이어리</NavLink>
                </li>
            </ul>
        </Nav>
    );  
};

export default Navbar;