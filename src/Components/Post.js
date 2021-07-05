import { PostDiv, PostUser, PostTitle, PostImg, PostDate, PostContent, CommentsArea, CommentsTitle } from './index'
import Comment from './Comment'
import AddComment from './AddComment' 

const Post = (props) => {
    return (
        <PostDiv>
            <PostUser>{props.name}</PostUser>
            <PostDate>{props.date}</PostDate>
            <br/><br/>
            <PostTitle>{props.title}</PostTitle>
            <PostContent>{props.content}</PostContent>
            <br/>
            {
                props.files && props.files.map( Image => {
                    return (<PostImg image={Image}/>)
                })  
            }
            
            <CommentsArea>
                <CommentsTitle>Comments</CommentsTitle>
                <br/><br/>
                {   
                    props.comments.map( comment => {
                        return ( <Comment comment={comment}/> )
                    })
                }
                <AddComment addAcomment={props.addComment} postid={props.postid}>
                </AddComment>
            </CommentsArea>
            
        </PostDiv>
    )
}

export default Post;