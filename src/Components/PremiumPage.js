import React, {useState} from 'react'
import AddPost from "./AddPost";
import Post from './Post'
import BuyPremiumUser from './BuyPremiumUser'
import exm3 from './../Assets/example3.png'


const PremiumPage = () => {
    const [premium,setPremium] = useState(false);
    const myQuestion = [{
        "name": "dan levi",
        "title": "Mulitple - question 24",
        "content": "its very important for me",
        "date": "10/10/2021",
        "files": [exm3],
        "comments" : [
            {
                "description" : 'this is cross multiple',
                "name": 'orel kakon',
                "date": "24/06/2021"
            }
        ]
    }]
    return (
        <div>
            <br/>
            
            {   premium ?
                <>
                <h1 style={{textAlign:'center'}}>Direct Questions</h1>
                <br/>
                <AddPost message={"Send"} h1={"Ask Direct Question"}/>
                <br/>
                {
                    myQuestion.map(post => {
                        const {name, title, content, date, files, comments} = post
                        return(<><Post name={name} title={title} content={content} date={date} files={files} comments={comments}/> <br/></>)
                    })
                } 
                <br/>
                <br/>
                </> :
                <BuyPremiumUser setPremium={setPremium}/>
            }
        </div>
    )
}

export default PremiumPage;