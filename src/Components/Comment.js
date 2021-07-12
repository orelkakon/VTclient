import { CommentBorder, CommentDesc, NameAndDateComment } from './index'
import './images.css'
import DeleteComment from './DeleteComment'
import config from './../config.json'
import axios from 'axios'
import { notify } from './../LandPage';

const deleteComment = async (commentid, kind) => {
    await axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${kind === 'blog' ? config.urls.deleteComment : config.urls.deleteCommentD}`,
        data: {
            commentid: commentid,
        }
    })
    await notify(`successful delete post`)
    window.location.reload()
}

const Comment = (props) => {
    return (
        <CommentBorder>

            <NameAndDateComment>{`${props.comment.name} - ${props.comment.date}`}</NameAndDateComment>
            <br />
            <br />
            <CommentDesc>{props.comment.description}</CommentDesc>
            <br />
            {
                props.comment.files && props.comment.files[0] !== "null" && (<img src={props.comment.files} alt="not found 2" id="imgComment" className="img" />)
            }
            {
                (document.cookie.includes(` ${props.comment.name},`) || document.cookie.includes(` orelkakon,`)) && <DeleteComment deleteComment={deleteComment} commentid={props.comment.commentid} kind={props.kind} />
            }
        </CommentBorder>
    )
}

export default Comment;