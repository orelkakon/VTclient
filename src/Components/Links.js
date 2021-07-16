import React, { useState } from 'react';
import { LinksDiv, FolderButton, FilesDiv } from './index';
import file from '../Assets/file.jpg';
import link from '../Assets/link.png';
import formulla from '../Assets/formula.png';

const Links = (props) => {
    const [formula, setFormula] = useState(false)
    const [study, setStudy] = useState(false)
    const [telegram, setTelegram] = useState(false)

    const resetOptions = () => {
        setFormula(false);
        setStudy(false);
        setTelegram(false);
    }

    return (
        <LinksDiv>
            <br />
            <FolderButton onClick={() => { resetOptions(); setFormula(true) }}>
                {props.english ? 'Formula Pages' : 'דפי נוסחאות'}
            </FolderButton>
            <FolderButton onClick={() => { resetOptions(); setStudy(true) }}>
                {props.english ? 'Study Meterials' : 'חומרי לימוד'}
            </FolderButton>
            <FolderButton onClick={() => { resetOptions(); setTelegram(true) }}>
                {props.english ? 'Media Gruops' : 'קבוצות מדיה'}
            </FolderButton>
            <br />
            {
                formula ?
                    <FilesDiv>
                        <a href="https://i.imagesup.co/images2/4277a36635824e8d93e482e93de1fd2c18c6386d.png" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                            <img src={formulla} alt="3 units" style={{ width: "80px", height: "80px" }} />
                            <br />
                            {props.english ? 'Psycho Math' : 'פסיכו מתמטיקה'}

                        </a>
                        <br /><br /><br />
                        <a href="https://meyda.education.gov.il/files/Exams/3-MATH-Formula.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                            <img src={formulla} alt="3 units" style={{ width: "80px", height: "80px" }} />
                            <br />
                            {props.english ? '3 Units Math' : ' שלוש יח"ל מתמטיקה'}

                        </a>
                        <br /><br /><br />
                        <a href="https://www.kidum.com/bagrut/public/uploads/ckfinder/files/%D7%A0%D7%95%D7%A1%D7%97%D7%90%D7%95%D7%9F%204%20%D7%99%D7%97'%20%D7%9E%D7%AA%D7%9E%D7%98%D7%99%D7%A7%D7%94.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                            <img src={formulla} alt="4 units" style={{ width: "80px", height: "80px" }} />
                            <br />
                            {props.english ? '4 Units Math' : ' ארבע יח"ל מתמטיקה'}

                        </a>
                        <br /><br /><br />
                        <a href="https://meyda.education.gov.il/files/Exams/5-MATH-Formula.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                            <img src={formulla} alt="5 units" style={{ width: "80px", height: "80px" }} />
                            <br />
                            {props.english ? ' 5 Units Math' : 'חמש יח"ל מתמטיקה'}

                        </a>
                        <br /><br /><br />
                        <a href="https://bagrut.gool.co.il/Misc/%D7%A0%D7%95%D7%A1%D7%97%D7%90%D7%95%D7%9F%20%D7%9E%D7%95%D7%A8%D7%97%D7%91%203%20%D7%99%D7%97'%20%D7%9E%D7%AA%D7%9E%D7%98%D7%99%D7%A7%D7%94.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                            <img src={formulla} alt="3 units" style={{ width: "80px", height: "80px" }} />
                            <br />
                            {props.english ? '3 Units Extended Math' : 'שלוש יח"ל מתמטיקה מורחב'}

                        </a>
                        <br /><br /><br />
                        <a href="https://bagrut.gool.co.il/Misc/%D7%A0%D7%95%D7%A1%D7%97%D7%90%D7%95%D7%9F%20%D7%9E%D7%95%D7%A8%D7%97%D7%91%204%20%D7%99%D7%97'%20%D7%9E%D7%AA%D7%9E%D7%98%D7%99%D7%A7%D7%94.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                            <img src={formulla} alt="4 units" style={{ width: "80px", height: "80px" }} />
                            <br />

                            {props.english ? ' 4 Units Extended Math' : 'ארבע יח"ל מתמטיקה מורחב'}
                        </a>
                        <br /><br /><br />
                        <a href="https://bagrut.gool.co.il/Misc/%D7%A0%D7%95%D7%A1%D7%97%D7%90%D7%95%D7%9F%20%D7%9E%D7%95%D7%A8%D7%97%D7%91%205%20%D7%99%D7%97'%20%D7%9E%D7%AA%D7%9E%D7%98%D7%99%D7%A7%D7%94.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                            <img src={formulla} alt="5 units" style={{ width: "80px", height: "80px" }} />
                            <br />
                            {props.english ? '5 Units Extended Math' : 'חמש יח"ל מתמטיקה מורחב'}

                        </a>
                        <br /><br /><br />
                        <a href="https://www.ee.bgu.ac.il/~eransal/physics.files/learning_materials/formula_sheet.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                            <img src={formulla} alt="3 units" style={{ width: "80px", height: "80px" }} />
                            <br />
                            {props.english ? '5 Units Physics' : 'חמש יח"ל פיזיקה'}

                        </a>
                    </FilesDiv>
                    : study ?
                        <FilesDiv>
                            <a href="https://campus.gov.il/course/course-v1-mse-gov_psychometry/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                                <img src={file} alt="3 units" style={{ width: "80px", height: "80px" }} />
                                <br />
                                {props.english ? 'Psycho Campus IL' : 'קמפוס איי אל פסיכו'}

                            </a>
                            <br /><br />
                            <a href="https://nite.org.il/files/psych/new_psych/quantitive-hebrew.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                                <img src={file} alt="3 units" style={{ width: "80px", height: "80px" }} />
                                <br />
                                {props.english ? 'Psycho Math' : 'פסיכו מתמטיקה'}
                            </a>
                            <br /><br />
                            <a href="https://courses.campus.gov.il/assets/courseware/v1/1cc54b2362123fe3bbeed5f5673e8134/asset-v1:MSE+GOV_PsychometryHe+2018_1+type@asset+block/%D7%94%D7%A4%D7%A1%D7%99%D7%9B%D7%95%D7%9E%D7%98%D7%A8%D7%99_%D7%A9%D7%9C_%D7%94%D7%9E%D7%93%D7%99%D7%A0%D7%94_-_%D7%93%D7%A4%D7%99_%D7%A1%D7%99%D7%9B%D7%95%D7%9D_%D7%97%D7%A9%D7%99%D7%91%D7%94_%D7%9B%D7%9E%D7%95%D7%AA%D7%99%D7%AA.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                                <img src={file} alt="3 units" style={{ width: "80px", height: "80px" }} />
                                <br />

                                {props.english ? 'Psycho Math Campus IL' : 'קמפוס איי אל מתמטיקה'}
                            </a>
                            <br /><br />
                            <a href="https://www.nite.org.il/psychometric-entrance-test/preparation/hebrew-practice-tests/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                                <img src={file} alt="3 units" style={{ width: "80px", height: "80px" }} />
                                <br />

                                {props.english ? 'Psychometric exams' : 'מבחני פסיכומטרי'}
                            </a>
                            <br /><br />
                            <a href="https://mathstar.co.il/%D7%97%D7%95%D7%9E%D7%A8%D7%99-%D7%A2%D7%96%D7%A8-%D7%91%D7%9E%D7%AA%D7%9E%D7%98%D7%99%D7%A7%D7%94/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                                <img src={file} alt="3 units" style={{ width: "80px", height: "80px" }} />
                                <br />

                                {props.english ? 'MathStar' : 'כוכב המתמטיקה'}
                            </a>
                            <br /><br />
                            <a href="https://www.sikumuna.co.il/wiki/%D7%9E%D7%AA%D7%9E%D7%98%D7%99%D7%A7%D7%94" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                                <img src={file} alt="3 units" style={{ width: "80px", height: "80px" }} />
                                <br />

                                {props.english ? 'Sikumuna Math' : 'סיכומונה מתמטיקה'}
                            </a>
                            <br /><br />
                            <a href="https://www.yourway.org.il/%D7%A1%D7%99%D7%9B%D7%95%D7%9E%D7%99%D7%9D-%D7%95%D7%97%D7%95%D7%9E%D7%A8%D7%99-%D7%9C%D7%9E%D7%99%D7%93%D7%94/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                                <img src={file} alt="3 units" style={{ width: "80px", height: "80px" }} />
                                <br />

                                {props.english ? 'YourWay Math' : 'הדרך שלך - מתמטיקה'}
                            </a>
                            <br /><br />
                            <a href="https://kaye7.org.il/he/%D7%9E%D7%90%D7%99%D7%A8-%D7%91%D7%9B%D7%95%D7%A8-%D7%A1%D7%99%D7%9B%D7%95%D7%9E%D7%99%D7%9D%D7%93%D7%92%D7%A9%D7%99%D7%9D-%D7%95%D7%94%D7%A0%D7%97%D7%99%D7%95%D7%AA-%D7%9C%D7%91%D7%92%D7%A8%D7%95/#mador-4665" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                                <img src={file} alt="3 units" style={{ width: "80px", height: "80px" }} />
                                <br />

                                {props.english ? 'Kaye Math' : 'קיה מתמטיקה'}
                            </a>
                            <br /><br />
                            <a href="https://www.sikumuna.co.il/wiki/%D7%A4%D7%99%D7%96%D7%99%D7%A7%D7%94" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                                <img src={file} alt="3 units" style={{ width: "80px", height: "80px" }} />
                                <br />

                                {props.english ? 'Sikumuna Physics' : 'סיכומונה פיזיקה'}
                            </a>
                            <br /><br />
                            <a href="http://www.studenteam.co.il/%D7%A1%D7%99%D7%9B%D7%95%D7%9E%D7%99%D7%9D/%D7%A1%D7%99%D7%9B%D7%95%D7%9E%D7%99%D7%9D/%D7%A4%D7%99%D7%96%D7%99%D7%A7%D7%94" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                                <img src={file} alt="3 units" style={{ width: "80px", height: "80px" }} />
                                <br />

                                {props.english ? 'StudentTeam Physics' : 'פיזיק-לי'}
                            </a>
                            <br /><br />
                            <a href="http://blog.csit.org.il/MyBlog.aspx?BlogID=33" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                                <img src={file} alt="3 units" style={{ width: "80px", height: "80px" }} />
                                <br />

                                {props.english ? 'CSIT CS' : 'קמפוס למדעי המחשב'}
                            </a>
                            <br /><br />
                            <a href="https://kaye7.org.il/he/%D7%91%D7%97%D7%99%D7%A0%D7%AA-%D7%94%D7%91%D7%92%D7%A8%D7%95%D7%AA-%D7%91%D7%9E%D7%93%D7%A2%D7%99-%D7%94%D7%9E%D7%97%D7%A9%D7%91-%D7%97%D7%95%D7%9E%D7%A8%D7%99-%D7%9C%D7%99%D7%9E%D7%95%D7%93/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                                <img src={file} alt="3 units" style={{ width: "80px", height: "80px" }} />
                                <br />

                                {props.english ? 'Kaye CS' : 'קיה מדעי המחשב'}
                            </a>
                            <br /><br />
                            <a href="https://www.sikumuna.co.il/wiki/%D7%9E%D7%93%D7%A2%D7%99_%D7%94%D7%9E%D7%97%D7%A9%D7%91" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                                <img src={file} alt="3 units" style={{ width: "80px", height: "80px" }} />
                                <br />

                                {props.english ? 'Sikumuna CS' : 'סיכום מדעי המחשב'}
                            </a>
                            <br /><br />
                        </FilesDiv>
                        : telegram ?
                            <FilesDiv>
                                <a href="https://t.me/OrelHelpMe" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                                    <img src={link} alt="orel gruop" style={{ width: "80px", height: "80px" }} />
                                    <br />
                                    {props.english ? '"Orel Help Me" Group (Very recommended)' : 'אוראל עזור לי - קבוצה מומלצת לעבודות'}

                                </a>
                                <br /><br /><br />
                                <a href="https://t.me/schoolhelp_math" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>
                                    <img src={link} alt="global gruop" style={{ width: "80px", height: "80px" }} />
                                    <br />
                                    {props.english ? 'Global Math Group' : 'מתמטיקה ארצי'}

                                </a>
                            </FilesDiv>
                            : null
            }
            <br /><br />
        </LinksDiv>
    )
}

export default Links;