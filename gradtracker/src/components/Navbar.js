// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #282c34;
  padding: 1rem;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const NavItem = styled.li`
  color: white;
  font-size: 1.2rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
        </NavItem>
        <NavItem>
          <Link to="/course-planner" style={{ color: 'white', textDecoration: 'none' }}>Course Planner</Link>
        </NavItem>
        <NavItem>
          <Link to="/degree-progress" style={{ color: 'white', textDecoration: 'none' }}>Degree Progress</Link>
        </NavItem>
        <NavItem>
          <Link to="/what-if" style={{ color: 'white', textDecoration: 'none' }}>What-If Scenarios</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
