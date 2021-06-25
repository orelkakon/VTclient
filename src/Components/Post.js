import { PostDiv, PostUser, PostTitle, PostImg, PostDate, PostContent, CommentsArea, CommentsTitle } from './Index'
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
                props.files.map( Image => {
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
                <AddComment>
                </AddComment>
            </CommentsArea>
            
        </PostDiv>
    )
}

export default Post;