import exm1 from './../Assets/example1.png'
import exm1_1 from './../Assets/example1_1.png'
import exm2 from './../Assets/example2.png'
import exm3 from './../Assets/example3.png'
import Post from './Post'

const Blog = () => {
    const data = [
        {
            "name": "orel kakon",
            "title": "development title",
            "content": "content1",
            "date": "17/06/2021",
            "files": [exm1, exm1_1]
        },
        {
            "name": "hadar ivgi",
            "title": "titlekkkkkkkkkkkkkkk2",
            "content": "content2",
            "date": "20/02/2021",
            "files": [exm2]
        },
        {
            "name": "user name",
            "title": "Trigo - need a help in question 3",
            "content": "content3",
            "date": "date3",
            "files": [exm3]
        }
    ]
    return (
        <div>
            <br/>
            <br/>
            {
                data.map(post => {
                    const {name, title, content, date, files} = post
                    return(<><Post name={name} title={title} content={content} date={date} files={files}/> <br/></>)
                })
            }
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default Blog;