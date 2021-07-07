import React from 'react';
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

const LandPage = () => {
  return (
    <div className="landpage">
      <BrowserRouter history={history}>
        <Header />
        <Route path="/" exact strict render={
          () => (
            <LoginPage />
          )
        } />
        <Route path="/Registration" exact strict render={
          () => (
            <Registration />
          )
        } />
        <Route path="/AboutAndContact" exact strict render={
          () => (
            <AboutAndContact />
          )
        } />
        <Route path="/Blog" exact strict render={
          () => (
            <Blog />
          )
        } />
        <Route path="/PremiumPage" exact strict render={
          () => (
            <PremiumPage />
          )
        } />  
        <Route path="/Links" exact strict render={
          () => (
            <Links />
          )
        } /> 
      </BrowserRouter>
    </div>
  )
}
export default LandPage;
