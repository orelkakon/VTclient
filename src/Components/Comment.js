import { CommentBorder, CommentDesc, NameAndDateComment } from './index'
import './images.css'
import DeleteComment from './DeleteComment'
import config from './../config.json'
import axios from 'axios'
import { notify } from './../LandPage';

const deleteComment = async (commentid, kind, setData, data, english) => {
    await axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${kind === 'blog' ? config.urls.deleteComment : config.urls.deleteCommentD}`,
        data: {
            commentid: commentid,
        }
    })
    await notify(english ? `successful delete comment`: "התגובה נמחקה בהצלחה")
    data && setData(data)
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
                (sessionStorage.getItem('session').includes(` ${props.comment.name},`) || sessionStorage.getItem('session').includes(` orelkakon,`)) && <DeleteComment english={props.english} deleteComment={deleteComment} commentid={props.comment.commentid} kind={props.kind} setData={props.setData} data={props.data}/>
            }
        </CommentBorder>
    )
}

export default Comment;