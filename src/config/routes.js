import React from 'react'
import Router from 'react-router-dom/Router'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import createHistory from 'history/createBrowserHistory'
import {ThemeProvider} from 'styled-components'

import {theme} from "../static/colors";


import CashHome from '../views/cash-home'
import LoginView from '../views/cash-login'
import LogoutView from '../views/cash-logout'




import NotFound from '../components/Core/NotFound'
import CollegeDashboardView from '../views/dashboard/college-dashboard/Loadable'





const history = createHistory()

export default store => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={CashHome}/>
          <Route exact path="/home" component={CashHome}/>
          <Route exact path="/login" component={LoginView}/>
          <Route exact path="/register" component={LoginView}/>
          <Route exact path="/logout" component={LogoutView}/>

          

          <Route exact path="/college/dashboard" component={CollegeDashboardView}/>
          <Route path="*" component={NotFound}/>



          {/* <Route exact path="/login" component={LoginView}/>
          <Route exact path="/feed" component={FeedPage}/>
          <Route exact path="/register" component={SignUp}/>
          <Route exact path="/follow" component={FollowView}/>
          <Route exact path="/college/dashboard" component={CollegeDashboardView}/>
          <Route exact path="/create-course" component={CreateCourseView}/>
          <Route exat path="/faculty" component={FacultyView}/>
          <Route exat path="/faculty-third" component={FacultyThirdView}/> */}
        </Switch>
      </Router>
    </ThemeProvider>
  )
}



