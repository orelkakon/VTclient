import { PostDiv, PostUser, PostTitle, PostDate, PostContent, CommentsArea, CommentsTitle } from './index'
import Comment from './Comment'
import AddComment from './AddComment'
import DeletePost from './DeletePost'
import config from './../config.json'
import axios from 'axios'
import './images.css'
import { notify } from './../LandPage';

const deletePost = async (postid, kind, setData, data) => {
    await axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${kind === 'blog' ? config.urls.deletePost : config.urls.deletePostD}`,
        data: {
            postid: postid,
        }
    })
    await notify(`successful delete post`)
    setData(data)
}


const Post = (props) => {
    return (
        <PostDiv>            
            <PostUser>{props.name}</PostUser>
            <PostDate>{props.date}</PostDate>
            <br /><br />
            <PostTitle>{props.title}</PostTitle>
            <PostContent>{props.content}</PostContent>
            <br />
            {
                props.files && props.files[0] !== "null" && (<img src={props.files} alt="not found" id="img" className="img" />)
            }
            <CommentsArea>
                <CommentsTitle>Comments</CommentsTitle>
                <br /><br />
                {
                    props.comments.map(comment => {
                        return (<Comment comment={comment} kind={props.kind} setData={props.setData} data={props.data}/>)
                    })
                }
                <AddComment addComment={props.addDComment} addAcomment={props.addComment} postid={props.postid} kind={props.kind}>
                </AddComment>

            </CommentsArea>
            {
                (document.cookie.includes(` ${props.name},`) || document.cookie.includes(` orelkakon,`)) && <DeletePost delete={deletePost} postid={props.postid} kind={props.kind} setData={props.setData} data={props.data}/>
            }

        </PostDiv>
    )
}

export default Post;