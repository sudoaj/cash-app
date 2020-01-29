import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import withRouter from 'react-router-dom/withRouter'
import {Link} from 'react-router-dom'
import {Notification} from "../Notification"

import {Wrapper, ClearBoth} from '../reusable-styles/index'
import logo1 from '../../../assets/black-and.jpg'

const FixedHeaderWrap = styled.header`
    height: 62px;
`
const FixedHeader = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    height: 62px;
    width: 100%;
    left: 0;
    top: 0;
    position: fixed;
    right: 0;
    z-index: 1000;
    @media screen and (min-width: 1600px) {
        width: 1370px; 
        margin: auto;
    }
`
// const BorderBottom = styled.div`
//     height: 3%;
// background: linear-gradient(135.82deg, #FEAC5E 0%, #C779D0 52.28%, #4BC0C8 100%);
//     width: 100%;
// `

const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    width: 1141px;
    box-sizing: border-box;
    height: 100%;
`

const HeaderLeft = styled.div`
    float: left;
    width: 20%
`

const HeaderCenter = styled.form`
    float: left;
    width: 60%;
`
// const SearchInput = styled.input`
//     height: 30px;
//     width: 585px;
//     border-radius: 15px;
//     background-color: #F2F2F2;
//     color: #949494;
//     font-size: 13px;
//     outline: none;
//     border: none;
//     box-sizing: border-box;
//     padding: 0 16px;
//     margin: auto;
//     display: block;
//     &::placeholder {
//         color: #949494;
//         font-size: 13px;
//     }
// `
const HeaderRight = styled.div`
    float: right;
    width: 20%;
`

const AccountDiv = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${logo1});
    float: right;
    cursor: pointer;
    position: relative;
`
const AccountDivInner = styled.div`
    width: 100%;
    height: 100%;
`
const NotificationBtn = styled.div`
    height: 35px;
    width: 35px;
    border-radius: 100%;
    color: rgb(169, 172, 180);
    text-align: center;
    float: right;
    display: table;
    margin-right: 20px;
    position: relative;
    line-height: 33px;
`
const NotificatioCount = styled.span`
    position: absolute;
    height: 6px;
    width: 6px;
    background-color: ${({theme}) => theme.colors.blue};
    right: 4px;
    top: 0;
    border-radius: 100%;
`

const ProfileDropdown = styled.ul`
    position: absolute;
    top: 100%;
    right: -15px;
    z-index: 1000;
    float: left;
    padding: 20px 0px;
    min-width: 270px;
    list-style-type: none;
    font-size: 14px;
    text-align: left;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 4px;
    box-shadow: 2px 16px 22px 7px rgba(83,83,83,0.2);
    background-clip: padding-box;
    box-sizing: border-box;
    &:before {
        content: " ";
        position: absolute;
        display: block;
        top: -7px;
        border: 8px solid #fff;
        transform: translateX(-50%) rotate(135deg);
        box-shadow: -2px 2px 3px rgba(57,73,76,0.1);
        left: auto;
        right: 15px;
    }
`
const DropDownHead = styled.div`
    padding: 0px 20px;
    border-bottom: 1px solid rgba(0, 51, 102, 0.07);
    padding-bottom: 15px;
    margin-bottom: 10px;
`
const DropHeadText = styled.p`
    margin: 0px;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
`

const UserList = styled.div`
     height: 50px;
     width: 100%;
     transition: 0.3s;
     background-color: ${props => props.active ? 'rgba(0, 51, 102, 0.07)' : 'transparent'};
     display: flex;
     align-items: center;
     &:hover {
        background: rgba(0, 51, 102, 0.07);
     }
`
const LeftUserList = styled.div`
    float: left;
    width: 23%;
    box-sizing: border-box;
    padding-left: 5%;
`
const RightUserList = styled.div`
    width: 77%;
    float: left;
    box-sizing: border-box;
    padding-right: 5%;
`
const DropImg = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
`
const DropTitle = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    opacity: 0.7;
    font-size: 14px;
    font-weight: 500;
    margin: 0px;
    margin-bottom: 5px;
`
const DropButText = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    opacity: 0.3;
    font-size: 12px;
    font-weight: 500;
    margin: 0px;
`
const OtherOptWrap = styled.div`
    border-top: 1px solid rgba(0, 51, 102, 0.07);
    margin-top: 20px;
    padding: 0% 7%;
`
const EachOpt = styled.div`
    margin-top: 10px;
    padding: 5px 0;
`
const OptIconWrap = styled.div`
    float: left;
    width: 10%;
`
const OptIcon = styled.div`
    height: 16px;
    width: 16px;
    border-radius: 100%;
    background-color: rgba(0, 51, 102, 0.4);
    color: ${({theme}) => theme.colors.white};
    display: grid;
    align-items: center;
    text-align: center;
    font-size: 10px;
`
const OptTextWrap = styled.div`
    float: left;
    width: 90%;
`
const OptText = styled.p`
    margin: 0px;
    color: ${({theme}) => theme.colors.dark_blue};
    opacity: 0.5;
    font-size: 14px;
    font-weight: 600;
`

