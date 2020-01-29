import React from 'react';
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter';

//Images
import imageWrap from '../../assets/deng-unsplash.jpg';
import imageWrap2 from '../../assets/scott-walsh.jpg'
import logo from '../../assets/adult-backpacker.jpg';
import logo1 from '../../assets/black-and.jpg';
import logo2 from '../../assets/black-girl.jpg';
import logo3 from '../../assets/pexels-photo-567630.jpeg';
import logo4 from '../../assets/casual-cellular.jpg';
import logo5 from '../../assets/adult-blur.jpg';
import logo6 from '../../assets/adolescent-b.jpg';


import { FixedBackground, Wrapper,
    RightContainer, ClearBoth, BlueButton, ErrorMsg } from '../Core/reusable-styles/index';

    const  FollowRightContainer = styled(RightContainer)`
    width: 65%;
    padding: 3%; 
    `
// const FollowRightContainer = RightContainer.extend`
//     width: 65%;
//     padding: 3%; 
// `

const HeaderFour = styled.h4`
    font-weight: 500;
    color: ${({theme}) => theme.colors.dark_grey};
    letter-spacing: 2px;
    margin: 0px;
    font-size: 25px;
    margin-left: 8px;
`

const CollegesContainer = styled.div`
    margin-top: 3%;
`

const CollegeCardWrap = styled.div`
    box-sizing: border-box;
    width: 33.3333%;
    padding-left: 8px;
    padding-right: 8px;
    float: left;
    margin-bottom: 2%;
`

const CollegeCard = styled.div`
    border: 1px solid #E9E7E7;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.white};
    padding: 6% 0% 6% 6%; 
    width: 100%;
    cursor: pointer;
    box-sizing: border-box;
`
const LogoDiv = styled.div`
    height: 74px;
    width: 74px;
    border-radius: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    float: left;
    position: relative;
`
const Marked = styled.span`
    color: #ffffff;
    background: ${({theme}) => theme.colors.blue};
    width: 1em;
    height: 1em;
    padding: 0.5em;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    display: ${props => props.active ? 'block' : 'none'};
`
const CollegeNameWrap = styled.div`
    float: left;
    padding: 7% 0 0 4%;
    width: 65%;
`
const CollegeName = styled.p`
    color: #1C4776;
    font-size: 14px;
    margin: 0px 0px 5px;
    font-weight: 550;
    letter-spacing: 0.8px;
`
const CollegeLocation = styled.p`
    color: #8AA2B6;
    font-size: 14px;
    margin: 0px;
`

const BlueBtnWrap = styled.div`
    text-align: center;
    margin-top: 3%;
`

const images = [
    logo, logo1, logo2, logo3, logo4, logo5, logo6,
    logo, logo1, logo2, logo3, logo4, logo5, logo6
]


const colleges = Array.from(Array(12).keys()).map((value, index, array) => ({
    id: Math.floor(Math.random() * Math.floor(900)),
    name: 'SRM University',
    location: 'Chennai, India',
    logo: images[index],
    onClick: () => {}
}))

const members = Array.from(Array(12).keys()).map((value, index, array) => ({
    id: Math.floor(Math.random() * Math.floor(900)),
    name: 'Angel Norman',
    college: 'SRM University',
    image: images[index],
    onClick: () => {}
}))


const ChooseCollege = props => (
    <React.Fragment>
        <HeaderFour>SELECT AT LEAST 5 COLLEGE'S TO FOLLOW</HeaderFour>
        <CollegesContainer>
            {props.colleges.map((college, index) => (
                <CollegeCardWrap key={index}>
                    <CollegeCard onClick={() => props.handleSelect(college.id)}>
                        <LogoDiv style={{backgroundImage: `url(${college.logo})`}}>
                            <Marked active={props.state.selectedColleges.includes(college.id)}>
                                <i className="fa fa-check"></i>
                            </Marked>
                        </LogoDiv>
                        <CollegeNameWrap>
                            <CollegeName>{college.name + index}</CollegeName>
                            <CollegeLocation>{college.location}</CollegeLocation>
                        </CollegeNameWrap>
                        <ClearBoth/>
                    </CollegeCard>
                </CollegeCardWrap>
            ))}
            <ClearBoth/>
        </CollegesContainer>
        <ErrorMsg
            style={{ display: props.visibility, marginLeft: '8px' }}>Pls select at least 5 colleges</ErrorMsg>
    </React.Fragment>
)

