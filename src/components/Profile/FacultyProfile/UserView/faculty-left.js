import React, {Fragment} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import {FacultySkills} from "./tab-content/skills";
import {FacultySubjects} from "./tab-content/subjects";
import {FacultyEvents} from "./tab-content/events";
import {FacultyOnlineCourses} from "./tab-content/online-courses";
import {FacultyArticles} from "./tab-content/articles";
import {FacultyBookmarks} from "./tab-content/bookmarks";
import {FacultyActivity} from "./tab-content/activity";

import {ClearBoth} from "../../../Core/reusable-styles/index";

import cover from '../../../../assets/pexels-register.jpeg'
import profile from '../../../../assets/black-and.jpg'
import insta from '../../../../assets/logo_Insta.png'
import fblogo from '../../../../assets/fb-logo.png'
import twitter from '../../../../assets/tweet.png'
import greenArrow from '../../../../assets/green-arrow.png'
import companyLogo from '../../../../assets/Caterpillar.png'


const FacultyDetailWrap = styled.div`
    width: 862px;
`
const UserDetailWrap = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.whiteOpacity.nine};
    border-radius: 4px;
    box-shadow: 0 0 14px 2px rgba(83,83,83,0.1);
    margin-bottom: 15px;
`
const CoverImg = styled.div`
    height: 160px;
    width: 100%;
    background-image: url(${props => props.image});
    border-radius: 4px 4px 0 0;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`
const AdminImgWrap = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: -40px;
`
const AdminImg = styled.div`
    height: 80px;
    width: 80px;
    box-shadow: 1px 7px 8px 0 rgba(0,0,0,0.16);
    border-radius: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    margin: auto;
    background-color: ${({theme}) => theme.colors.white};
`

const UserDetail = styled.div`
    box-sizing: border-box;
    padding: 20px;
`

const CenterDetail = styled.div`
    text-align: center;
    padding-top: 40px;
`
const AdminName = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 1px;
    font-family: sans-serif;
    margin-top: 0px;
    margin-bottom: 8px;
`
const AdminFaculty = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    opacity: 0.5;
    font-size: 12px;
    margin-top: 0px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 15px;
`
const AdminOverview = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    opacity: 0.7;
    font-size: 12px;
    line-height: 20px;
    max-width: 535.5px;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin: auto;
`
const UserBottomWrap = styled.div`
    margin-top: 30px;
    box-sizing: border-box;
    padding: 0 10px;
`
const FollowCountWrap = styled.div`
    float: left;
`
const FollowingWrap = styled.div`
    float: left;
    padding-right: 15px;
    border-right: 2px solid rgba(0,51,102,0.1);
`
const FollowersWrap = styled.div`
    float: left;
    padding-left: 15px;
`
const FollowCount = styled.span`
    font-size: 16px;
    color: ${({theme}) => theme.colors.lighter_blue};
    margin-right: 5px;
`
const FollowTxt = styled.span`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
`
const SocialMediaWrap = styled.div`
    float: left;
    margin-left: 25px;
`
const mediaLinkStyle = {
  textDecoration: 'none',
  marginRight: '15px',
  marginLeft: '15px'
}
const UpdateProfileWrap = styled.div`
    float: right;
    text-align: right;
`
const UpdateProfileBtn = styled.button`
    background: linear-gradient(2.21deg, 
    ${({theme}) => theme.colors.green} 0%, 
    ${({theme}) => theme.colors.lighter_blue} 100%);
    box-shadow: 0 12px 12px -1px rgba(10,37,62,0.1);
    border-radius: 4px;
    color: ${({theme}) => theme.colors.white};
    font-size: 12px;
    font-weight: 500;
    width: 203px;
    height: 35px;
    border: none;
    outline: none;
    cursor: pointer;
    letter-spacing: 1px;
`

const WorkExpHead = styled.div`
    border-bottom: 1px solid rgba(0,51,102,0.07);
    padding: 12px 20px;
`
const WorkHeadTxt = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    opacity: 0.8;
    font-size: 14px;
    margin: 0px;
    font-weight: 500;
    float: left;
`
const WorkHeadSpan = styled.span`
    color: ${({theme}) => theme.colors.dark_blue};
    opacity: 0.6;
    font-size: 14px;
    font-weight: 500;
`
const WorkHeadArrow = styled.img`
    cursor: pointer;
    float: right;
    margin-top: 5px;
`
const WorkSectionWrap = styled.div``
const EachWork = styled.div`
    padding: 10px 20px;
    box-sizing: border-box; 
`
const CompanyLogoWrap = styled.div`
    width: 10%;
    float: left;
`
const CompanyLogo = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    background-color: rgba(0,51,102,0.05);
`
const CompanyNameWrap = styled.div`
    float: left;
`
const JobTitle = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
    font-weight: 600;
    margin: 10px 0;
`
const CompanyName = styled.p`
    margin: 10px 0;
    opacity: 0.5;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
`
const JobDurationWrap = styled.div`
    float: right;
    text-align: right;
`
const JobDuration = styled.p`
    opacity: 0.8;
    color: #0645AD;
    font-size: 12px;
    font-weight: 600;
    margin: 10px 0;
`
const JobYears = styled.p`
    opacity: 0.4;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    margin: 10px 0;
`
const TabContainer = styled.div``
const TabHeader = styled.div`
    border-bottom: 1px solid rgba(0,51,102,0.07);
`
const TabNavWrap = styled.ul`
    width: ${props => props.thirdView ? '60%' : '75%'};
    justify-content: space-between;
    display: flex;
    padding: 0px;
    margin: 0px;
    padding-left: 30px;
    box-sizing: border-box;
`
const TabContent = styled.div`
    padding: 15px 30px 20px 30px;
    min-height: 300px;
`
const EachNav = styled.li`
    padding: 15px 0;
    border-bottom: ${props => props.active ? '2px solid #4CC075' : '2px solid #fff'};
    color: ${props => props.active ? `${props.theme.colors.dark_blue}` : 'rgba(0,51,102,0.6)'};
    font-weight: ${props => props.active ? '600' : '500'};
    font-size: 12px;
    list-style-type: none;
    display: inline;
    transition: 0.3s;
    cursor: pointer;
    letter-spacing: 1px;
`

