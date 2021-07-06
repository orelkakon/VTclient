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
    padding: 10px;
    font-family: Comic Sans MS;
    font-size: 3.5vw;
    font-weight: 950;
`; 


// Footer
export const FooterDiv = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 950;
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
    height: 138px;
    width: 130px;
    margin: auto;
    zoom: 110%
`;

export const LoginForm = styled.form`
    text-align: center;
`;

export const LogoutForm = styled.form`
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

export const LogoutButton = styled.button`
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
    font-size: 28px;
    color: black;
    padding: 6px;
    font-family: Comic Sans MS;
`;

// Post
export const PostDiv = styled.div`
    text-align: center;
    border: solid 2px black;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 8px 10px black;
    width: 90%;
    margin: auto;
    justify-content: center;
    background-color: #e6e6ff;
`;

export const PostUser = styled.text`
    display: flex;
    font-size: 25px;
    float: left;
    margin: 10px 0px 0px 10px;
    @media all and (min-width: 1024px)
    {
        font-size: 35px;     
    }
`;

export const PostDate = styled.text`
    display: flex;
    font-size: 25px;
    float: right;
    margin: 10px 10px 0px 0px;
    @media all and (min-width: 1024px)
    {
        font-size: 35px;     
    }
`;

export const PostTitle = styled.text`
    display: flex;
    font-size: 28px;
    justify-content: center;
    text-decoration: underline;
    width: 100%;
`;

export const PostContent = styled.text`
    display: flex;
    font-size: 25px;
    justify-content: center;  
`;

export const PostImg = styled.div`
    display: flex; 
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    height: 300px;
    width: 300px;
    margin: auto;
    @media all and (min-width: 1024px)
    {
        &:hover
        {
            transform: scale(3)
        }
    }

`;

export const CommentsArea = styled.div`
    border: none 2px black;
    border-radius: 10px 10px 10px 10px;
    padding-bottom: 10px;
    margin: 10px 10px 10px 10px; 
    background-color: #b3b3ff;
`;

export const CommentsTitle = styled.text`
    font-size: 35px;
    text-shadow: 2px 2px black;
`;

//Comment

export const CommentBorder = styled.div`
    border: none 2px black;
    border-radius: 20px 20px 20px 20px;
    padding-bottom: 5px;
    margin: 0px 25px 5px 25px;
    background-color: #e6e6ff;
`;  

export const CommentDesc = styled.text`
    font-size: 20px;
`;

export const NameAndDateComment = styled.text`
    text-decoration: underline;
    font-size: 18px;
    float: left;
    margin-left: 5px;
    text-shadow: 1px 1px black;
`;

// AddComment

export const AddCommentt = styled.div`
    position: relative;
`;

export const InputAddComment = styled.textarea`
    background-color: #e6e6ff;
    width: 82%;
    min-height: 15vh;
    border-radius: 15px 15px 15px 15px;
    border: none;
    padding: 0px 5px 0px 5px;
    resize: none;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: gray;
        padding: 0px 5px 0px 5px;
        font-family: Comic Sans MS;
    };
    @media all and (min-width: 1024px)
    {
        width: 95%;
    }
`;

export const ButtonAddComment = styled.button`
    position: relative;
    width: 80px;
    height: 36px;
    border-radius: 18px;
    background-color: #e6e6ff;
    border: solid 1px transparent;
    color: #000;
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
    transition: all .1s ease-in-out;
    &:hover {
        background-color: transparent;
        border-color: #fff;
        transition: all .1s ease-in-out;
    }

`;

export const ImageComment = styled.img`
    height: auto;
    max-width:90%;
    max-height:90%;
    margin: auto;
    &:hover
    {
        zoom: 170%
    }
`;

export const ButtonAddFile = styled.button`
    position: absolute;
    left: 80%;
    top: 51%;
    border-radius: 18px;
    background-color: #b3b3ff;
    border: solid 1px transparent;
    color: #000;
    cursor:pointer;
    &:hover {
        background-color: transparent;
        border-color: #fff;
        transition: all .1s ease-in-out;
    }
    @media all and (min-width: 1024px)
    {
        left: 94.5%;
    }
`;

// Links
export const LinksDiv = styled.div`
    text-align: center;
    justify-content: center;
`;

export const FolderButton = styled.button`
    display: inline-flex;
    align-items: center;
    background: black;
    box-shadow: 0 3px 2px 0 rgba(0,0,0,0.1);
    border-radius: 5px;
    height: 45px;
    padding: 30px 30px;
    width: 110px;
    color: #fff;
    font-family: Lato, Arial, sans-serif;
    text-decoration: none;
    transition: background .3s, transform .3s, box-shadow .3s;
    will-change: transform;
    
    &:hover {
        background: darken(#C06C84,10%);
        box-shadow: 0 4px 17px rgba(0,0,0,0.2);
        transform: translate3d(0, -2px, 0);
    }
    &:active {
        box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1);
        transform: translate3d(0, 1px, 0);
    }
`;

export const FilesDiv = styled.div`
    justify-content: center;
    padding: 40px;
`;

// AddPost
export const AddPostDiv = styled.div`
    position: relative;
    text-align:center;
    justify-content: center;
    border: solid 2px black;
    box-shadow: 8px 10px black;
    border-radius: 20px 20px 20px 20px;
    padding-bottom: 5px;
    margin: auto;
    background-color: #e6e6ff;
    width: 90%;
`;

export const AddPostTitle = styled.input`
    background-color: #b3b3ff;
    border-radius: 15px 15px 15px 15px;
    border: none;
    padding: 5px 5px 5px 5px;
    margin: 10px 10px 10px 10px;
    width: 90%;
    height: 5vh;
    font-family: Comic Sans MS;

`;

export const AddPostDesc = styled.textarea`
    background-color: #b3b3ff;
    border-radius: 15px 15px 15px 15px;
    border: none;
    padding: 5px 5px 5px 5px;
    resize: none;
    width: 90%;
    height: 40vh;
    font-family: Comic Sans MS;

`;

export const ButtonAddPostFile = styled.button`
    position: absolute;
    left: 85%;
    top: 84%;
    border-radius: 18px;
    background-color: #e6e6ff;
    border: solid 1px transparent;
    color: #000;
    cursor:pointer;
    &:hover {
        background-color: transparent;
        border-color: #fff;
        transition: all .1s ease-in-out;
    }
    @media all and (min-width: 1024px)
    {
        left: 92%;
    }
`;

export const ButtonAddPost = styled.button`
    position: relative;
    width: 80px;
    height: 36px;
    border-radius: 18px;
    background-color: #b3b3ff;
    border: solid 1px transparent;
    color: #000;
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
    transition: all .1s ease-in-out;
    &:hover {
        background-color: transparent;
        border-color: #fff;
        transition: all .1s ease-in-out;
    }

`;

export const DirectButton = styled.button`
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

export const DirectInput = styled.input`
    width: 20vh;
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

export const DirectDiv = styled.div`
    text-align: center;
    justify-content: center;
`;

export const DivTitles = styled.div`
    border: solid 2px black;
    border-radius: 20px 0px 20px 0px;
    width: 90%;
    margin: auto;
    justify-content: center;
    box-shadow: 3px 6px black;
`;