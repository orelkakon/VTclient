import Post from './Post'
import AddPost from './AddPost'
import config from './../config.json'
import axios from 'axios'
import NeedRegisterUser from './NeedRegisterUser'
import { useState, useEffect } from 'react'
import { notify } from './../LandPage';

const addNewPost = async (username, title, description, files) => {
    if (title === "" || description === "") {
        notify('Empty title or description')
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
            notify('Successfully to add a new post')
            window.location.reload();
        }
        else {
            notify('Failed to add a new post')
        }
    }).catch(err => {
        notify(err)
    });
}

const getPosts = async () => {
    return await axios({
        method: 'get',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.getPosts}`
    }).then(result => {
        if (result.data) {
            return result.data
        }
        else {
            notify('Failed to load posts. please refresh')
        }
    }).catch(err => {
        notify(err)
    });
}

const addNewComment = async (username, description, postid, files) => {
    if (description === "") {
      await notify('Empty description')
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
            notify('Successfully to add a new comment')
            window.location.reload();
        }
        else {
            notify('Failed to add a new comment')
        }
    }).catch(err => {
        notify(err)
    });
}

const Blog = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getPosts().then(result => result && setData(result.reverse()))
    }, []);
    return (
        <div>
            
            <br />
            {
                document.cookie.includes('username') ?
                    <>
                        <br />
                        <h1 style={{ textAlign: 'center' }}>Global Questions</h1>
                        <br />
                        <AddPost message={"Publish"} h1={"Ask Global Question"} addpost={addNewPost} kind='blog' />
                        <br />
                        {
                            data && data.map(post => {
                                const { name, title, content, date, files, comments, postid } = post
                                return (<><Post name={name} title={title} content={content} date={date} files={files} comments={comments} postid={postid} addComment={addNewComment} kind='blog' /> <br /></>)
                            })
                        }
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </>
                    : <NeedRegisterUser />
            }
        </div>
    )
}

export default Blog;