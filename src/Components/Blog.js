import Post from './Post'
import AddPost from './AddPost'
import config from './../config.json'
import axios from 'axios'
import NeedRegisterUser from './NeedRegisterUser'
import { useState, useEffect } from 'react'
import { notify } from './../LandPage';

const addNewPost = async (username, title, description, files, resetFields, english) => {
    if (title === "" || description === "") {
        notify(english ? 'Empty title or description': "ישנו שדה ריק")
        return
    }
    await axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.addPost}`,
        data: {
            username: username,
            title: title,
            description: description,
            date: new Date().toLocaleString().replace(',', ''),
            files: files
        }
    }).then(result => {
        if (result.data) {
            resetFields()
            notify(english ? 'successful to add a new post': "העלאת פוסט חדש בוצעה בהצלחה")
        }
        else {
            notify(english ? 'Failed to add a new post' : "העלאת פוסט חדש נכשלה")
        }
    }).catch(err => {
        notify(err)
    });
}

const getPosts = async (english) => {
    return await axios({
        method: 'get',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.getPosts}`
    }).then(result => {
        if (result.data) {
            return result.data
        }
        else {
            notify(english ? 'Failed to load posts. please refresh': "טעינת פוסטים נכשלה, אנא רענן")
        }
    }).catch(err => {
        notify(err)
    });
}

const addNewComment = async (username, description, postid, files, resetFields, english) => {
    if (description === "") {
        await notify(english ? 'Empty description': "שדה תוכן ריק")
        return
    }
    await axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.addNewComment}`,
        data: {
            username: username,
            description: description,
            postid: postid,
            date: new Date().toLocaleString().replace(',', ''),
            files: files
        }
    }).then(result => {
        if (result.data) {
            resetFields()
            notify(english ? 'successful to add a new comment': "הוספת תגובה חדשה בוצעה בהצלחה")
        }
        else {
            notify(english ? 'Failed to add a new comment': "הוספת תגובה חדשה נכשלה")
        }
    }).catch(err => {
        notify(err)
    });
}

const Blog = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        getPosts().then(result => result && setData(result.reverse()))
    }, [data]);
    return (
        <div>
            <br />
            {
                (sessionStorage.getItem('session') ? sessionStorage.getItem('session').includes('username') : false) ?
                    <>
                        <h1 style={{ textAlign: 'center' }}>{props.english ? 'Global Questions' : 'בלוג השאלות החופשי'}</h1>
                        <br />
                        <AddPost english={props.english} message={props.english ? "Publish" : "פרסם"} h1={props.english ? "Ask Global Question" : "שאל שאלה חדשה"} addpost={addNewPost} kind='blog' />
                        <br />
                        {
                            data && data.map(post => {
                                const { name, title, content, date, files, comments, postid } = post
                                return (<><Post english={props.english} name={name} title={title} content={content} date={date} files={files} comments={comments} postid={postid} addComment={addNewComment} kind='blog' setData={setData} data={data}/> <br /></>)
                            })
                        }
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </>
                    : <NeedRegisterUser english={props.english}/>
            }
        </div>
    )
}

export default Blog;