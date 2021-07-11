import {ButtonDeletePost} from './index'

const DeletePost = (props) => {
    return (
        <> 
            <ButtonDeletePost onClick={() => props.delete(props.postid, props.kind)}>Delete Post</ButtonDeletePost>
        </>
    );
};

export default DeletePost;