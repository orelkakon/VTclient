import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderDiv, HeaderList, HeaderListElement } from './index'

const Header = (props) => {
    return (
        <>
            <HeaderDiv>
                <HeaderList>
                    <HeaderListElement>
                        <NavLink to="/" style={{ textDecoration: 'none', color: 'black', textShadow: '2px 2px gray' }} activeClassName="nl" exact activeStyle={
                            { textDecoration: 'underline' }
                        }>{props.logged ? 'Logout' : 'Login'}</NavLink>
                    </HeaderListElement>
                    {
                        !props.logged &&
                        <HeaderListElement>
                            <NavLink to="/Registration" style={{ textDecoration: 'none', color: 'black', textShadow: '2px 2px gray' }} activeClassName="nl" exact activeStyle={
                                { textDecoration: 'underline' }
                            }>Register</NavLink>
                        </HeaderListElement>
                    }
                    <HeaderListElement>
                        <NavLink to="/AboutAndContact" style={{ textDecoration: 'none', color: 'black', textShadow: '2px 2px gray' }} activeClassName="nl" exact activeStyle={
                            { textDecoration: 'underline' }
                        }>About</NavLink>
                    </HeaderListElement>
                    <HeaderListElement>
                        <NavLink to="/PremiumPage" style={{ textDecoration: 'none', color: 'black', textShadow: '2px 2px gray' }} activeClassName="nl" exact activeStyle={
                            { textDecoration: 'underline' }
                        }>Direct</NavLink>
                    </HeaderListElement>
                    <HeaderListElement>
                        <NavLink to="/Blog" style={{ textDecoration: 'none', color: 'black', textShadow: '2px 2px gray' }} activeClassName="nl" exact activeStyle={
                            { textDecoration: 'underline' }
                        }>Explore</NavLink>
                    </HeaderListElement>
                    <HeaderListElement>
                        <NavLink to="/Links" style={{ textDecoration: 'none', color: 'black', textShadow: '2px 2px gray' }} activeClassName="nl" exact activeStyle={
                            { textDecoration: 'underline' }
                        }>Links</NavLink>
                    </HeaderListElement>
                </HeaderList>
            </HeaderDiv>
        </>
    );
};

export default Header;