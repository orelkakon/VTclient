import {ButtonDeleteComment} from './index'
import icon from './../Assets/delete.png'

const DeleteComment = (props) => {
    return (
        <> 
            <ButtonDeleteComment onClick={() => props.deleteComment(props.commentid, props.kind)}>
                <img src = {icon} alt = "GitHub" style = {{width:"30px", height:"30px"}}/>
            </ButtonDeleteComment>
        </>
    );
};

export default DeleteComment;