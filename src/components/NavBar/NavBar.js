import React from 'react';
import { StyledNavBar, NavItemLink } from './style';

function NavBar({ children }) {
    return(
        <StyledNavBar>
            <NavItemLink to= "/login">Log in</NavItemLink>
            <NavItemLink to="/signup" fill>Sign up</NavItemLink>
        </StyledNavBar>
    );
}

export default NavBar;