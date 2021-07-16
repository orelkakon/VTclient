import { PostDiv, PostUser, PostTitle, PostDate, PostContent, CommentsArea, CommentsTitle } from './index'
import Comment from './Comment'
import AddComment from './AddComment'
import DeletePost from './DeletePost'
import config from './../config.json'
import axios from 'axios'
import './images.css'
import { notify } from './../LandPage';

const deletePost = async (postid, kind, setData, data, english) => {
    await axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${kind === 'blog' ? config.urls.deletePost : config.urls.deletePostD}`,
        data: {
            postid: postid,
        }
    })
    await notify(english ? `successful delete post`: "הפוסט נמחק בהצלחה")
    data && setData(data)
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
                <CommentsTitle>{props.english ? 'Comments': 'תגובות'}</CommentsTitle>
                <br /><br />
                {
                    props.comments.map(comment => {
                        return (<Comment english={props.english} comment={comment} kind={props.kind} setData={props.setData} data={props.data}/>)
                    })
                }
                <AddComment english={props.english} addComment={props.addDComment} addAcomment={props.addComment} postid={props.postid} kind={props.kind}>
                </AddComment>

            </CommentsArea>
            {
                (sessionStorage.getItem('session').includes(` ${props.name},`) || sessionStorage.getItem('session').includes(` orelkakon,`)) && <DeletePost english={props.english} delete={deletePost} postid={props.postid} kind={props.kind} setData={props.setData} data={props.data}/>
            }

        </PostDiv>
    )
}

export default Post;