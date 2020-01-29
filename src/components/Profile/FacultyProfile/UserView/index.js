import React, {Fragment} from 'react';
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter'

import {FacultyLeft} from "./faculty-left";
import {SearchAppearances} from "./search-appearances";
import {PeopleViewed} from "./people-view";
import {Wrapper, ClearBoth} from "../../../Core/reusable-styles";
import {FeedRight} from "../../../Newsfeed/tab-content/Feed/feed-right";

import profile from '../../../../assets/black-and.jpg'
import img1 from '../../../../assets/airb3.png'
import calendarIcon from '../../../../assets/small-calendar-icon.png'
import clockIcon from '../../../../assets/small-clock.png'


const FixedHeaderWrap = styled.header`
    height: 70px;
    position: relative;
    display: ${props => props.display};
`
const FixedHeader = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 20px 16px 20px 3px rgba(10,37,62,0.1);
    height: 70px;
    width: 100%;
    left: 0;
    position: fixed;
    right: 0;
    z-index: 1000;
    border-top: 1px solid rgba(0, 51, 102, 0.07);
    @media screen and (min-width: 1600px) {
        width: 1370px; 
        margin: auto;
    }
`
const FacultyContainer = styled.section`
    width: 100%;
    padding-top: 15px;
`

const FacultyCenter = styled.div`
    margin: auto;
    width: 1141px;
`
const FacultyLeftWrap = styled.div`
    float: left;
    width: 877px;
`
const FacultyRightWrap = styled.div`
    width: 264px;
    float: left;
`
const ViewersWrap = styled.div`
    width: 263px;
    border-radius: 4px;
    background-color: ${({theme}) => theme.whiteOpacity.nine};
    box-shadow: 0 0 14px 2px rgba(83,83,83,0.1);
    margin-bottom: 15px;
    padding: 20px 30px;
    box-sizing: border-box;
`
const ViewsWrap = styled.div`
    width: ${props => props.width};
    float: left;
    cursor: pointer;
`
const ViewsCount = styled.p`
    margin: 0px;
    color: ${({theme}) => theme.colors.green};
    font-size: 32px;
    opacity: 0.8;
`
const ViewsTxt = styled.p`
    opacity: 0.5;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    line-height: 14px;
    width: 84px;
`
const FixedHeadInner = styled.div`
    margin: auto;
    width: 1141px;
    height: 100%;
`
const LeftFixedHead = styled.div`
    float: left;
    height: 100%;
    display: flex;
    align-items: center;
`
const FixedHeadImage = styled.div`
    float: left;
    height: 50px;
    width: 50px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
`
const ProfileNameWrap = styled.div`
    float: left;
    margin-left: 15px;
`
const ProfileName = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 16px;
    font-weight: 600;
    margin-top: 0px;
    margin-bottom: 5px;
`
const CollegeName = styled.p`
    opacity: 0.5;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    margin: 0px;
`
const RightFixedHeader = styled.div`
    float: right;
    height: 100%;
    display: flex;
    align-items: center;
`
const EllipsisBtnWrap = styled.div`
    float: left;
    margin-left: 15px;
`
const EllipsisBtn = styled.button`
    border: none;
    outline: none;
    color: ${({theme}) => theme.colors.dark_blue};
    opacity: 0.5;
    cursor: pointer;
`
const UpdateBtnWrap = styled.div`
    float: left;
`
const UpdateBtn = styled.div`
    border-radius: 4px;
    background: linear-gradient(2.21deg, 
    ${({theme}) => theme.colors.green} 0%, 
    ${({theme}) => theme.colors.lighter_blue} 100%);
    border: none;
    color: ${({theme}) => theme.colors.white};
    font-size: 12px;
    font-weight: 600;
    padding: 10px 30px;
`
const PeopleViewWrap = styled.div`
    float: left;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
`
const PeopleViewCount = styled.p`
    color: ${({theme}) => theme.colors.green};
    font-size: 32px;
    opacity: 0.8;
    margin: 0px;
    float: left;
`
const PeopleViewTxt = styled.p`
    opacity: 0.5;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    line-height: 14px;
    margin: 0px;
    width: 95.55px;
    float: left;
    margin-left: 10px;
`

