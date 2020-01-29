import React, {Fragment} from 'react';
import styled from 'styled-components';

import backArrow from '../../../../../../assets/back-arrow.png'
import arcodionBtn from '../../../../../../assets/toggle-triangle.png'


import {ClearBoth} from "../../../../../Core/reusable-styles";

const SkillBoxWrap = styled.div``
const EachBox = styled.div`
    float: left;
    width: 24%;
    margin-right: ${props => props.index % 4 === 0 ? '0' : '1.3%'};
    margin-bottom: 1.3%;
`
const SkillBox = styled.div`
    height: 80px;
    width: 190px;
    border: 0.5px solid ${({theme}) => theme.colors.light_grey};
    background-color: ${({theme}) => theme.whiteOpacity.seven};
    border-radius: 2px;
    cursor: pointer;
    transition: 0.2s;
    padding-left: 20px;
    box-sizing: border-box;
    &:hover {
        background-color: ${({theme}) => theme.whiteOpacity.nine};
        box-shadow: 0 0 20px 3px rgba(10,37,62,0.1);
        border-color: ${({theme}) => theme.colors.white};
    }
`
const SkillTitle = styled.p`
    color: ${({theme}) => theme.colors.green};
    font-size: 12px;
    margin-top: 15px;
`
const SkillPoints = styled.p`
    margin-top: 0px;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 18px;
    opacity: 0.9;
`
const SkillDetailWrap = styled.div``
const DetailHeader = styled.div``
const BackBtn = styled.div`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 16px;
    cursor: pointer;
    float: left;
`
const BackArrow = styled.img`
    float: left;
    margin-top: 4px;
`
const BackSpan = styled.span`
    float: left;
    margin-left: 20px;
`
const HeaderPts = styled.p`
    float: right;
    text-align: right;
    opacity: 0.7;
    color: ${({theme}) => theme.colors.dark_blue};
    margin: 0px;
    font-size: 14px;
    font-weight: bold;
`
const DetailContent = styled.div`
    padding: 0px 25px;
    margin-top: 15px;
`
const EachDetail = styled.div``
const DetailTitleWrap = styled.div`
    border-bottom: 1px solid rgba(0,51,102,0.07);
    padding: 15px 0;
    width:  100%;
`
const DetailTitle = styled.p`
    opacity: 0.7;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
    float: left;
    margin: 0px;
`
const ToggleArcodion = styled.button`
    text-align: right;
    border: none;
    outline: none;
    float: right;
    cursor: pointer;
`
const EachContentWrap = styled.div`
    border-bottom: 1px solid rgba(0,51,102,0.07);
`
const EachDetailContent = styled.div`
    margin: 25px 0;
    display: ${props => props.height};
    transition: 0.3s;
`
const CourseNumberWrap = styled.div`
    float: left;
    width: 4%;
`
const CourseNumber = styled.div`
    height: 18px;
    width: 18px;
    background-color: rgba(0,51,102,0.2);
    border-radius: 100%;
    font-size: 11px;
    color: #FFFFFF;
    text-align: center;
    display: grid;
    align-items: center;
`
const CourseDescWrap = styled.div`
    float: left;
    width: 80%;
`
const DescTitleWrap = styled.div``
const DescTitle = styled.span`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
    font-weight: bold;
`
const DescUniversity = styled.span`
    opacity: 0.4;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
`
const DescBody = styled.p`
    opacity: 0.8;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    width: 90%;
    line-height: 17px;
    letter-spacing: 1px;
    margin: 0px;
    margin-top: 5px;
`
const CoursePointsWrap = styled.div`
    float: right;
    width: 10%;
    text-align: right;
`
const CoursePoints = styled.span`
    opacity: 0.8;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
`
const EventDummySpan = styled.div`
    height: 18px;
    width: 18px;
    background-color: transparent;
`
const ArticlesCountWrap = styled.div`
    margin-top: 5px;
`
const ArticlesCount = styled.span`
    opacity: 0.4;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    padding-right: 10px;
    margin-right: 10px;
    border-right: ${props => props.none ? 'none' : '1px solid #003366'};
`


