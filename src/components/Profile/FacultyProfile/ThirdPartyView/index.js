import React, {Fragment} from 'react';
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter'
import {FacultyLeft} from "../UserView/faculty-left";

import {Wrapper,ClearBoth} from "../../../Core/reusable-styles";
import profile from '../../../../assets/black-and.jpg'


const MiddleContainer = styled.section`
    width: 862px;
    margin: auto;
    padding: 15px 0px;
`
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
    margin-right: 30px;
`
const EllipsisBtn = styled.span`
    cursor: pointer;
    background: -webkit-linear-gradient(180deg,#38BAC1 0%,#48BE8B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 12px;
    font-weight: bold;
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
    box-shadow: 3px 7px 14px 3px rgba(10,37,62,0.1);
`
const ChatBtn = styled.div`
  border-radius: 4px;
  height: 33px;
  width: 102px;
  border: 1px solid #38BAC1;
  cursor: pointer;
  text-align: center;
  display: table;
  margin-left: 5px;
`
const ChatBtnTxt = styled.span`
   background: -webkit-linear-gradient(180deg,#38BAC1 0%,#48BE8B 100%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   font-size: 12px;
   font-weight: 600;
   display: table-cell;
   vertical-align: middle;
`

const AttachHead = props => (
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
          <EllipsisBtnWrap>
            <EllipsisBtn>
              View Resume
            </EllipsisBtn>
          </EllipsisBtnWrap>
          <UpdateBtnWrap>
            <UpdateBtn>FOLLOW</UpdateBtn>
          </UpdateBtnWrap>
          <UpdateBtnWrap>
            <ChatBtn>
              <ChatBtnTxt>CHAT</ChatBtnTxt>
            </ChatBtn>
          </UpdateBtnWrap>
          <ClearBoth/>
        </RightFixedHeader>
        <ClearBoth/>
      </FixedHeadInner>
    </FixedHeader>
  </Fragment>
)

let lastScrollY = 0;

class FacultyThirdComponent extends React.Component {

  state = {
    scrollCount: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    lastScrollY = window.scrollY;
    this.setState({scrollCount: lastScrollY})
  }

  render() {
    const {scrollCount} = this.state
    return (
      <Fragment>
        <Wrapper height={window.innerHeight - 62 + 'px'}>
          <FixedHeaderWrap display={scrollCount > 410 ? 'block' : 'none'}>
            <AttachHead/>
          </FixedHeaderWrap>
          <MiddleContainer>
            <FacultyLeft thirdView/>
          </MiddleContainer>
        </Wrapper>
      </Fragment>
    )
  }
}

export default withRouter(FacultyThirdComponent)