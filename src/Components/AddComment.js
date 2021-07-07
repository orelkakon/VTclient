import {InputAddComment, AddCommentt, ButtonAddComment} from './index'
import { useState } from "react";

const AddComment = (props) => {
    const [comment, setComment] = useState("")
    const [file, setFile] = useState(null)

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setFile(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };
    return (
        <AddCommentt>
            <InputAddComment placeholder="Insert a new comment..." onChange={e => setComment(e.target.value)}></InputAddComment>
            <label className='uploadButton2'>Choose File
            <input onChange={imageHandler} accept="image/*" type="file" style={{display:'none'}}/> </label>
            <br/>
            <ButtonAddComment onClick={() => props.kind === 'blog' ? 
                props.addAcomment(document.cookie.substring(document.cookie.indexOf(' ') + 1, document.cookie.indexOf(',')), comment, props.postid, file):
                props.addComment(document.cookie.substring(document.cookie.indexOf(' ') + 1, document.cookie.indexOf(',')), comment, props.postid, file)
            }>Send</ButtonAddComment>
        </AddCommentt>
    )
}

export default AddComment;