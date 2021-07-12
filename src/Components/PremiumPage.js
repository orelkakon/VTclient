import React, { useState, useEffect } from 'react'
import AddPost from "./AddPost";
import Post from './Post'
import BuyPremiumUser from './BuyPremiumUser'
import config from './../config.json'
import axios from 'axios'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const sendEmail = (msg) => {
    emailjs.send('service_lpbnhwu', 'template_wrk83k7', msg, 'user_E410jnUupeNSDYfZ0Wlhi')
        .then((result) => {
            toast.error(`${result}`, {
                position: "bottom-right",
                autoClose: 20000
            });
        }, (error) => {
            toast.error(`${error}`, {
                position: "bottom-right",
                autoClose: 20000
            });
        });
}


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
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.addDirectPost}`,
        data: {
            username: username,
            title: title,
            description: description,
            date: new Date().toLocaleString().replace(',', ''),
            files: files
        }
    }).then(result => {
        if (result.data) {
            const messageParams = {
                from_name: username,
                time: new Date(Date.now() + 3 * 1000 * 60 * 60),
                title: title,
                message: description
            };
            sendEmail(messageParams)
            toast.error('Successfully to add a new direct post', {
                position: "bottom-right",
                autoClose: 20000
            });
            window.location.reload();
        }
        else {
            toast.error('Failed to add a new direct post', {
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
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.addDirectComment}`,
        data: {
            username: username,
            description: description,
            postid: postid,
            date: new Date().toLocaleString().replace(',', ''),
            files: files
        }
    }).then(result => {
        if (result.data) {
            toast.info('Successfully to add a new direct comment', {
                position: "bottom-right",
                autoClose: 20000
            });
            window.location.reload();
        }
        else {
            toast.error('Failed to add a new direct comment', {
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

const getMyPosts = async (user) => {
    return await axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.getMyPosts}`,
        data: {
            username: user
        }
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

const getAdminPosts = async () => {
    return await axios({
        method: 'get',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.getAdminPosts}`
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

const PremiumPage = () => {
    const [premium, setPremium] = useState(document.cookie.includes("yesPremium"));
    const [myData, setMyData] = useState([])
    const admin = document.cookie.includes("orelkakon")
    const user = document.cookie.substring(document.cookie.indexOf(' ') + 1, document.cookie.indexOf(','));
    useEffect(() => {
        admin ? getAdminPosts().then(result => result && setMyData(result.reverse())) :
            getMyPosts(user).then(result => result && setMyData(result.reverse()))
    }, [admin, user]);
    return (
        <div>
            <ToastContainer />
            <br />
            {
                (premium || admin) ?
                    <>
                        <h1 style={{ textAlign: 'center' }}>{admin ? 'Direct Questions for ' + user : 'Direct Questions Of ' + user}</h1>
                        <br />
                        <AddPost message={"Send"} h1={"Ask Direct Question"} addDPost={addNewPost} kind='direct' />
                        <br />
                        {
                            myData && myData.map(post => {
                                const { name, title, content, date, files, postid, comments } = post
                                return (<><Post name={name} title={title} content={content} date={date} files={files} postid={postid} comments={comments} addDComment={addNewComment} kind='direct' /> <br /></>)
                            })
                        }
                        <br />
                        <br />
                    </> :
                    <BuyPremiumUser setPremium={setPremium} />
            }
        </div>
    )
}

export default PremiumPage;