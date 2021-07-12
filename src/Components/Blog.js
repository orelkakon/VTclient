import Post from './Post'
import AddPost from './AddPost'
import config from './../config.json'
import axios from 'axios'
import NeedRegisterUser from './NeedRegisterUser'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const addNewPost = async (username, title, description, files) => {
    if (title === "" || description === "") {
        toast.error('Empty title or description', {
            position: "bottom-right",
            autoClose: 20000
        });
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
            toast.info('Successfully to add a new post', {
                position: "bottom-right",
                autoClose: 20000
            });
            window.location.reload();
        }
        else {
            toast.error('Failed to add a new post', {
                position: "bottom-right",
                autoClose: 20000
            });
        }
    }).catch(err => {
        toast.error(`${err}`, {
            position: "bottom-right",
            autoClose: 20000
        });
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
            toast.error('Failed to load posts. please refresh', {
                position: "bottom-right",
                autoClose: 20000
            });
        }
    }).catch(err => {
        toast.error(`${err}`, {
            position: "bottom-right",
            autoClose: 20000
        });
    });
}

const addNewComment = async (username, description, postid, files) => {
    if (description === "") {
        toast.error('Empty description', {
            position: "bottom-right",
            autoClose: 20000
        });
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
            toast.info('Successfully to add a new comment', {
                position: "bottom-right",
                autoClose: 20000
            });
            window.location.reload();
        }
        else {
            toast.error('Failed to add a new comment', {
                position: "bottom-right",
                autoClose: 20000
            });
        }
    }).catch(err => {
        toast.error(`${err}`, {
            position: "bottom-right",
            autoClose: 20000
        });
    });
}

const Blog = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getPosts().then(result => result && setData(result.reverse()))
    }, []);
    return (
        <div>
            <ToastContainer />
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