const EventWrap = styled.div`
    box-shadow: 0 0 14px 2px rgba(83,83,83,0.1);
    background-color: ${({theme}) => theme.whiteOpacity.nine};
    border-radius: 4px;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 15px;
    width: 263px;
`
const PeopleHeader = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
    font-weight: 500;
    margin-top: 0px;
`
const AllEventWrap = styled.div`
    border-top: 1px solid rgba(0, 51, 102, 0.07);
    border-bottom: 1px solid rgba(0, 51, 102, 0.07);   
`
const EachEvt = styled.div`
    border-bottom: ${props => props.last ? 'none' : '1px dashed rgba(0, 51, 102, 0.07)'};
    padding: 15px 0px;
`
const EvtLeft = styled.div`
    float: left;
    width: 32%;
`
const EvtImage = styled.div`
    width: 60px;
    height: 60px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    border-radius: 4px;
`
const EvtRight = styled.div`
    float: left;
    width: 68%;
`
const EvtName = styled.p`
    opacity: 0.7;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 13px;
    margin: 0px;
    font-weight: 600;
`
const EventCollege = styled.p`
    opacity: 0.3;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    margin: 0px;
    margin-top: 2px;
`
const DateWrap = styled.div`
    margin-top: 10px;
`
const DateTime = styled.p`
    float: left;
    margin: 0px;
    color: rgba(0, 51, 102, 0.7);
    font-size: 14px;
    margin-right: ${props => props.right};
    font-weight: 600;
`
const ViewAllWrap = styled.div`
    text-align: center;
    padding-top: 15px;
    color: ${({theme}) => theme.colors.green};
    font-size: 12px;
`
const BackToProfileWrap = styled.div`
    height: 24px;
    display: ${props => props.display !== 'profile' ? 'block' : 'none'};
`
const BackToProfileFixed = styled.div`
    position: fixed
    background: #f2f2f2;
    right: 0;
    left: 0;
    z-index: 500;
`
const BackToProfile = styled.div`
    color: ${({theme}) => theme.colors.light_green};
    font-size: 13px;
    font-weight: ;
    cursor: pointer;
    display: block;
    margin: auto;
    width: 1141px;
    padding: 12px 0px;
