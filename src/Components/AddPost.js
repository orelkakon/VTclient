import {AddPostDiv, AddPostDesc, AddPostTitle, ButtonAddPost, ButtonAddPostFile} from './index'
import addFile from '../Assets/addFile.png';
import react,{useState} from 'react'

const AddPost = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <AddPostDiv>
            <h1>{props.h1}</h1>
            <AddPostTitle placeholder="Insert title..." onChange={e => setTitle(e.target.value)}></AddPostTitle>
            <br/>
            <AddPostDesc placeholder="Insert description..." onChange={e => setDescription(e.target.value)}></AddPostDesc>
            <br/>
            <ButtonAddPostFile>
                <img src = {addFile} alt = "addFile" style={{width:"20px",height:"20px"}}/>
            </ButtonAddPostFile>
            <ButtonAddPost onClick={() => props.addpost('orelkakon', title, description, ['./ss/ss'])}>{props.message}</ButtonAddPost>
        </AddPostDiv>
    )
}

export default AddPost;