import { About, AboutContact } from './index'
import profile from './../Assets/profile.jpg'
import phoneLogo from './../Assets/phone_logo.png'
import mailLogo from './../Assets/mail_logo.png'


function AboutAndContact(props) {
    return (
        <AboutContact>
            <br />
            <img src={profile} alt="Orel Profile" style={{ borderRadius: '35%', width: '200px', height: '200px' }} />
            <About>
                <br />
                <div style={{direction:props.english ? 'ltr' : 'rtl'}}>
                {props.english ?
                    `Hi everyone,
                    I am Orel Kakon. 
                    I'm graduate of 5 study units in all relevant professions. Successful psychometric graduate and software engineer with a bachelor's degree from Ben Gurion University, 
                    I am currently working in the software field and also a private tutor for the past 7 years.
                    The purpose of this website is to connect students who need help with studies and preparation for exams.
                    You can get help from other members on the site or ask for immediate online help from me for a fee.
                    The help will be accurate, clear and quick and will include personal guidance in case something is not clear. 
                    The relevant subjects are: Mathematics, English, Computer Science and Physics.
                    I would happy if you could share this website so we can reach as many people as possible !`
                    :
                    `שלום לכולם, אני אוראל קקון.
                    אני בוגר 5 יחידות לימוד בהצטיינות בכל המקצועות הרלונטיים, בוגר פסיכומטרי ובעל תואר ראשון בהנדסת תכנה מאוניברסיטת בן גוריון.
                    אני כרגע עובד בתחום התוכנה ובנוסף מורה פרטי ב-7 שנים האחרונות.
                    המטרה של האתר הזה זה לחבר בין תלמידים שצריכים עזרה בלימודיהם ובהכנתם למבחנים.
                    ניתן לקבל עזרה משאר המשתמשים באתר או לבקש עזרה מיידית דחופה ממני בתשלום.
                    העזרה תהיה מדויקת, ברורה ומובנית וכמובן מהירה ותכלול ליווי צמוד אם וכאשר משהו לא היה ברור לחלוטין.
                    הנושאים הרלוונטים הם: מתמטיקה, אנגלית, מדעי המחשב ופיזיקה.
                    אני אשמח מאוד אם תוכלו לשתף את האתר עם חבריכם על מנת שנוכל להגיע לכמה שיותר אנשים!
                    `
                }
                </div>
                <br /><br />
            </About>
            <u><h1>{props.english ? 'Contact Me' : 'פרטי התקשרות'}</h1></u>
            <img src={mailLogo} alt="phoneLogo" height="27px" /><a href="mailto:orelkak@post.bgu.ac.il" style={{ textDecoration: "none", fontSize: "30px", color: "#000" }}> Orelkak@post.bgu.ac.il</a>
            <br />
            <img src={phoneLogo} alt="phoneLogo" height="30px" /><a href="tel:+97254-4650-494" style={{ textDecoration: "none", fontSize: "34px", color: "#000" }}> 054-4650494</a>
            <br /><br /><br /><br /><br />
        </AboutContact>
    )
}

export default AboutAndContact;