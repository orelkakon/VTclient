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
            
        }, (error) => {
            alert("No Internet Connection: " + error)
        });
}


const addNewPost = async (username, title, description, files, resetFields, english, setFile) => {
    if (title === "" || description === "") {
        notify(english ? 'Empty title or description' : "ישנו שדה ריק")
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
            notify(english ? 'successful to add a new direct post': "העלאת פוסט אישי בוצעה בהצלחה")
        }
        else {
            notify(english ? 'Failed to add a new direct post': "העלאת פוסט אישי נכשלה")
        }
        setFile(null)
    }).catch(err => {
        setFile(null)
        notify(err)
    });
}

const addNewComment = async (username, description, postid, files, resetFields, english, setFile) => {
    if (description === "") {
        notify(english ? 'Empty description': "שדה תוכן ריק")
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
            notify(english ? 'successful to add a new direct comment': "הוספת תגובה בוצעה בהצלחה")
        }
        else {
            notify(english ? 'Failed to add a new direct comment': "הוספת תגובה נכשלה")
        }
        setFile(null)
    }).catch(err => {
        setFile(null)
        notify(err)
    });
}

const getMyPosts = async (user, english) => {
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
            notify(english ? 'Failed to load posts. please refresh': "טעינת פוסטים נכשלה, אנא רענן")
        }
    }).catch(err => {
        notify(err)
    });
}

const getAdminPosts = async (english) => {
    return await axios({
        method: 'get',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.getAdminPosts}`
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

const PremiumPage = (props) => {
    const [premium, setPremium] = useState(sessionStorage.getItem('session') ? sessionStorage.getItem('session').includes("yesPremium") : false);
    const [data, setData] = useState([])
    const admin = sessionStorage.getItem('session') ? sessionStorage.getItem('session').includes("orelkakon") : false
    const user = sessionStorage.getItem('session') ? sessionStorage.getItem('session').substring(sessionStorage.getItem('session').indexOf(' ') + 1, sessionStorage.getItem('session').indexOf(',')) : false;
    useEffect(() => {
        admin ? getAdminPosts(props.english).then(result => result && setData(result.reverse())) :
            getMyPosts(user, props.english).then(result => result && setData(result.reverse()))
    }, [admin, user, data, props.english]);
    return (
        <div>

            <br />
            {
                (premium || admin) ?
                    <>
                        <h1 style={{ textAlign: 'center', fontFamily:"Aharoni", fontSize: "50px" }}>{admin ? (props.english ? 'Direct Questions for '+ user:  user + " שאלות אישיות") : (props.english ? 'Direct Questions Of ' + user : user + " שאלות אישיות") }</h1>
                        <br />
                        <AddPost english={props.english} message={props.english ? "Publish" : "פרסם"} h1={props.english ? "Ask Direct Question" : "שאל שאלה אישית"} addDPost={addNewPost} kind='direct' />
                        <br />
                        {
                            data && data.map(post => {
                                const { name, title, content, date, files, postid, comments } = post
                                return (<><Post english={props.english} name={name} title={title} content={content} date={date} files={files} postid={postid} comments={comments} addDComment={addNewComment} kind='direct' setData={setData} data={data}/> <br /></>)
                            })
                        }
                        <br />
                        <br />
                    </> :
                    <BuyPremiumUser english={props.english} setPremium={setPremium} />
            }
        </div>
    )
}

export default PremiumPage;