export class FacultySkills extends React.Component {

    state = {
        selectSkill: false,
        selectedSkill: null,
        onlineCourses: true,
        events: false,
        articles: false,
        projects: false
    }

    selectSkill = skill => {
        this.setState({
            selectSkill: true,
            selectedSkill: skill
        })
    }

    renderSkills = () => {
        this.setState({
            selectSkill: false,
            selectedSkill: null
        })
    }

    handleAccordion = (name) => {
        switch(name) {
            case 'onlineCourses':
                this.setState({
                    onlineCourses: !this.state.onlineCourses,
                    events: false,
                    articles: false,
                    projects: false
                })
                break
            case 'events':
                this.setState({
                    events: !this.state.events,
                    onlineCourses: false,
                    articles: false,
                    projects: false
                })
                break
            case 'articles':
                this.setState({
                    articles: !this.state.articles,
                    events: false,
                    onlineCourses: false,
                    projects: false
                })
                break
            case 'projects':
                this.setState({
                    articles: false,
                    events: false,
                    onlineCourses: false,
                    projects: !this.state.projects
                })
                break
            default:
                this.setState({onlineCourses: !this.state.onlineCourses})
                break
        }
    }

    render() {
        const { selectSkill, selectedSkill, onlineCourses, events, articles } = this.state
        return(
            <Fragment>
                {selectSkill ? (
                    <SkillDetailWrap>
                        <DetailHeader>
                            <BackBtn onClick={this.renderSkills}>
                                <BackArrow alt="back" src={backArrow}/>
                                <BackSpan>{selectedSkill.name}</BackSpan>
                                <ClearBoth/>
                            </BackBtn>
                            <HeaderPts>{selectedSkill.points} pts</HeaderPts>
                            <ClearBoth/>
                        </DetailHeader>
                        <DetailContent>
                            <EachDetail>
                                <DetailTitleWrap>
                                    <DetailTitle>Online Courses</DetailTitle>
                                    <ToggleArcodion onClick={() => this.handleAccordion('onlineCourses')}>
                                        <img alt="toggle" src={arcodionBtn}/>
                                    </ToggleArcodion>
                                    <ClearBoth/>
                                </DetailTitleWrap>
                                <EachContentWrap>
                                    {selectedSkill.onlineCourses.map((course, index) => (
                                        <EachDetailContent key={index} height={onlineCourses ? 'block' : 'none'}>
                                            <CourseNumberWrap>
                                                <CourseNumber>{index + 1}</CourseNumber>
                                            </CourseNumberWrap>
                                            <CourseDescWrap>
                                                <DescTitleWrap>
                                                    <DescTitle>{course.name}</DescTitle>&nbsp;&nbsp;
                                                    <DescUniversity>By {course.university}</DescUniversity>
                                                </DescTitleWrap>
                                                <DescBody>{course.detail}</DescBody>
                                            </CourseDescWrap>
                                            <CoursePointsWrap>
                                                <CoursePoints>{course.points} pts</CoursePoints>
                                            </CoursePointsWrap>
                                            <ClearBoth/>
                                        </EachDetailContent>
                                    ))}
                                </EachContentWrap>
                            </EachDetail>
                            <EachDetail>
                                <DetailTitleWrap>
                                    <DetailTitle>Events</DetailTitle>
                                    <ToggleArcodion onClick={() => this.handleAccordion('events')}>
                                        <img alt="toggle" src={arcodionBtn}/>
                                    </ToggleArcodion>
                                    <ClearBoth/>
                                </DetailTitleWrap>
                                <EachContentWrap>
                                    {selectedSkill.onlineCourses.map((course, index) => (
                                        <EachDetailContent key={index} height={events ? 'block' : 'none'}>
                                            <CourseNumberWrap>
                                                <EventDummySpan/>
                                            </CourseNumberWrap>
                                            <CourseDescWrap>
                                                <DescTitleWrap>
                                                    <DescTitle>Compare Prices Find the Best
                                                        Computer Accessories</DescTitle><br/>
                                                    <DescUniversity>By {course.university}</DescUniversity>
                                                </DescTitleWrap>
                                            </CourseDescWrap>
                                            <CoursePointsWrap>
                                                <CoursePoints>{course.points} pts</CoursePoints>
                                            </CoursePointsWrap>
                                            <ClearBoth/>
                                        </EachDetailContent>
                                    ))}
                                </EachContentWrap>
                            </EachDetail>
                            <EachDetail>
                                <DetailTitleWrap>
                                    <DetailTitle>Articles</DetailTitle>
                                    <ToggleArcodion onClick={() => this.handleAccordion('articles')}>
                                        <img alt="toggle" src={arcodionBtn}/>
                                    </ToggleArcodion>
                                    <ClearBoth/>
                                </DetailTitleWrap>
                                <EachContentWrap>
                                    {selectedSkill.onlineCourses.map((course, index) => (
                                        <EachDetailContent key={index} height={articles ? 'block' : 'none'}>
                                            <CourseNumberWrap>
                                                <EventDummySpan/>
                                            </CourseNumberWrap>
                                            <CourseDescWrap>
                                                <DescTitleWrap>
                                                    <DescTitle>How to Dominate Content Marketing
                                                    with Machine Learning Tools</DescTitle><br/>
                                                    <ArticlesCountWrap>
                                                        <ArticlesCount>2K Stars</ArticlesCount>
                                                        <ArticlesCount>19K Views</ArticlesCount>
                                                        <ArticlesCount none>5K Shares</ArticlesCount>
                                                    </ArticlesCountWrap>
                                                </DescTitleWrap>
                                            </CourseDescWrap>
                                            <CoursePointsWrap>
                                                <CoursePoints>{course.points} pts</CoursePoints>
                                            </CoursePointsWrap>
                                            <ClearBoth/>
                                        </EachDetailContent>
                                    ))}
                                </EachContentWrap>
                            </EachDetail>
                            <EachDetail>
                                <DetailTitleWrap>
                                    <DetailTitle>Projects</DetailTitle>
                                    <ToggleArcodion onClick={() => this.handleAccordion('projects')}>
                                        <img alt="toggle" src={arcodionBtn}/>
                                    </ToggleArcodion>
                                    <ClearBoth/>
                                </DetailTitleWrap>
                            </EachDetail>
                        </DetailContent>
                    </SkillDetailWrap>
                ) : (
                    <SkillBoxWrap>
                        {allSkills.map((skill, index) => (
                            <EachBox key={index} index={index+1} onClick={() => this.selectSkill(skill)}>
                                <SkillBox>
                                    <SkillTitle>{skill.name}</SkillTitle>
                                    <SkillPoints>{skill.points} points</SkillPoints>
                                </SkillBox>
                            </EachBox>
                        ))}
                        <ClearBoth/>
                    </SkillBoxWrap>
                )}
            </Fragment>
        )
    }
}

const allSkills = Array.from(Array(8).keys()).map((value, index, array) => ({
    id: index,
    name: 'Marketing ' + index,
    points: 7839 + index,
    onlineCourses: [
        {
            name: 'Introduction to Marketing',
            university: 'Manipal University',
            points: 500,
            detail: 'This course covers three core topics in customer loyalty: branding, customer centricity, and practical, go-to-market strategies.'
        },
        {
            name: 'Marketing with Passion',
            university: 'Manipal University',
            points: 70,
            detail: 'This course covers three core topics in customer loyalty: branding, customer centricity, and practical, go-to-market strategies.'
        }
    ]
}))
