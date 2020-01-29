import React from 'react'
import styled from 'styled-components'
import withRouter from 'react-router-dom/withRouter'

import {CreateCourseTab} from "./create-course-tab";
import {AssignSkills} from "./assign-skills";
import {CourseContent} from "./course-content";
import {AssignFaculty} from "./assign-faculty";

import checkMark from '../../assets/green-mark.png'
import {CreateCourseSettings} from "./settings";
import {theme} from "../../static/colors";

const Wrapper = styled.section`
    background: ${({theme}) => theme.colors.ash};
    padding-top: 15px;
    min-height: ${props => props.height};
    padding-bottom: 20px;
    @media screen and (min-width: 1600px) {
        width: 1370px; 
        margin: auto;
    }
`
const ClearBoth = styled.div`
    clear: both;
`
const TabContainer = styled.div`
    width: 70%;
    border-radius: 4px;
    background-color: ${({theme}) => theme.whiteOpacity.nine};
    box-shadow: 0 11px 14px 2px rgba(83,83,83,0.1);
    margin: 0px auto;
    max-width: 862px;
    @media (max-width: 768px) {
        width: 90%;
    }
`
const TabHeader = styled.div`
    background: linear-gradient(180.32deg, 
    ${({theme}) => theme.colors.dark_purple} 0%, 
    ${({theme}) => theme.colors.light_blue} 100%);
    box-shadow: 0 1px 11px 0 rgba(10,37,62,0.15);
    border-radius: 4px 4px 0px 0px;
`
const TabNavWrap = styled.div`
    padding: 19px 0 10px;
`
const EachNav = styled.div`
    float: left;
    width: 20%;
`
const NavIndexWrap = styled.div`
    text-align: center;
`
const NavIndex = styled.div`
    width: 20px;
    height: 20px;
    display: table;
    border: ${props => props.active || props.done ? '2px solid #FFFFFF'  : '2px solid rgba(255, 255, 255, 0.54)'};
    box-shadow: 0 5px 8px 0 rgba(10,37,62,0.1);
    color: ${props => props.active ? theme.colors.white : theme.whiteOpacity.five};
    font-size: 11px;
    border-radius: 100%;
    line-height: 1.9;
    margin: auto;
    background-color: ${props => props.done ? theme.colors.white : 'transparent'};
`
const NavName = styled.p`
    margin: 0px;
    color: ${props => props.active ? theme.colors.white: theme.whiteOpacity.five};
    font-size: 11px;
    letter-spacing: 1px;
    margin-top: 5px;
`
const NavDoneImg = styled.img`
    display: ${props => props.done ? 'inline' : 'none'};
    vertical-align: middle;
`
const NavNumber = styled.span`
    display: ${props => props.done ? 'none' : 'block'};
`



class CreateCourse extends React.Component {

    state = {
        step: 1,
    }

    getStep = () => {
        let step;
        switch (this.state.step) {
            case 2:
                step = <AssignSkills handleSubmit={this.handleSubmit}/>
                break
            case 3:
                step = <CourseContent handleSubmit={this.handleSubmit}/>
                break
            case 4:
                step = <AssignFaculty handleSubmit={this.handleSubmit}/>
                break
            case 5:
                step = <CreateCourseSettings handleSubmit={this.handleSubmit}/>
                break
            default:
                step = <CreateCourseTab handleSubmit={this.handleSubmit}/>
                break
        }
        return step;
    }

    handleSubmit = values => {
        switch (this.state.step) {
            case 1:
                this.setState({step: 2})
                break
            case 2:
                this.setState({step: 3})
                break
            case 3:
                this.setState({step: 4})
                break
            case 4:
                this.setState({step: 5})
                break
            default:
                this.setState({step: 1})
                break
        }
    }

    render() {
        return(
            <Wrapper height={window.innerHeight + 'px'}>
                <TabContainer>
                    <TabHeader>
                        <TabNavWrap>
                            <EachNav>
                                <NavIndexWrap>
                                    <NavIndex active={this.state.step === 1} done={this.state.step >= 2}>
                                        <NavDoneImg src={checkMark} done={this.state.step >= 2}/>
                                        <NavNumber done={this.state.step >= 2}>1</NavNumber>
                                    </NavIndex>
                                    <NavName active={this.state.step === 1}>Create Course</NavName>
                                </NavIndexWrap>
                                <ClearBoth/>
                            </EachNav>
                            <EachNav>
                                <NavIndexWrap>
                                    <NavIndex active={this.state.step === 2} done={this.state.step >= 3}>
                                        <NavDoneImg src={checkMark} done={this.state.step >= 3}/>
                                        <NavNumber done={this.state.step >= 3}>2</NavNumber>
                                    </NavIndex>
                                    <NavName active={this.state.step === 2}>Assign Skills</NavName>
                                </NavIndexWrap>
                            </EachNav>
                            <EachNav>
                                <NavIndexWrap>
                                    <NavIndex active={this.state.step === 3} done={this.state.step >= 4}>
                                        <NavDoneImg src={checkMark} done={this.state.step >= 4}/>
                                        <NavNumber done={this.state.step >= 4}>3</NavNumber>
                                    </NavIndex>
                                    <NavName active={this.state.step === 3}>Course Content</NavName>
                                </NavIndexWrap>
                            </EachNav>
                            <EachNav>
                                <NavIndexWrap>
                                    <NavIndex active={this.state.step === 4} done={this.state.step >= 5}>
                                        <NavDoneImg src={checkMark} done={this.state.step >= 5}/>
                                        <NavNumber done={this.state.step >= 5}>4</NavNumber>
                                    </NavIndex>
                                    <NavName active={this.state.step === 4}>Assign Faculty</NavName>
                                </NavIndexWrap>
                            </EachNav>
                            <EachNav>
                                <NavIndexWrap>
                                    <NavIndex active={this.state.step === 5}>
                                        <NavDoneImg src={checkMark}/>
                                        <NavNumber>5</NavNumber>
                                    </NavIndex>
                                    <NavName active={this.state.step === 5}>Settings</NavName>
                                </NavIndexWrap>
                            </EachNav>
                            <ClearBoth/>
                        </TabNavWrap>
                    </TabHeader>
                    {this.getStep()}
                </TabContainer>
            </Wrapper>
        )
    }
}

export default withRouter(CreateCourse)
