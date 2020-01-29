import React from 'react';
import "../../../../../node_modules/video-react/dist/video-react.css"
import "../../../../static/main.css"
import styled from 'styled-components';
import {Link} from 'react-router-dom';

//images
import logo from '../../../../assets/profile2.jpeg';
import logo1 from '../../../../assets/black-and.jpg';
import logo2 from '../../../../assets/profile3.jpeg';
import logo3 from '../../../../assets/pexels-photo-567630.jpeg';
import logo4 from '../../../../assets/mit-logo.jpg';
import logo5 from '../../../../assets/Stanford-Logo.png';
import logo6 from '../../../../assets/Harvard-Logo.png';
import logo8 from '../../../../assets/microsoft.png';
import logo9 from '../../../../assets/oracle.jpg';
import logo10 from '../../../../assets/Caterpillar.png';


import {ClearBoth} from "../../../Core/reusable-styles/index";


const RightContainer = styled.div`
    float: left;
    // width: 26%;
`
const RightInner = styled.div``
const PeopleWrap = styled.div`
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
const FollowContainer = styled.div`
    border-top: 1px solid rgba(0, 51, 102, 0.07);
`
const FollowWrap = styled.ul`
    margin: 0;
    padding: 0;
`
const EachFollow = styled.li`
    list-style-type: none;
    padding: 5px 0;
    box-sizing: border-box;
    cursor: pointer;
    margin-top: 10px;
`
const FollowImageWrap = styled.div`
    float: left;
    box-sizing: border-box;
    width: 20%;
`
const FollowImage = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    cursor: pointer;
`
const FollowNameWrap = styled.div`
    float: left;
    width: 66%;
    padding-top: 5px;
    padding-left: 5px;
`
const FollowName = styled.p`
    opacity: 0.7;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 13px;
    font-weight: 500;
    margin: 0px;
`
const FollowLocal = styled.p`
    opacity: 0.3;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    font-weight: 600;
    margin-top: 5px;
    margin-bottom: 0px;
`
const FollowBtnWrap = styled.div`
    float: left;
    width: 10%;
    text-align: right;
    padding-top: 10px;
`
const FollowBtn = styled.div`
    height: 20px;
    width: 20px;
    background: ${props => props.following
  ? `linear-gradient(9.62deg, ${props.theme.colors.green} 0%, ${props.theme.colors.lighter_blue} 100%)`
  : 'rgba(0, 51, 102, 0.2)'};
    color: ${({theme}) => theme.colors.white};
    font-size: 11px;
    border-radius: 100%;
    text-align: center;
    display: table;
    transition: 0.3s;
`
const ViewAllWrap = styled.div`
    text-align: center;
    padding: 8px 0 3px;
    border-top: 1px solid rgba(0, 51, 102, 0.07);
    margin-top: 10px;
`
const viewAllLink = {
  color: '#4CC075',
  fontSize: '12px',
  textDecoration: 'none'
}

export class FeedRight extends React.Component {

  state = {
    peopleData: [],
    unisData: [],
    companyData: [],
  }

  followPeople = id => {
    const {peopleData} = this.state
    if (peopleData.includes(id)) {
      let index = peopleData.indexOf(id);
      peopleData.splice(index, 1);
      this.setState({peopleData: peopleData})
    } else {
      peopleData.push(id)
      this.setState({peopleData: peopleData})
    }
  }

  followUni = id => {
    const {unisData} = this.state
    if (unisData.includes(id)) {
      let index = unisData.indexOf(id);
      unisData.splice(index, 1);
      this.setState({unisData: unisData})
    } else {
      unisData.push(id)
      this.setState({unisData: unisData})
    }
  }

  followCompany = id => {
    const {companyData} = this.state
    if (companyData.includes(id)) {
      let index = companyData.indexOf(id);
      companyData.splice(index, 1);
      this.setState({companyData: companyData})
    } else {
      companyData.push(id)
      this.setState({companyData: companyData})
    }
  }

