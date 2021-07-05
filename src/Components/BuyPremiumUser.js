import React, {useState} from 'react';
import { validatePINcode } from './utils'
import { DirectButton, DirectInput, DirectDiv, DivTitles } from './index' 


const BuyPremiumUser = (props) => {
    const [pinCode,setPinCode] = useState("")
    const handlePinCode = async (pincode) => {
        if(validatePINcode(pincode)){
            props.setPremium(true)
            alert("Successful PIN code")
        }
        else{
            alert("Wrong PIN code")
        }
    }
    
    return (
        <div style={{textAlign:"center"}}> 
            <DivTitles>
                <h1>SORRY YOU ARE NOT A PREMIUM USER!</h1>
                <h2 style={{fontFamily: "Comic Sans MS"}}>The service costs 50 NIS per month, can be paid (bit, pay, paybox) through the site owner (details in About)</h2>
                <h2 style={{fontFamily: "Comic Sans MS"}}>Enter the code you received on your cellphone after making a successful payment</h2>
            </DivTitles>
            <br/>
            <DirectDiv>
                <DirectInput placeholder="PIN code" onChange={e => setPinCode(e.target.value)}></DirectInput>
                <br/>
                <DirectButton onClick={()=> handlePinCode(pinCode)}>Submit</DirectButton>
            </DirectDiv>
            <br/><br/>
            <br/><br/>
        </div>
    );
};

export default BuyPremiumUser;