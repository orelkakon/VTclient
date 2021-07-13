import React, { useState, useEffect } from 'react'
import AddPost from "./AddPost";
import Post from './Post'
import BuyPremiumUser from './BuyPremiumUser'
import config from './../config.json'
import axios from 'axios'
import emailjs from 'emailjs-com';
import { notify } from './../LandPage';


const sendEmail = (msg) => {
    emailjs.send('service_ujkeq1m', 'template_wrk83k7', msg, 'user_E410jnUupeNSDYfZ0Wlhi')
        .then((result) => {
            notify(result)
        }, (error) => {
            notify(error)
        });
}


const addNewPost = async (username, title, description, files, resetFields) => {
    if (title === "" || description === "") {
        notify('Empty title or description')
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
            resetFields()
            sendEmail(messageParams)
            notify('successful to add a new direct post')
        }
        else {
            notify('Failed to add a new direct post')
        }
    }).catch(err => {
        notify(err)
    });
}

const addNewComment = async (username, description, postid, files, resetFields) => {
    if (description === "") {
        notify('Empty description')
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
            resetFields()
            notify('successful to add a new direct comment')
        }
        else {
            notify('Failed to add a new direct comment')
        }
    }).catch(err => {
        notify(err)
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
            notify('Failed to load posts. please refresh')
        }
    }).catch(err => {
        notify(err)
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
            notify('Failed to load posts. please refresh')
        }
    }).catch(err => {
        notify(err)
    });
}

const PremiumPage = () => {
    const [premium, setPremium] = useState(document.cookie.includes("yesPremium"));
    const [data, setData] = useState([])
    const admin = document.cookie.includes("orelkakon")
    const user = document.cookie.substring(document.cookie.indexOf(' ') + 1, document.cookie.indexOf(','));
    useEffect(() => {
        admin ? getAdminPosts().then(result => result && setData(result.reverse())) :
            getMyPosts(user).then(result => result && setData(result.reverse()))
    }, [admin, user, data]);
    return (
        <div>

            <br />
            {
                (premium || admin) ?
                    <>
                        <h1 style={{ textAlign: 'center' }}>{admin ? 'Direct Questions for ' + user : 'Direct Questions Of ' + user}</h1>
                        <br />
                        <AddPost message={"Send"} h1={"Ask Direct Question"} addDPost={addNewPost} kind='direct' />
                        <br />
                        {
                            data && data.map(post => {
                                const { name, title, content, date, files, postid, comments } = post
                                return (<><Post name={name} title={title} content={content} date={date} files={files} postid={postid} comments={comments} addDComment={addNewComment} kind='direct' setData={setData} data={data}/> <br /></>)
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