const IconImage = styled.img`
    vertical-align: middle;
    cursor: pointer;
`
const NotificationDropDown = styled.section`
    position: absolute;
    top: 100%;
    margin-top: 15px;
    right: -15px;
    z-index: 1000;
    float: left;
    width: 368px;
    height: 530px;
    list-style-type: none;
    font-size: 14px;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 2px 16px 22px 7px rgba(83,83,83,0.2);
    background-clip: padding-box;
    box-sizing: border-box;
    &:before {
        content: " ";
        position: absolute;
        display: block;
        top: -7px;
        border: 8px solid #fff;
        transform: translateX(-50%) rotate(135deg);
        box-shadow: -2px 2px 3px rgba(57,73,76,0.1);
        left: auto;
        right: 15px;
    }
`


class HeaderComponent extends React.Component {

  state = {
    profileEnable: false,
    searchEnable: false,
    notificationEnable: false
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true)
  }


  handleClickOutside = (event) => {
    const domNode = ReactDOM.findDOMNode(this)
    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        profileEnable: false,
        notificationEnable: false
      })
    }
  }

  handleDropDown = (type, currentState) => {
    if (type === "profile")
      this.setState({profileEnable: !currentState})
    else
      this.setState({notificationEnable: !currentState})
  }

  render() {
    return (
      <Wrapper>
        <FixedHeaderWrap>
          <FixedHeader>
            <HeaderInner>
              <HeaderLeft>
                <Link to="/faculty">
                  <img src={require('../../../assets/university-logo-small.png')} alt="Logo"/>
                </Link>
              </HeaderLeft>
              <HeaderCenter>
                {/*<SearchInput placeholder="Search university" type="text"/>*/}
              </HeaderCenter>
              <HeaderRight>
                <AccountDiv>
                  <AccountDivInner
                    onClick={() => this.handleDropDown("profile", this.state.profileEnable)}/>
                  <ProfileDropdown
                    style={{display: this.state.profileEnable ? 'block' : 'none'}}>
                    <DropDownHead>
                      <DropHeadText>Profile</DropHeadText>
                    </DropDownHead>
                    <UserList>
                      <LeftUserList>
                        <DropImg image={logo1}/>
                      </LeftUserList>
                      <RightUserList>
                        <DropTitle>Darrell Stephens</DropTitle>
                        <DropButText>Student at Manipal University</DropButText>
                      </RightUserList>
                      <ClearBoth/>
                    </UserList>
                    <UserList active>
                      <LeftUserList>
                        <DropImg image={logo1}/>
                      </LeftUserList>
                      <RightUserList>
                        <DropTitle>Katherine Floyd</DropTitle>
                        <DropButText>Faculty at Manipal University</DropButText>
                      </RightUserList>
                      <ClearBoth/>
                    </UserList>
                    <OtherOptWrap>
                      <EachOpt>
                        <OptIconWrap>
                          <OptIcon className="fas fa-dollar-sign"></OptIcon>
                        </OptIconWrap>
                        <OptTextWrap>
                          <OptText>Purchase Credits</OptText>
                        </OptTextWrap>
                        <ClearBoth/>
                      </EachOpt>
                      <EachOpt>
                        <OptIconWrap>
                          <OptIcon className="fas fa-question"></OptIcon>
                        </OptIconWrap>
                        <OptTextWrap>
                          <OptText>Help Center</OptText>
                        </OptTextWrap>
                        <ClearBoth/>
                      </EachOpt>
                      <EachOpt>
                        <OptIconWrap>
                          <OptIcon className="fas fa-cog"></OptIcon>
                        </OptIconWrap>
                        <OptTextWrap>
                          <OptText>Profile Settings</OptText>
                        </OptTextWrap>
                        <ClearBoth/>
                      </EachOpt>
                      <EachOpt>
                        <OptIconWrap>
                          <OptIcon className="fas fa-arrow-right"></OptIcon>
                        </OptIconWrap>
                        <OptTextWrap>
                          <OptText>Log out</OptText>
                        </OptTextWrap>
                        <ClearBoth/>
                      </EachOpt>
                    </OtherOptWrap>
                  </ProfileDropdown>
                </AccountDiv>
                <NotificationBtn>
                  <IconImage src={require('../../../assets/CombinedShape.png')}
                             alt="Notifications"
                             onClick={() => this.handleDropDown("notification", this.state.notificationEnable)}
                   />
                  <NotificatioCount/>
                  {this.state.notificationEnable ? (
                    <NotificationDropDown>
                      <Notification/>
                    </NotificationDropDown>
                  ) : null}
                </NotificationBtn>
                <NotificationBtn>
                  <IconImage src={require('../../../assets/upload.png')} alt="Upload"/>
                </NotificationBtn>
                <NotificationBtn>
                  <IconImage src={require('../../../assets/search.png')} alt="Search"/>
                </NotificationBtn>
                <ClearBoth/>
              </HeaderRight>
              <ClearBoth/>
            </HeaderInner>
            {/*<BorderBottom/>*/}
          </FixedHeader>
        </FixedHeaderWrap>
      </Wrapper>
    )
  }
}

export default withRouter(HeaderComponent);

