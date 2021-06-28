import {InputAddComment, AddCommentt, ButtonAddComment, ButtonAddFile} from './index'
import addFile from '../Assets/addFile.png';

const AddComment = () => {
    return (
        <AddCommentt>
            <InputAddComment placeholder="Insert a new comment..."></InputAddComment>
            <ButtonAddFile>
                <img src = {addFile} alt = "addFile" style={{width:"20px",height:"20px"}}/>
            </ButtonAddFile>
            <br/>
            <ButtonAddComment>Send</ButtonAddComment>
        </AddCommentt>
    )
}

export default AddComment;