const ChooseMember = props => (
    <React.Fragment>
        <HeaderFour>SELECT AT LEAST 5  MEMBERS'S TO FOLLOW</HeaderFour>
        <CollegesContainer>
            {props.members.map((member, index) => (
                <CollegeCardWrap key={index}>
                    <CollegeCard onClick={() => props.handleSelect(member.id)}>
                        <LogoDiv style={{backgroundImage: `url(${member.image})`}}>
                            <Marked active={props.state.selectedMembers.includes(member.id)}>
                                <i className="fa fa-check"></i>
                            </Marked>
                        </LogoDiv>
                        <CollegeNameWrap>
                            <CollegeName>{member.name + index}</CollegeName>
                            <CollegeLocation>{member.college}</CollegeLocation>
                        </CollegeNameWrap>
                        <ClearBoth/>
                    </CollegeCard>
                </CollegeCardWrap>
            ))}
            <ClearBoth/>
        </CollegesContainer>
        <ErrorMsg
            style={{ display: props.visibility, marginLeft: '8px' }}>Pls select at least 5 members</ErrorMsg>
    </React.Fragment>
)


class FollowComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            selectedColleges: [],
            selectedMembers: [],
            collegeSubmitClick: false,
            memberSubmitClick: false
        }
    }


    handleSelect = id => {
        switch (this.state.step) {
            case 1:
                const { selectedColleges } = this.state

                if (selectedColleges.includes(id)) {
                    let index = selectedColleges.indexOf(id)
                    selectedColleges.splice(index, 1)
                    this.setState({selectedColleges: selectedColleges})
                } else {
                    selectedColleges.push(id)
                    this.setState({selectedColleges: selectedColleges})
                }
                break;
            default:
                const { selectedMembers } = this.state

                if (selectedMembers.includes(id)) {
                    let index = selectedMembers.indexOf(id)
                    selectedMembers.splice(index, 1)
                    this.setState({selectedMembers: selectedMembers})
                } else {
                    selectedMembers.push(id)
                    this.setState({selectedMembers: selectedMembers})
                }
                break;
        }
    }

    getFollow = () => {
        let step;
        if (this.state.step === 1) {
            step = <ChooseCollege colleges={colleges}
                                  handleSelect={this.handleSelect}
                                  state={this.state}
                                  visibility={this.state.collegeSubmitClick &&
                                  this.state.selectedColleges.length < 5 ? 'block' : 'none'}/>
        } else {
            step = <ChooseMember members={members}
                                 handleSelect={this.handleSelect}
                                 state={this.state}
                                 visibility={this.state.memberSubmitClick &&
                                 this.state.selectedMembers.length < 5 ? 'block' : 'none'}/>
        }
        return step;
    }

    handleSubmit = () => {
        switch (this.state.step) {
            case 1:
                this.setState({collegeSubmitClick: true})
                if (this.state.selectedColleges.length >= 5)
                    this.setState({step: 2});
                break;
            default:
                this.setState({memberSubmitClick: true})
                if (this.state.selectedMembers.length >= 5)
                    this.props.history.push('/')
                break;
        }
    }

    render() {
        return(
            <Wrapper>
                <FixedBackground imageURL={this.state.step === 1 ? imageWrap : imageWrap2}>
                    <FollowRightContainer>
                        {this.getFollow()}
                        <BlueBtnWrap>
                            <BlueButton onClick={this.handleSubmit}>Next</BlueButton>
                        </BlueBtnWrap>
                    </FollowRightContainer>
                    <ClearBoth/>
                </FixedBackground>
            </Wrapper>
        )
    }

}

export default withRouter(FollowComponent)