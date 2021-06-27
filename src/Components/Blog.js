import exm1 from './../Assets/example1.png'
import exm1_1 from './../Assets/example1_1.png'
import exm2 from './../Assets/example2.png'
import exm3 from './../Assets/example3.png'
import exm4 from './../Assets/example4.png'
import Post from './Post'
import AddPost from './AddPost'
const Blog = () => {
    const data = [
        {
            "name": "orel kakon",
            "title": "hard question please help",
            "content": "basic algebra, but I dont success to solve",
            "date": "17/06/2021",
            "files": [exm1, exm1_1],
            "comments" : [
                {
                    "description" : 'this is 9',
                    "name": 'orel kakon',
                    "date": "24/06/2021",
                    "files": [exm4]
                },
                {
                    "description" : 'this is long divided',
                    "name": 'orel kakon',
                    "date": "24/06/2021",
                    "files": []
                },
            ]
        },
        {
            "name": "hadar ivgi",
            "title": "please help me orel",
            "content": "Geometry and Trigo",
            "date": "20/02/2021",
            "files": [exm2],
            "comments" : [
                {
                    "description" : 'this is sinus fourmula',
                    "name": 'orel kakon',
                    "date": "24/06/2021",
                    "files": []
                }
            ]
        },
        {
            "name": "dan levi",
            "title": "Mulitple - question 24",
            "content": "its very important for me",
            "date": "10/10/2021",
            "files": [exm3],
            "comments" : [
                // {
                //     "description" : 'this is cross multiple',
                //     "name": 'orel kakon',
                //     "date": "24/06/2021"
                // }
            ]
        }
    ]
    return (
        <div>
            <br/>
            <h1 style={{textAlign:'center'}}>Global Questions</h1>
            <br/>
            <AddPost message={"Publish"} h1={"Ask Global Question"}/>
            <br/>   
            {
                data.map(post => {
                    const {name, title, content, date, files, comments} = post
                    return(<><Post name={name} title={title} content={content} date={date} files={files} comments={comments}/> <br/></>)
                })
            }
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default Blog;