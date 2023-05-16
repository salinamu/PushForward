import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;

  li {
    color: #fff;
    margin-right: 24px;
    font-family: var(--primary-font);
    color: white;
    font-weight: 400;
    line-height: 100%;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    z-index: 19;
    flex-direction: column;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    right: 0;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      margin-bottom: 24px;
    }
    background-color: black;
    height: 100vh;
    width: 200px;
    margin-top: -24px;
    padding-top: 64px;
    padding-left: 24px;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
      <Link to="/learnmore">Learn More</Link>

      </li>
      
    </Ul>
  );
};

export default RightNav;
