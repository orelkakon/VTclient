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
                        }>{props.logged ? (props.english ? 'Logout' : 'התנתק') : (props.english ? 'Login' : 'התחבר')}</NavLink>
                    </HeaderListElement>
                    {
                        !props.logged &&
                        <HeaderListElement>
                            <NavLink to="/Registration" style={{ textDecoration: 'none', color: 'black', textShadow: '2px 2px gray' }} activeClassName="nl" exact activeStyle={
                                { textDecoration: 'underline' }
                            }>{props.english ? 'Register' : 'הירשם'}</NavLink>
                        </HeaderListElement>
                    }
                    <HeaderListElement>
                        <NavLink to="/AboutAndContact" style={{ textDecoration: 'none', color: 'black', textShadow: '2px 2px gray' }} activeClassName="nl" exact activeStyle={
                            { textDecoration: 'underline' }
                        }>{props.english ? 'About' : 'אודות'}</NavLink>
                    </HeaderListElement>
                    <HeaderListElement>
                        <NavLink to="/PremiumPage" style={{ textDecoration: 'none', color: 'black', textShadow: '2px 2px gray' }} activeClassName="nl" exact activeStyle={
                            { textDecoration: 'underline' }
                        }>{props.english ? 'Direct' : 'דיירקט'}</NavLink>
                    </HeaderListElement>
                    <HeaderListElement>
                        <NavLink to="/Blog" style={{ textDecoration: 'none', color: 'black', textShadow: '2px 2px gray' }} activeClassName="nl" exact activeStyle={
                            { textDecoration: 'underline' }
                        }>{props.english ? 'Explore' : 'הבלוג'}</NavLink>
                    </HeaderListElement>
                    <HeaderListElement>
                        <NavLink to="/Links" style={{ textDecoration: 'none', color: 'black', textShadow: '2px 2px gray' }} activeClassName="nl" exact activeStyle={
                            { textDecoration: 'underline' }
                        }>{props.english ? 'Links' : 'קישורים'}</NavLink>
                    </HeaderListElement>
                </HeaderList>
            </HeaderDiv>
        </>
    );
};

export default Header;