`

const SuggestEvent = props => (
  <Fragment>
    <EventWrap>
      <PeopleHeader>Suggested Events</PeopleHeader>
      <AllEventWrap>
        <EachEvt>
          <EvtLeft>
            <EvtImage image={img1} alt="event image"/>
          </EvtLeft>
          <EvtRight>
            <EvtName>Music Festival</EvtName>
            <EventCollege>Anna University</EventCollege>
            <DateWrap>
              <DateTime right="10px">
                <img src={calendarIcon} alt="calender icon"/>
                &nbsp;24 Jun
              </DateTime>
              <DateTime>
                <img src={clockIcon} alt="clock icon"/>
                &nbsp;12:00 PM
              </DateTime>
              <ClearBoth/>
            </DateWrap>
          </EvtRight>
          <ClearBoth/>
        </EachEvt>
        <EachEvt>
          <EvtLeft>
            <EvtImage image={img1} alt="event image"/>
          </EvtLeft>
          <EvtRight>
            <EvtName>Music Festival</EvtName>
            <EventCollege>Anna University</EventCollege>
            <DateWrap>
              <DateTime right="10px">
                <img src={calendarIcon} alt="calender icon"/>
                &nbsp;24 Jun
              </DateTime>
              <DateTime>
                <img src={clockIcon} alt="clock icon"/>
                &nbsp;12:00 PM
              </DateTime>
              <ClearBoth/>
            </DateWrap>
          </EvtRight>
          <ClearBoth/>
        </EachEvt>
        <EachEvt last>
          <EvtLeft>
            <EvtImage image={img1} alt="event image"/>
          </EvtLeft>
          <EvtRight>
            <EvtName>Music Festival</EvtName>
            <EventCollege>Anna University</EventCollege>
            <DateWrap>
              <DateTime right="10px">
                <img src={calendarIcon} alt="calender icon"/>
                &nbsp;24 Jun
              </DateTime>
              <DateTime>
                <img src={clockIcon} alt="clock icon"/>
                &nbsp;12:00 PM
              </DateTime>
              <ClearBoth/>
            </DateWrap>
          </EvtRight>
          <ClearBoth/>
        </EachEvt>
      </AllEventWrap>
      <ViewAllWrap>View All</ViewAllWrap>
    </EventWrap>
  </Fragment>
)

const ViewersComponent = props => (
  <Fragment>
    <ViewersWrap>
      <ViewsWrap width="60%" onClick={() => props.goToViewers('peopleViewed')}>
        <ViewsCount>89</ViewsCount>
        <ViewsTxt>People viewed your profile</ViewsTxt>
      </ViewsWrap>
      <ViewsWrap width="40%" onClick={() => props.goToViewers('searchAppearances')}>
        <ViewsCount>122</ViewsCount>
        <ViewsTxt>Search Appearances</ViewsTxt>
      </ViewsWrap>
      <ClearBoth/>
    </ViewersWrap>
  </Fragment>
)

const AttatchHead = props => (
  <Fragment>
    <FixedHeader>
      <FixedHeadInner>
        <LeftFixedHead>
          <FixedHeadImage image={profile} alt="profile image"/>
          <ProfileNameWrap>
            <ProfileName>Katherine Floyd</ProfileName>
            <CollegeName>Faculty at Manipal University Manipal, Karnataka, India</CollegeName>
          </ProfileNameWrap>
          <ClearBoth/>
        </LeftFixedHead>
        <RightFixedHeader>
          <PeopleViewWrap onClick={() => props.goToViewers('searchAppearances')}>
            <PeopleViewCount>122</PeopleViewCount>
            <PeopleViewTxt>Search Appearances</PeopleViewTxt>
            <ClearBoth/>
          </PeopleViewWrap>
          <PeopleViewWrap onClick={() => props.goToViewers('peopleViewed')}>
            <PeopleViewCount>890</PeopleViewCount>
            <PeopleViewTxt>People viewed your profile</PeopleViewTxt>
            <ClearBoth/>
          </PeopleViewWrap>
          <UpdateBtnWrap>
            <UpdateBtn>UPDATE PROFILE</UpdateBtn>
          </UpdateBtnWrap>
          <EllipsisBtnWrap>
            <EllipsisBtn>
              <i className="fa fa-ellipsis-h"></i>
            </EllipsisBtn>
          </EllipsisBtnWrap>
          <ClearBoth/>
        </RightFixedHeader>
        <ClearBoth/>
      </FixedHeadInner>
    </FixedHeader>
  </Fragment>
)


let lastScrollY = 0;

class FacultyComponent extends React.Component {

  state = {
    activeTab: 1,
    scrollCount: 0,
    currentView: 'profile'
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    lastScrollY = window.scrollY;
    this.setState({scrollCount: lastScrollY})
  }

  getView = () => {
    let view;
    const {currentView} = this.state;
    switch (currentView) {
      case 'profile':
        view = <FacultyLeft/>
        break
      case 'peopleViewed':
        view = <PeopleViewed/>
        break
      case 'searchAppearances':
        view = <SearchAppearances/>
        break
      default:
        view = <FacultyLeft/>
        break
    }
    return view
  }

  backToProfile = () => {
    this.setState({currentView: 'profile'})
  }

  goToViewers = type => {
    this.setState({currentView: type})
  }


  render() {
    const {currentView, scrollCount} = this.state
    return (
      <Wrapper height={window.innerHeight - 62 + 'px'}>
        <FixedHeaderWrap display={scrollCount > 410 && currentView === 'profile' ? 'block' : 'none'}>
          <AttatchHead goToViewers={this.goToViewers}/>
        </FixedHeaderWrap>
        <BackToProfileWrap display={currentView}>
          <BackToProfileFixed>
            <BackToProfile onClick={this.backToProfile}>
              <i className="fas fa-angle-left"></i>
              &nbsp;Back to Profile
            </BackToProfile>
          </BackToProfileFixed>
        </BackToProfileWrap>
        <FacultyContainer>
          <FacultyCenter>
            <FacultyLeftWrap>
              {this.getView()}
            </FacultyLeftWrap>
            <FacultyRightWrap>
              {currentView === 'profile' ? <ViewersComponent goToViewers={this.goToViewers}/> : null}
              <FeedRight list="1"/>
              <ClearBoth/>
              <SuggestEvent/>
            </FacultyRightWrap>
            <ClearBoth/>
          </FacultyCenter>
        </FacultyContainer>
      </Wrapper>
    )
  }
}

export default withRouter(FacultyComponent)