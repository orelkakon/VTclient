import { AddPostDiv, AddPostDesc, AddPostTitle, ButtonAddPost } from './index'
import react, { useState } from 'react'
import './images.css'

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
    return (
        <AddPostDiv>
            <h1>{props.h1}</h1>
            <AddPostTitle placeholder="Insert title..." onChange={e => setTitle(e.target.value)}></AddPostTitle>
            <br />
            <AddPostDesc placeholder="Insert description..." onChange={e => setDescription(e.target.value)}></AddPostDesc>
            <br />
            <label className='uploadButton'>Choose File
            <input onChange={imageHandler} accept="image/*" type="file" style={{display:'none'}}/> </label>
            
            <ButtonAddPost onClick={() => props.kind === 'blog' ?
                props.addpost(document.cookie.substring(document.cookie.indexOf(' ') + 1, document.cookie.indexOf(',')), title, description, file) :
                props.addDPost(document.cookie.substring(document.cookie.indexOf(' ') + 1, document.cookie.indexOf(',')), title, description, file)
            }>{props.message}</ButtonAddPost>
        </AddPostDiv>
    )
}

export default AddPost;