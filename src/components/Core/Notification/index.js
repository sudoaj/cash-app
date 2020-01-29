import React, {Fragment} from 'react'
import styled from 'styled-components'

import {ClearBoth} from "../reusable-styles";

import img1 from '../../../assets/black-and.jpg'
const NotifyDropHead = styled.div`
  border-bottom: 1px solid rgba(0, 51, 102, 0.07);
`
const NotifyTabWrap = styled.ul`
  width: 100%;
  justify-content: space-between;
  display: flex;
  padding: 0px;
  margin: 0px;
  padding: 0px 30px;
  box-sizing: border-box;
`
const EachNotifyTab = styled.li`
  padding: 1px 0;
  border-bottom: ${props => props.active ? '2px solid #4CC075' : '2px solid transparent'};
  color: ${props => props.active ? '#003366' : 'rgba(0,51,102,0.6)'};
  font-size: 12px;
  list-style-type: none;
  display: inline;
  transition: 0.3s;
  cursor: pointer;
  letter-spacing: 1px;
`

const NotifiactionContent = styled.div`
  position: relative !important;
  margin-top: 0px;
  right: 0px;
  clear: both;
  width: 100%;
  text-align: left;
  padding: 0px;
  height: unset;
`
const TabContent = styled.div`
  position: relative;
  margin-top: 0px;
  right: 0px;
  clear: both;
  width: 100%;
  text-align: left;
  padding: 0px;
  height: unset;
`

const AllNotifitionWrap = styled.div`
  height: 456px;
  overflow: scroll;
`
const EachNotification = styled.div`
  height: 75px;
  border-bottom: 1px solid rgba(0, 51, 102, 0.07);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 20px;
  background-color: ${props => props.active ? 'transparent' : 'rgba(0,51,102,0.04)'};
`
const NotifyLeft = styled.div`
  float: left;
  width: 15%;
`
const NotifyLeftImg = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${props => props.image});
`
const NotifyRight = styled.div`
  float: left;
`
const NotifyTxt = styled.p`
  color: rgba(0,51,102,0.6);
  font-size: 12px;
  font-weight: 600;
  margin: 0px;
  padding: 0px;
  line-height: 25px;
`
const NotifySpan = styled.span`
  color: rgba(0,51,102,0.8);
`
const TimeTxt = styled.p`
  opacity: 0.8;
  color: #0645AD;
 	font-size: 12px;
  font-weight: 600;
 	margin: 0px;
  padding: 0px;
  line-height: 10px;
`
const ViewAllWrap = styled.div`
  text-align: center;
  padding: 0px;
  margin: 0px;
`
const ViewAll = styled.span`
  font-size: 12px;
  background: -webkit-linear-gradient(180deg,#38BAC1 0%,#48BE8B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`

const NotifyTab = props => (
  <Fragment>
    <AllNotifitionWrap>
      {notifications.map((notification, index) => (
        <EachNotification key={index} active={notification.active}>
          <NotifyLeft>
            <NotifyLeftImg image={img1}/>
          </NotifyLeft>
          <NotifyRight>
            <NotifyTxt>
              <NotifySpan>Darrell Stephens</NotifySpan>&nbsp;
              and 4 others <NotifySpan>likes</NotifySpan>&nbsp;your post
            </NotifyTxt>
            <TimeTxt>about an hour ago</TimeTxt>
          </NotifyRight>
          <ClearBoth/>
        </EachNotification>
      ))}
    </AllNotifitionWrap>
    <ViewAllWrap>
      <ViewAll>View All</ViewAll>
    </ViewAllWrap>
  </Fragment>
)

const Todo = props => (
  <Fragment>
    Todo
  </Fragment>
)
const Reports = props => (
  <Fragment>Reports</Fragment>
)


export class Notification extends React.Component {

  state = {
    activeTab: 1
  }

  getTab = () => {
    let tab
    const { activeTab } = this.state
    switch (activeTab) {
      case 1:
        tab = <NotifyTab/>
        break
      case 2:
        tab = <Todo/>
        break
      case 3:
        tab = <Reports/>
        break
      default:
        tab = <NotifyTab/>
        break
    }
    return tab
  }

  setTab = index => {
    this.setState({activeTab: index})
  }

  render() {
    const {activeTab} = this.state
    return(
      <Fragment>
        <NotifiactionContent>
          <NotifyDropHead>
            <NotifyTabWrap>
              <EachNotifyTab active={activeTab === 1} onClick={() => this.setTab(1)}>Notifications (2)</EachNotifyTab>
              <EachNotifyTab active={activeTab === 2} onClick={() => this.setTab(2)}>To Do (1)</EachNotifyTab>
              <EachNotifyTab active={activeTab === 3  } onClick={() => this.setTab(3)}>Reports (1)</EachNotifyTab>
            </NotifyTabWrap>
          </NotifyDropHead>
          <TabContent>
            {this.getTab()}
          </TabContent>
        </NotifiactionContent>
      </Fragment>
    )
  }
}


const actives = [true, true, false, false, false, false, false, false, false, false]
const notifications = Array.from(Array(10).keys()).map((value, index, array) => ({
  id: Math.floor(Math.random() * Math.floor(900)),
  name: 'SRM University',
  location: 'Chennai, India',
  active: actives[index],
  onClick: () => {}
}))