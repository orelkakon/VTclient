import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Registration from './Components/Registration'
import AboutAndContact from './Components/AboutAndContact'
import PremiumPage from './Components/PremiumPage'
import Blog from './Components/Blog'
import LoginPage from './Components/LoginPage'
import Header from './Components/Header'
import './LandPage.css'

const LandPage = (props) => {
  return (
    <div className="landpage">
      <Router>
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
        <Route path="Blog" exact strict render={
          () => (
            <Blog />
          )
        } />
        <Route path="/PremiumPage" exact strict render={
          () => (
            <PremiumPage />
          )
        } />   
      </Router>
    </div>
  )
}
export default LandPage;
