import React, {Fragment} from 'react'
import styled from 'styled-components'
import {ClearBoth} from "../../../../Core/reusable-styles";

import img1 from '../../../../../assets/black-and.jpg'
import img2 from '../../../../../assets/profile3.jpeg'
import img3 from '../../../../../assets/profile2.jpeg'
import img4 from '../../../../../assets/casual-cellular.jpg'
import img5 from '../../../../../assets/adult-backpacker.jpg'
import img6 from '../../../../../assets/adult-blur.jpg'
import img7 from '../../../../../assets/black-girl.jpg'

const FacultyDetailWrap = styled.div`
    width: 862px;
`
const UserDetailWrap = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.whiteOpacity.nine};
    border-radius: 4px;
    box-shadow: 0 0 14px 2px rgba(83,83,83,0.1);
    margin-bottom: 15px;
    padding: 20px;
    box-sizing: border-box;
`
const HeaderTxt = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 16px;
    font-weight: 500;
    margin: 0px;
`
const SearchersContainer = styled.div`
    border: 1px solid rgba(221,223,229,0.75);
    border-radius: 7px;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0 1px 2px 0 rgba(204,204,204,0.5);
    margin-top: 15px;
`
const ChartContainer = styled.div``
const ViewersWrap = styled.div`
  padding: 30px;
  box-sizing: border-box;
  padding-bottom: 0px;
`

const EachViewer = styled.div`
  float: left;
  width: 25%;
  text-align: center;
  margin-bottom: 30px;
`
const ViewersImage = styled.div`
  height: 80px;
  width: 80px;
  // background-color: #D8D8D8;
  border-radius: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${props => props.image});
  margin: auto;
`
const ViewersName = styled.p`
  color: ${({theme}) => theme.colors.dark_blue};
  font-size: 14px;
`
const ViewersDesc = styled.p`
  opacity: 0.5;
  color: ${({theme}) => theme.colors.dark_blue};
  font-size: 11px;
  max-width: 160px;
  margin: auto;
  margin-top: 0px;
  margin-bottom: 10px;
`
const ChatBtn = styled.button`
  height: 35px;
  width: 120px;
  border-radius: 4px;
  background: linear-gradient(2.21deg, #4CC075 0%, #29B8E4 100%);
  box-shadow: 3px 10px 10px 1px rgba(10,37,62,0.1);
  margin: auto;
  color: ${({theme}) => theme.colors.white};
  font-size: 12px;
  border: none;
`


export class PeopleViewed extends React.Component {

  render() {
    return (
      <Fragment>
        <FacultyDetailWrap>
          <UserDetailWrap>
            <HeaderTxt>People who viewed your profile</HeaderTxt>
            <SearchersContainer>
              <ChartContainer/>
            </SearchersContainer>
            <SearchersContainer>
              <ViewersWrap>
                {viewers.map((viewer, index) => (
                  <EachViewer key={index}>
                    <ViewersImage image={viewer.image}/>
                    <ViewersName>{viewer.name}</ViewersName>
                    <ViewersDesc>{viewer.desc}</ViewersDesc>
                    <ChatBtn>CHAT</ChatBtn>
                  </EachViewer>
                ))}
                <ClearBoth/>
              </ViewersWrap>
            </SearchersContainer>
          </UserDetailWrap>
        </FacultyDetailWrap>
      </Fragment>
    )
  }
}

const searchNames = ['Bernard Christensen ', 'Edna Peterson', 'Louis Nguyen', 'Annie Lambert',
  'Phillip Lowe', 'Gene Watts',
  'Lena McGuire', 'Barry Taylor']
const images = [ img1, img2, img3, img4, img5, img6, img7, img1 ]


const viewers = Array.from(Array(8).keys()).map((value, index, array) => ({
  id: Math.floor(Math.random() * Math.floor(900)),
  name: searchNames[index],
  desc: 'Faculty at Manipal University Manipal, Karnataka, India',
  image: images[index],
  onClick: () => {}
}))
