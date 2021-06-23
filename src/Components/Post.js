import { PostDiv, PostUser, PostTitle, PostImg, PostDate, PostContent } from './Index'

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
        </PostDiv>
    )
}

export default Post;