import { DivTitles } from './index'
const NeedRegisterUser = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <DivTitles>
                <h1>ARE YOU REGISTERED USER ?!</h1>
                <h2 style={{ fontFamily: "Comic Sans MS" }}>If not please <a href="./Registration" style={{color: 'black' }}>register</a> to the website</h2>
                <h2 style={{ fontFamily: "Comic Sans MS" }}>If yes please <a href="./"  style={{color: 'black' }}>login</a> to continue</h2>
            </DivTitles>
            <br />
            <br /><br />
            <br /><br />
        </div>
    );
}
export default NeedRegisterUser;