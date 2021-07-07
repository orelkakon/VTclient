import {CommentBorder, CommentDesc, NameAndDateComment } from './index'
import './images.css'

const Comment = (props) => {
    
    return (
        <CommentBorder>
            <NameAndDateComment>{`${props.comment.name} - ${props.comment.date}`}</NameAndDateComment>
            <br/>
            <br/>
            <CommentDesc>{props.comment.description}</CommentDesc>
            <br/>
            {  
                props.comment.files && props.comment.files[0] !== "null" && (<img src={props.comment.files} alt="not found 2" id="imgComment" className="img" />)
            }
        </CommentBorder>
    )
}

export default Comment;