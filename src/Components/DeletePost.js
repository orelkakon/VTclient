import { ButtonDeletePost } from './index'
import icon from './../Assets/delete.png'

const DeletePost = (props) => {
    return (
        <>
            <ButtonDeletePost onClick={() => props.delete(props.postid, props.kind)}>
                <img src={icon} alt="GitHub" style={{ width: "30px", height: "30px" }} />
            </ButtonDeletePost>
        </>
    );
};

export default DeletePost;