export class FacultyLeft extends React.Component {

  state = {
    activeTab: 1
  }

  getTab = () => {
    let tab
    switch (this.state.activeTab) {
      case 1:
        tab = <FacultySkills/>
        break
      case 2:
        tab = <FacultySubjects/>
        break
      case 3:
        tab = <FacultyEvents/>
        break
      case 4:
        tab = <FacultyOnlineCourses/>
        break
      case 5:
        tab = <FacultyArticles thirdView={this.props.thirdView}/>
        break
      case 6:
        tab = <FacultyBookmarks/>
        break
      case 7:
        tab = <FacultyActivity/>
        break
      default:
        tab = <FacultySkills/>
        break
    }
    return tab
  }

  setTab = index => {
    this.setState({activeTab: index})
  }

  render() {
    const {activeTab} = this.state
    return (
      <Fragment>
        <FacultyDetailWrap>
          {/* -------User Detail-------*/}
          <UserDetailWrap>
            <CoverImg image={cover}>
              <AdminImgWrap>
                <AdminImg image={profile}/>
              </AdminImgWrap>
            </CoverImg>
            <UserDetail>
              <CenterDetail>
                <AdminName>Katherine Floyd</AdminName>
                <AdminFaculty>Faculty at Manipal University Manipal, Karnataka, India</AdminFaculty>
                <AdminOverview>
                  Experienced Faculty with a demonstrated history of
                  working in the higher education industry.
                  I am passionate about user-centric and energy efficient design.
                </AdminOverview>
              </CenterDetail>
              <UserBottomWrap>
                <FollowCountWrap>
                  <FollowingWrap>
                    <FollowCount>890</FollowCount>
                    <FollowTxt>Following</FollowTxt>
                  </FollowingWrap>
                  <FollowersWrap>
                    <FollowCount>1K</FollowCount>
                    <FollowTxt>Following</FollowTxt>
                  </FollowersWrap>
                  <ClearBoth/>
                </FollowCountWrap>
                <SocialMediaWrap>
                  <Link to="http://www.instagram.com" target="_blank" style={mediaLinkStyle}>
                    <img src={insta} alt="instagram"/>
                  </Link>
                  <Link to="http://www.facebook.com" target="_blank" style={mediaLinkStyle}>
                    <img src={fblogo} alt="facebook"/>
                  </Link>
                  <Link to="http://www.twitter.com" target="_blank" style={mediaLinkStyle}>
                    <img src={twitter} alt="twitter"/>
                  </Link>
                </SocialMediaWrap>
                <UpdateProfileWrap>
                  <UpdateProfileBtn>UPDATE PROFILE</UpdateProfileBtn>
                </UpdateProfileWrap>
                <ClearBoth/>
              </UserBottomWrap>
            </UserDetail>
          </UserDetailWrap>
          {/* ------Work Experience-------*/}
          {this.props.thirdView ? null : (
            <UserDetailWrap>
              <WorkExpHead>
                <WorkHeadTxt>Work Experience <WorkHeadSpan>(5 Years)</WorkHeadSpan></WorkHeadTxt>
                <WorkHeadArrow src={greenArrow}/>
                <ClearBoth/>
              </WorkExpHead>
              <WorkSectionWrap>
                <EachWork>
                  <CompanyLogoWrap>
                    <CompanyLogo image={companyLogo}/>
                  </CompanyLogoWrap>
                  <CompanyNameWrap>
                    <JobTitle>Sr. Ux Designer</JobTitle>
                    <CompanyName>Robert Bosch</CompanyName>
                  </CompanyNameWrap>
                  <JobDurationWrap>
                    <JobDuration>2016 - Present</JobDuration>
                    <JobYears>2 yrs</JobYears>
                  </JobDurationWrap>
                  <ClearBoth/>
                </EachWork>
              </WorkSectionWrap>
            </UserDetailWrap>
          )}
          {/* -------Tab Container-------- */}
          <UserDetailWrap>
            <TabContainer>
              <TabHeader>
                <TabNavWrap thirdView={this.props.thirdView}>
                  <EachNav active={activeTab === 1}
                           onClick={() => this.setTab(1)}>Skills</EachNav>
                  <EachNav active={activeTab === 2}
                           onClick={() => this.setTab(2)}>Subjects</EachNav>
                  <EachNav active={activeTab === 3}
                           onClick={() => this.setTab(3)}>Events</EachNav>
                  <EachNav active={activeTab === 4}
                           onClick={() => this.setTab(4)}>Online Courses</EachNav>
                  <EachNav active={activeTab === 5}
                           onClick={() => this.setTab(5)}>Articles</EachNav>
                  {this.props.thirdView ? null : (
                    <EachNav active={activeTab === 6}
                             onClick={() => this.setTab(6)}>Bookmarks</EachNav>
                  )}
                  <EachNav active={activeTab === 7}
                           onClick={() => this.setTab(7)}>Activity</EachNav>
                </TabNavWrap>
              </TabHeader>
              <TabContent>
                {this.getTab()}
              </TabContent>
            </TabContainer>
          </UserDetailWrap>
        </FacultyDetailWrap>
      </Fragment>
    )
  }
}