  render() {
    return (
      <React.Fragment>
        <RightContainer>
          <RightInner>
            <PeopleWrap>
              <PeopleHeader>People you may know</PeopleHeader>
              <FollowContainer>
                <FollowWrap>
                  {peoplesData.map((people, index) => (
                    <EachFollow onClick={() => this.followPeople(people.id)} key={index}>
                      <FollowImageWrap>
                        <FollowImage image={people.image}/>
                      </FollowImageWrap>
                      <FollowNameWrap>
                        <FollowName>{people.name}</FollowName>
                        <FollowLocal>{people.locale}</FollowLocal>
                      </FollowNameWrap>
                      <FollowBtnWrap>
                        <FollowBtn following={this.state.peopleData.includes(people.id)}>
                          <i className={this.state.peopleData.includes(people.id)
                            ? "fa fa-check" : "fa fa-plus"}
                             style={{verticalAlign: 'middle', display: 'table-cell'}}></i>
                        </FollowBtn>
                      </FollowBtnWrap>
                      <ClearBoth/>
                    </EachFollow>
                  ))}
                </FollowWrap>
              </FollowContainer>
              <ViewAllWrap>
                <Link to="/" style={viewAllLink}>View all</Link>
              </ViewAllWrap>
            </PeopleWrap>
            {this.props.list === '1' ? null : (
              <PeopleWrap>
                <PeopleHeader>Universities to Follow</PeopleHeader>
                <FollowContainer>
                  <FollowWrap>
                    {uniData.map((uni, index) => (
                      <EachFollow key={index} onClick={() => this.followUni(uni.id)}>
                        <FollowImageWrap>
                          <FollowImage image={uni.image}/>
                        </FollowImageWrap>
                        <FollowNameWrap>
                          <FollowName>{uni.name}</FollowName>
                          <FollowLocal>{uni.locale}</FollowLocal>
                        </FollowNameWrap>
                        <FollowBtnWrap>
                          <FollowBtn following={this.state.unisData.includes(uni.id)}>
                            <i className={this.state.unisData.includes(uni.id)
                              ? "fa fa-check" : "fa fa-plus"}
                               style={{verticalAlign: 'middle', display: 'table-cell'}}></i>
                          </FollowBtn>
                        </FollowBtnWrap>
                        <ClearBoth/>
                      </EachFollow>
                    ))}
                  </FollowWrap>
                </FollowContainer>
                <ViewAllWrap>
                  <Link to="/" style={viewAllLink}>View all</Link>
                </ViewAllWrap>
              </PeopleWrap>
            )}

            {this.props.list === '1' ? null : (
              <PeopleWrap>
                <PeopleHeader>Companies to Follow</PeopleHeader>
                <FollowContainer>
                  <FollowWrap>
                    {companiesData.map((company, index) => (
                      <EachFollow key={index} onClick={() => this.followCompany(company.id)}>
                        <FollowImageWrap>
                          <FollowImage image={company.image}/>
                        </FollowImageWrap>
                        <FollowNameWrap>
                          <FollowName>{company.name}</FollowName>
                          <FollowLocal>{company.locale}</FollowLocal>
                        </FollowNameWrap>
                        <FollowBtnWrap>
                          <FollowBtn following={this.state.companyData.includes(company.id)}>
                            <i className={this.state.companyData.includes(company.id)  ? "fa fa-check" : "fa fa-plus"}
                               style={{verticalAlign: 'middle', display: 'table-cell'}}></i>
                          </FollowBtn>
                        </FollowBtnWrap>
                        <ClearBoth/>
                      </EachFollow>
                    ))}
                  </FollowWrap>
                </FollowContainer>
                <ViewAllWrap>
                  <Link to="/" style={viewAllLink}>View all</Link>
                </ViewAllWrap>
              </PeopleWrap>
            )}

          </RightInner>
        </RightContainer>
      </React.Fragment>
    )
  }
}


const peoplesData = [
  {
    id: 1,
    name: 'Nathaniel Knight',
    locale: 'IT-Roukela',
    image: logo,
    following: false
  },
  {
    id: 2,
    name: 'Moble Valdez',
    locale: 'IT-Roukela',
    image: logo1,
    following: false
  },
  {
    id: 3,
    name: 'Ella Pena',
    locale: 'IT-Roukela',
    image: logo2,
    following: false
  },
  {
    id: 4,
    name: 'Jim Bradley',
    locale: 'IT-Roukela',
    image: logo3,
    following: false
  }
]

const uniData = [
  {
    id: 1,
    name: 'MIT University',
    locale: 'Roukela',
    image: logo4,
    following: false
  },
  {
    id: 2,
    name: 'SRM University',
    locale: 'Chennai',
    image: logo5,
    following: false
  },
  {
    id: 3,
    name: 'NIT University',
    locale: 'Warangal',
    image: logo6,
    following: false
  },
  {
    id: 4,
    name: 'Gujarat University',
    locale: 'Ahmedabad',
    image: logo4,
    following: false
  }
]

const companiesData = [
  {
    id: 1,
    name: 'Microsoft',
    locale: 'Computer Software',
    image: logo8,
    following: false
  },
  {
    id: 2,
    name: 'Oracle',
    locale: 'Information Technology',
    image: logo9,
    following: false
  },
  {
    id: 3,
    name: 'Caterpillar Inc',
    locale: 'Machinery',
    image: logo10,
    following: false
  },
  {
    id: 4,
    name: 'Honey Wall',
    locale: 'IT',
    image: logo8,
    following: false
  }
]
