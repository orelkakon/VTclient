import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Registration from './Components/Registration'
import AboutAndContact from './Components/AboutAndContact'
import PremiumPage from './Components/PremiumPage'
import Blog from './Components/Blog'
import LoginPage from './Components/LoginPage'
import Header from './Components/Header'
import history from './Components/History';
import Links from './Components/Links'
import './LandPage.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const properties = {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: false,
  progress: undefined
}

export const notify = async (msg) => {
  await toast.dark(msg, properties)
}

const LandPage = () => {
  sessionStorage.setItem('language','english')
  const [english, setEnglish] = useState(sessionStorage.getItem('language') ? sessionStorage.getItem('language').includes('english') : false)
  const [logged, setLogged] = useState(sessionStorage.getItem('session'))
  return (
    <div className="landpage">
      <ToastContainer />
      <BrowserRouter history={history}>
        <div id="language" style={{display:"flex", justifyContent:"center"}}>
          <label class="switch"><input type="checkbox" onClick={() => setEnglish(!english)} />    <div class="slider round"></div>
          </label>
        </div>
        <br />
        <Header logged={logged} english={english} />
        <Route path="/" exact strict render={
          () => (
            <LoginPage setLogged={setLogged} logged={logged} english={english} />
          )
        } />
        <Route path="/Registration" exact strict render={
          () => (
            <Registration english={english} />
          )
        } />
        <Route path="/AboutAndContact" exact strict render={
          () => (
            <AboutAndContact english={english} />
          )
        } />
        <Route path="/Blog" exact strict render={
          () => (
            <Blog english={english} />
          )
        } />
        <Route path="/PremiumPage" exact strict render={
          () => (
            <PremiumPage english={english} />
          )
        } />
        <Route path="/Links" exact strict render={
          () => (
            <Links english={english} />
          )
        } />
      </BrowserRouter>
    </div>
  )
}
export default LandPage;
