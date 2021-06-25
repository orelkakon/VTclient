import {CommentBorder, CommentDesc, NameAndDateComment, ImageComment } from './Index'

const Comment = (props) => {
    return (
        <CommentBorder>
            <NameAndDateComment>{`${props.comment.name} - ${props.comment.date}`}</NameAndDateComment>
            <br/>
            <br/>
            <CommentDesc>{props.comment.description}</CommentDesc>
            <br/>
            {  
                props.comment.files && props.comment.files.map(img => {
                    return(<ImageComment src={img}/>)
                }) 
            }
        </CommentBorder>
    )
}

export default Comment;