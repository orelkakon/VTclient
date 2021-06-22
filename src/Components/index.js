import styled from 'styled-components'
import myLogo from './../Assets/logo.png';
import joinUs from './../Assets/joinus.png';

// Header
export const HeaderDiv = styled.div`
    display: flex;
    border: 2px solid black;
    border-radius: 50px 0px 50px 0px;
    box-shadow: 3px 6px black;
    justify-content: center;
    width: fit-content;
    margin: auto;
    text-align: center;
`; 

export const HeaderList = styled.ul`
    display: flex;
    align-items:center;
    justify-content: center;
    padding-left: 0px;
`; 

export const HeaderListElement = styled.li`
    display: flex;  
    padding: 14px;
    font-family: Comic Sans MS;
    font-size: 3.1vw;
    font-weight: bold;
`; 


// Footer
export const FooterDiv = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 18px;
`; 


// Login & Register Page
export const LogoImg = styled.div`
    background-image: url(${myLogo});
    background-repeat: no-repeat;
    height: 200px;
    width: 200px;
    margin: auto;
    zoom: 150%
`;

export const LogoImg2 = styled.div`
    background-image: url(${joinUs});
    background-repeat: no-repeat;
    height: 130px;
    width: 130px;
    margin: auto;
    zoom: 110%
`;

export const LoginForm = styled.form`
    text-align: center;
`;

export const InputField = styled.input`
    color:white;
    padding:10px;
    margin: 2px;
    border-radius:15px;
    box-shadow:4px 4px 10px rgba(255, 255, 255, 0.438);
    background-color: #1a1a1a;
    ::placeholder {
        color: gray;
        opacity: 1; /* Firefox */
    };
`;

export const LoginButton = styled.button`
    border: 5em;
    cursor: pointer;
    outline: none;
    font-size: 16px;
    -webkit-transform: translate(0);
    transform: translate(0);
    background-image: linear-gradient(45deg, #4568dc, #b06ab3);
    padding: 0.7em 2em;
    border-radius: 65px;
    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
    -webkit-transition: box-shadow 0.25s;
    transition: box-shadow 0.25s;
    color: white;
    &:hover {
        background-image: linear-gradient(-45deg, #4568dc, #b06ab3);
        box-shadow: 0 12px 24px rgba(128, 128, 128, 0.1);
    };
    &:after {
        content: "";
        border-radius: 18px;
        position: absolute;
        margin: 4px;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        background: #0e0e10;
    };
`;

// About
export const About = styled.text`
`;

export const AboutContact = styled.div`
    text-align: center;
    font-size: 25px;
    color: #bfbfbf;
    padding: 6px;
    font-family: Comic Sans MS;
`;