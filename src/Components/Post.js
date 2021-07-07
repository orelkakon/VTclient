import { PostDiv, PostUser, PostTitle, PostDate, PostContent, CommentsArea, CommentsTitle } from './index'
import Comment from './Comment'
import AddComment from './AddComment'
import './images.css'

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
                        return (<Comment comment={comment} />)
                    })
                }
                <AddComment addComment={props.addDComment} addAcomment={props.addComment} postid={props.postid} kind={props.kind}>
                </AddComment>
            </CommentsArea>

        </PostDiv>
    )
}

export default Post;