import {InputAddComment, AddCommentt, ButtonAddComment, ButtonAddFile} from './index'
import addFile from '../Assets/addFile.png';
import { useState } from "react";

const AddComment = (props) => {
    const [comment, setComment] = useState("")
    return (
        <AddCommentt>
            <InputAddComment placeholder="Insert a new comment..." onChange={e => setComment(e.target.value)}></InputAddComment>
            <ButtonAddFile>
                <img src = {addFile} alt = "addFile" style={{width:"20px",height:"20px"}}/>
            </ButtonAddFile>
            <br/>
            <ButtonAddComment onClick={() => props.kind === 'blog' ? 
            props.addAcomment(document.cookie.substring(document.cookie.indexOf(' ') + 1, document.cookie.indexOf(',')), comment, props.postid, ['./../example1']):
            props.addComment(document.cookie.substring(document.cookie.indexOf(' ') + 1, document.cookie.indexOf(',')), comment, props.postid, ['./../example1'])
            }>Send</ButtonAddComment>
        </AddCommentt>
    )
}

export default AddComment;