import {AddPostDiv, AddPostDesc, AddPostTitle, ButtonAddPost, ButtonAddPostFile} from './index'
import addFile from '../Assets/addFile.png';

const AddPost = (props) => {
    return (
        <AddPostDiv>
            <h1>{props.h1}</h1>
            <AddPostTitle placeholder="Insert title..."></AddPostTitle>
            <br/>
            <AddPostDesc placeholder="Insert description..."></AddPostDesc>
            <br/>
            <ButtonAddPostFile>
                <img src = {addFile} alt = "addFile" style={{width:"20px",height:"20px"}}/>
            </ButtonAddPostFile>
            <ButtonAddPost>{props.message}</ButtonAddPost>
        </AddPostDiv>
    )
}

export default AddPost;