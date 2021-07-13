import {InputAddComment, AddCommentt, ButtonAddComment} from './index'
import { useState } from "react";
import icon from './../Assets/upload.png'


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
    const resetFields = () => {
        document.getElementById("inputaddcomment").value = "";
        document.getElementById("inputaddcomment").placeholder = "Insert a new comment...";
        document.getElementById("upfile2").style.backgroundColor = "transparent";
    }
    return (
        <AddCommentt>
            <InputAddComment id="inputaddcomment" placeholder="Insert a new comment..." onChange={e => setComment(e.target.value)}></InputAddComment>
            <label id="upfile2" className='uploadButton2' style={file ? {backgroundColor: "green"} : {backgroundColor: "transparent"}}><img src = {icon} alt = "GitHub" style = {{width:"30px",height:"30px"}}/>
            <input onChange={imageHandler} accept="image/*" type="file" style={{display:'none'}}/> </label>
            <br/>
            <ButtonAddComment onClick={() => props.kind === 'blog' ? 
                props.addAcomment(document.cookie.substring(document.cookie.indexOf(' ') + 1, document.cookie.indexOf(',')), comment.replaceAll("'",""), props.postid, file, resetFields):
                props.addComment(document.cookie.substring(document.cookie.indexOf(' ') + 1, document.cookie.indexOf(',')), comment.replaceAll("'",""), props.postid, file, resetFields)
            }>Send</ButtonAddComment>
            
        </AddCommentt>
    )
}

export default AddComment;