import React from 'react';
import styled from 'styled-components';
import Burger from '../Burger/Burger';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 55px;

`

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export default Navbar