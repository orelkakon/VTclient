import { AddPostDiv, AddPostDesc, AddPostTitle, ButtonAddPost } from './index'
import { useState } from 'react'
import './images.css'
import icon from './../Assets/upload.png'


const AddPost = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
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
        document.getElementById("addposttitle").value = "";
        document.getElementById("addpostdesc").value = "";
        if (props.english) {
            document.getElementById("addposttitle").placeholder = "Insert title...";
            document.getElementById("addpostdesc").placeholder = "Insert description...";
        }
        else {
            document.getElementById("addposttitle").placeholder = "כותרת...";
            document.getElementById("addpostdesc").placeholder = "תיאור השאלה...";
        }
        document.getElementById("upfile").style.backgroundColor = "transparent";
    }
    return (
        <AddPostDiv style={{ direction: props.english ? 'ltr' : 'rtl' }}>
            <h1>{props.h1}</h1>
            <AddPostTitle id="addposttitle" placeholder={props.english ? "Insert title..." : "כותרת..."} onChange={e => setTitle(e.target.value)}></AddPostTitle>
            <br />
            <AddPostDesc id="addpostdesc" placeholder={props.english ? "Insert description..." : "תיאור השאלה..."} onChange={e => setDescription(e.target.value)}></AddPostDesc>
            <br />
            <label id="upfile" className='uploadButton' style={file ? { backgroundColor: "green" } : { backgroundColor: "transparent" }}><img src={icon} alt="GitHub" style={{ width: "30px", height: "30px" }} />
                <input onChange={imageHandler} accept="image/*" type="file" style={{ display: 'none' }} /> </label>
            <ButtonAddPost onClick={() => props.kind === 'blog' ?
                props.addpost(document.cookie.substring(document.cookie.indexOf(' ') + 1, document.cookie.indexOf(',')), title.replaceAll("'", ""), description.replaceAll("'", ""), file, resetFields, props.english) :
                props.addDPost(document.cookie.substring(document.cookie.indexOf(' ') + 1, document.cookie.indexOf(',')), title.replaceAll("'", ""), description.replaceAll("'", ""), file, resetFields, props.english)
            }>{props.message}</ButtonAddPost>
        </AddPostDiv>
    )
}

export default AddPost;