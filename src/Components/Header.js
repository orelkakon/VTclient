import React from 'react';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';
import { HeaderDiv, HeaderList, HeaderListElement } from './index'

function Header() {
    return (
        <>
            <HeaderDiv>
                <HeaderList>
                    <HeaderListElement>
                        <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }} activeClassName="nl" exact activeStyle={
                            { textDecoration: 'underline' }
                        }>{document.cookie ? 'Logout' : 'Login'}</NavLink>
                    </HeaderListElement>
                    {
                    !document.cookie &&
                    <HeaderListElement>
                        <NavLink to="/Registration" style={{ textDecoration: 'none', color: 'black' }} activeClassName="nl" exact activeStyle={
                            { textDecoration: 'underline' }
                        }>Register</NavLink>
                    </HeaderListElement>
                    } 
                    <HeaderListElement>
                        <NavLink to="/AboutAndContact" style={{ textDecoration: 'none', color: 'black' }} activeClassName="nl" exact activeStyle={
                            { textDecoration: 'underline' }
                        }>About</NavLink>
                    </HeaderListElement>
                    <HeaderListElement>
                        <NavLink to="/PremiumPage" style={{ textDecoration: 'none', color: 'black' }} activeClassName="nl" exact activeStyle={
                            { textDecoration: 'underline' }
                        }>Direct</NavLink>
                    </HeaderListElement>
                    <HeaderListElement>
                        <NavLink to="/Blog" style={{ textDecoration: 'none', color: 'black' }} activeClassName="nl" exact activeStyle={
                            { textDecoration: 'underline' }
                        }>Explore</NavLink>
                    </HeaderListElement>
                    <HeaderListElement>
                        <NavLink to="/Links" style={{ textDecoration: 'none', color: 'black' }} activeClassName="nl" exact activeStyle={
                            { textDecoration: 'underline' }
                        }>Links</NavLink>
                    </HeaderListElement>
                </HeaderList>
            </HeaderDiv>
        </>
    );
};

export default Header;