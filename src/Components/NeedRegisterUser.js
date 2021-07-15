import { DivTitles } from './index'
const NeedRegisterUser = (props) => {
    return (
        <div style={{ textAlign: "center" }}>
            <DivTitles style={{ direction: props.english ? 'ltr' : 'rtl' }}>
                {props.english ?
                    <>
                        <h1>ARE YOU REGISTERED USER ?!</h1>
                        <h2 style={{ fontFamily: "Comic Sans MS" }}>If not please <a href="./Registration" style={{ color: 'black' }}>register</a> to the website</h2>
                        <h2 style={{ fontFamily: "Comic Sans MS" }}>If yes please <a href="./" style={{ color: 'black' }}>login</a> to continue</h2>
                    </>
                    :
                    <>
                        <h1>האם אתה משתמש מחובר ?!</h1>
                        <h2 style={{ fontFamily: "Comic Sans MS" }}>אם לא, בבקשה <a href="./Registration" style={{ color: 'black' }}>הירשם</a> לאתר</h2>
                        <h2 style={{ fontFamily: "Comic Sans MS" }}>אם כן, בבקשה <a href="./" style={{ color: 'black' }}>התחבר</a> להמשך</h2>
                    </>
                }
            </DivTitles>
            <br />
            <br /><br />
            <br /><br />
        </div>
    );
}
export default NeedRegisterUser;