import React, {Fragment} from 'react'
import styled from 'styled-components'

import {ClearBoth} from "../../../Core/reusable-styles";

import searchIcon from '../../../../assets/search-symbol.png'
import img1 from '../../../../assets/Stanford-Logo.png'
import img2 from '../../../../assets/Caterpillar.png'
import img3 from '../../../../assets/university-logo-small.png'
import img4 from '../../../../assets/oracle.jpg'
import img5 from '../../../../assets/microsoft.png'
import img6 from '../../../../assets/mit-logo.jpg'
import img7 from '../../../../assets/Harvard-Logo.png'


const Container = styled.div`
    padding: 20px 50px;
`
const FollowHeader = styled.div``
const LeftHeader = styled.div`
    float: left;
`
const RightHeader = styled.div`
    float: right;
`
const HeaderTxt = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
    margin: 0px;
    margin-top: 5px;
`
const SearchBox = styled.div`
    width: 200px;
    float: right;
    border-bottom: 1px solid rgba(0, 51, 102, 0.07);
    padding-bottom: 10px;
`
const SearchIcon = styled.img`
    margin-right: 12px;
    float: left;
`
const SearchInput = styled.input`
    color: rgba(0, 51, 102, 0.8);
    font-size: 14px;
    border: none;
    outline: none; 
    float: left;
    &::placeholder {
        color: rgba(0, 51, 102, 0.8);
        font-size: 14px;
    }
`
const CollegesContainer = styled.div`
    margin-top: 12px;
`
const EachColleges = styled.div`
    float: left;
    width: 32%;
    margin-bottom: 13.5px;
    margin-right: ${props => props.index % 3 === 0 ? '0' : '2%'};
`
const CollegeWrap = styled.div`
    border: 0.9px solid #CAD4DE;
    width: 234px;
    height: 99.9px;
    border-radius: 3.6px;
    box-sizing: border-box;
    padding: 13.5px;
    cursor: pointer
`
const CollegeLogo = styled.div`
    height: 72.9px;
    width: 72.9px;
    background-color: #FCF0E3;
    border-radius: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    position: relative;
    float: left;
`
const Marked = styled.span`
    color: #ffffff;
    background: linear-gradient(0.49deg, #4CC075 0%, #29B8E4 100%);
    width: 27px;
    height: 27px;
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 0;
    font-size: 13px;
    display: ${props => props.active ? 'grid' : 'none'};
    align-items: center;
    text-align: center;
    
`
const CollegeNameWrap = styled.div`
    float: left;
    height: 100%;
    margin-left: 10px;
    display: table;
    padding-top: 20px;
`
const CollegeName = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12.6px;
    margin: 0px;
    margin-bottom: 10px;
`
const CollegeLocale = styled.p`
    margin: 0px;
    color: rgba(0, 51, 102, 0.5);
    font-size: 10.8px;    
`
const NextBtnWrap = styled.div`
    text-align: right;
`
const NextBtn = styled.button`
    height: 36px;
    width: 106.2px;
    border-radius: 3.6px;
    background: linear-gradient(180deg, #38BAC1 0%, #48BE8B 100%);
    box-shadow: 1px 7px 9px 2px rgba(10,37,62,0.2);
    color: ${({theme}) => theme.colors.white};
    font-size: 12.6px;
    border: none;
    cursor: pointer;
`

export class StepFive extends React.Component {

    state = {
        selectedColleges: []
    }


    selectCollege = id => {
        const { selectedColleges } = this.state
        if (selectedColleges.includes(id)) {
            let index = selectedColleges.indexOf(id)
            selectedColleges.splice(index, 1)
            this.setState({selectedColleges: selectedColleges})
        } else {
            selectedColleges.push(id)
            this.setState({selectedColleges: selectedColleges})
        }
    }

    render() {
        const { selectedColleges } = this.state
        return(
            <Fragment>
                <Container>
                    <FollowHeader>
                        <LeftHeader>
                            <HeaderTxt>Recommended College To Follow</HeaderTxt>
                        </LeftHeader>
                        <RightHeader>
                            <SearchBox>
                                <SearchIcon src={searchIcon}/>
                                <SearchInput type="text" placeholder="Search colleges.."/>
                                <ClearBoth/>
                            </SearchBox>
                            <ClearBoth/>
                        </RightHeader>
                        <ClearBoth/>
                    </FollowHeader>
                    <CollegesContainer>
                        {colleges.map((college, index) => (
                            <EachColleges key={index} index={index+1} onClick={() => this.selectCollege(college.id)}>
                                <CollegeWrap>
                                    <CollegeLogo image={college.logo}>
                                        <Marked active={selectedColleges.includes(college.id)}>
                                            <i className="fa fa-check"></i>
                                        </Marked>
                                    </CollegeLogo>
                                    <CollegeNameWrap>
                                        <CollegeName>{college.name}</CollegeName>
                                        <CollegeLocale>{college.location}</CollegeLocale>
                                    </CollegeNameWrap>
                                    <ClearBoth/>
                                </CollegeWrap>
                            </EachColleges>
                        ))}
                        <ClearBoth/>
                    </CollegesContainer>
                    <NextBtnWrap>
                        {/*<ErrorMsg style={{marginBottom: '5px', float: 'left'}}>Follow at least 5 colleges</ErrorMsg>*/}
                        <NextBtn onClick={this.props.handleSubmit}>NEXT</NextBtn>
                    </NextBtnWrap>
                </Container>
            </Fragment>
        )
    }
}

const locations = ['Chennai India', 'Banglore India', 'Madurai India', 'Banglore India',
    'Banglore India', 'Vellore India', 'Punjab India', 'Coimbatore India', 'Noida India']
const searchNames = ['SRM University', 'Caterpillar Inc.', 'HoneyWell', 'Oracle', 'Microsoft', 'VIT University',
    'LP University', 'BOSCH', 'University of Delhi']
const images = [ img1, img2, img3, img4, img5, img6, img7, img7, img6 ]


const colleges = Array.from(Array(9).keys()).map((value, index, array) => ({
    id: Math.floor(Math.random() * Math.floor(900)),
    name: searchNames[index],
    location: locations[index],
    logo: images[index],
    onClick: () => {}
}))