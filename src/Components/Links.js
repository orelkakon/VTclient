import React, { useState } from 'react';
import {LinksDiv, FolderButton, FilesDiv} from './Index'
import file from '../Assets/file.jpg';

const Links = () => {
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
            <br/>
            <FolderButton onClick={() => {resetOptions(); setFormula(true)}}>
                Formula Pages
            </FolderButton>
            <FolderButton onClick={() => {resetOptions(); setStudy(true)}}>
                Study Meterials
            </FolderButton>
            <FolderButton onClick={() => {resetOptions(); setTelegram(true)}}>
                Telegram Gruops
            </FolderButton>
            <br/>
            {
                formula ? 
                <FilesDiv>
                <a href="https://meyda.education.gov.il/files/Exams/3-MATH-Formula.pdf" target="_blank" style={{textDecoration: 'none', color: 'black', fontSize: '30px'}}>
                    <img src = {file} alt = "3 units" style = {{width:"80px",height:"80px"}}/>
                    <br/>
                    3 Units Math
                </a>
                <br/><br/><br/>
                <a href="https://www.kidum.com/bagrut/public/uploads/ckfinder/files/%D7%A0%D7%95%D7%A1%D7%97%D7%90%D7%95%D7%9F%204%20%D7%99%D7%97'%20%D7%9E%D7%AA%D7%9E%D7%98%D7%99%D7%A7%D7%94.pdf" target="_blank" style={{textDecoration: 'none', color: 'black', fontSize: '30px'}}>
                    <img src = {file} alt = "4 units" style = {{width:"80px",height:"80px"}}/>
                    <br/>
                    4 Units Math
                </a>
                <br/><br/><br/>
                <a href="https://meyda.education.gov.il/files/Exams/5-MATH-Formula.pdf" target="_blank" style={{textDecoration: 'none', color: 'black', fontSize: '30px'}}>
                    <img src = {file} alt = "5 units" style = {{width:"80px",height:"80px"}}/>
                    <br/>
                    5 Units Math
                </a>
                <br/><br/><br/>
                <a href="https://www.ee.bgu.ac.il/~eransal/physics.files/learning_materials/formula_sheet.pdf" target="_blank" style={{textDecoration: 'none', color: 'black', fontSize: '30px'}}>
                    <img src = {file} alt = "3 units" style = {{width:"80px",height:"80px"}}/>
                    <br/>
                    5 Units Physics 
                </a>
                </FilesDiv>
                : study ?
                <FilesDiv>
                <a href="https://mathstar.co.il/%D7%97%D7%95%D7%9E%D7%A8%D7%99-%D7%A2%D7%96%D7%A8-%D7%91%D7%9E%D7%AA%D7%9E%D7%98%D7%99%D7%A7%D7%94/" target="_blank" style={{textDecoration: 'none', color: 'black', fontSize: '30px'}}>
                    <img src = {file} alt = "3 units" style = {{width:"80px",height:"80px"}} />
                    <br/>
                    MathStar
                </a>
                <br/><br/>
                <a href="https://www.sikumuna.co.il/wiki/%D7%9E%D7%AA%D7%9E%D7%98%D7%99%D7%A7%D7%94" target="_blank" style={{textDecoration: 'none', color: 'black', fontSize: '30px'}}>
                    <img src = {file} alt = "3 units" style = {{width:"80px",height:"80px"}} />
                    <br/>
                    Sikumuna Math
                </a>
                <br/><br/>
                <a href="https://www.yourway.org.il/%D7%A1%D7%99%D7%9B%D7%95%D7%9E%D7%99%D7%9D-%D7%95%D7%97%D7%95%D7%9E%D7%A8%D7%99-%D7%9C%D7%9E%D7%99%D7%93%D7%94/" target="_blank" style={{textDecoration: 'none', color: 'black', fontSize: '30px'}}>
                    <img src = {file} alt = "3 units" style = {{width:"80px",height:"80px"}} />
                    <br/>
                    YourWay Math
                </a>
                <br/><br/>
                <a href="https://kaye7.org.il/he/%D7%9E%D7%90%D7%99%D7%A8-%D7%91%D7%9B%D7%95%D7%A8-%D7%A1%D7%99%D7%9B%D7%95%D7%9E%D7%99%D7%9D%D7%93%D7%92%D7%A9%D7%99%D7%9D-%D7%95%D7%94%D7%A0%D7%97%D7%99%D7%95%D7%AA-%D7%9C%D7%91%D7%92%D7%A8%D7%95/#mador-4665" target="_blank" style={{textDecoration: 'none', color: 'black', fontSize: '30px'}}>
                    <img src = {file} alt = "3 units" style = {{width:"80px",height:"80px"}} />
                    <br/>
                    Kaye Math
                </a>
                <br/><br/>
                <a href="https://www.sikumuna.co.il/wiki/%D7%A4%D7%99%D7%96%D7%99%D7%A7%D7%94" target="_blank" style={{textDecoration: 'none', color: 'black', fontSize: '30px'}}>
                    <img src = {file} alt = "3 units" style = {{width:"80px",height:"80px"}} />
                    <br/>
                    Sikumuna Physics
                </a>
                <br/><br/>
                <a href="http://www.studenteam.co.il/%D7%A1%D7%99%D7%9B%D7%95%D7%9E%D7%99%D7%9D/%D7%A1%D7%99%D7%9B%D7%95%D7%9E%D7%99%D7%9D/%D7%A4%D7%99%D7%96%D7%99%D7%A7%D7%94" target="_blank" style={{textDecoration: 'none', color: 'black', fontSize: '30px'}}>
                    <img src = {file} alt = "3 units" style = {{width:"80px",height:"80px"}} />
                    <br/>
                    StudentTeam Physics 
                </a>
                <br/><br/>
                <a href="http://blog.csit.org.il/MyBlog.aspx?BlogID=33" target="_blank" style={{textDecoration: 'none', color: 'black', fontSize: '30px'}}>
                    <img src = {file} alt = "3 units" style = {{width:"80px",height:"80px"}} />
                    <br/>
                    CSIT CS 
                </a>
                <br/><br/>
                <a href="https://kaye7.org.il/he/%D7%91%D7%97%D7%99%D7%A0%D7%AA-%D7%94%D7%91%D7%92%D7%A8%D7%95%D7%AA-%D7%91%D7%9E%D7%93%D7%A2%D7%99-%D7%94%D7%9E%D7%97%D7%A9%D7%91-%D7%97%D7%95%D7%9E%D7%A8%D7%99-%D7%9C%D7%99%D7%9E%D7%95%D7%93/" target="_blank" style={{textDecoration: 'none', color: 'black', fontSize: '30px'}}>
                    <img src = {file} alt = "3 units" style = {{width:"80px",height:"80px"}} />
                    <br/>
                    Kaye CS 
                </a>
                <br/><br/>
                <a href="https://www.sikumuna.co.il/wiki/%D7%9E%D7%93%D7%A2%D7%99_%D7%94%D7%9E%D7%97%D7%A9%D7%91" target="_blank" style={{textDecoration: 'none', color: 'black', fontSize: '30px'}}>
                    <img src = {file} alt = "3 units" style = {{width:"80px",height:"80px"}} />
                    <br/>
                    Sikumuna CS 
                </a>
                <br/><br/>
                </FilesDiv>
                : telegram ?
                <FilesDiv>
                    <a href="https://t.me/OrelHelpMe" target="_blank" style={{textDecoration: 'none', color: 'black', fontSize: '30px'}}>
                        <img src = {file} alt = "orel gruop" style = {{width:"80px",height:"80px"}} />
                        <br/>
                        "Orel Help Me" Group (Very recommended)
                    </a>
                    <br/><br/><br/>
                    <a href="https://t.me/schoolhelp_math" target="_blank" style={{textDecoration: 'none', color: 'black', fontSize: '30px'}}>
                        <img src = {file} alt = "global gruop" style = {{width:"80px",height:"80px"}} />
                        <br/>
                        Global Group
                    </a>
                </FilesDiv>
                : null
            }
        </LinksDiv>
    )
}

export default Links;