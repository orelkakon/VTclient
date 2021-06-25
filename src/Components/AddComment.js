import {InputAddComment, AddCommentt, ButtonAddComment} from './Index'

const AddComment = () => {
    return (
        <AddCommentt>
            <InputAddComment placeholder="Insert a new comment..."></InputAddComment>
            <br/>
            <ButtonAddComment>Send</ButtonAddComment>
        </AddCommentt>
    )
}

export default AddComment;