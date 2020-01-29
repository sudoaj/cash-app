import React from 'react';
import "../../../../../node_modules/video-react/dist/video-react.css"
import "../../../../static/main.css"
import styled from 'styled-components';


import { ClearBoth } from "../../../Core/reusable-styles/index";

import logo1 from '../../../../assets/black-and.jpg';


const LeftContainer = styled.div`
    float: left;
`
const LeftInner = styled.div``

const UserWrap = styled.div`
    border-radius: 7px;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0 0 14px 2px rgba(83,83,83,0.1);
    width: 263px;
    float: right;
`
const UserDetail = styled.div`
    padding: 7%;
    padding-bottom: 10px;
    // border-bottom: 0.75px dashed #B5B4B4;
    text-align: center;
`
const UserImage = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${logo1});
    margin: auto;
`

const UserName = styled.p`
    opacity: 0.9;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 7px;
    letter-spacing: 1px;
`
const UserType = styled.p`
    opacity: 0.5;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    font-weight: 500;
    margin-top: 0px;
    margin-bottom: 20px;
    letter-spacing: 1px;
`

const UserCourse = styled.p`
    opacity: 0.3;
    color: ${({theme}) => theme.colors.dark_blue};
    margin: 0px;
    font-size: 12px;
    color: #6D6C6E;
    font-weight: lighter;
    margin-bottom: 10px;
    text-align: center;
`

const SkillsWrap = styled.div`
    padding: 7%;
    padding-bottom: 10px;
    background: linear-gradient(180deg, #EAF4FF 0%, #E5F7F4 100%);
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
`
const SkillHeader = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    opacity: 0.6;
    font-size: 12px;
    letter-spacing: 0.81px;
    font-weight: 600;
    margin: 0px;
`
const AllSkill = styled.div`
    margin-top: 10px;
    width: 100%;
`
const EachSkill = styled.div`
    float: left;
    width: 47%;
    height: 50px;
    border-radius: 7px;
    margin: bottom;
    margin-right: ${props => props.index % 2 === 1 ? '4%' : '0%'};
    margin-bottom: 5%;
`
const SkillName = styled.p`
    opacity: 0.45;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 11px;
    margin: 0px;
    margin-bottom: 3px;
    margin-top: 10px;
    font-weight: bold;
`
const SkillCount = styled.p`
    margin: 0px;
    opacity: 0.75;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
    font-weight: 600;
`

export const FeedLeft = props => (
    <React.Fragment>
        <LeftContainer>
            <LeftInner>
                <UserWrap>
                    <UserDetail>
                        <UserImage/>
                        <UserName>Marion Moore</UserName>
                        <UserType>Student</UserType>
                        <UserCourse>Mechanical Engineering-<br/>
                            Semester 8 Manipal University</UserCourse>
                    </UserDetail>
                    <SkillsWrap>
                        <SkillHeader>
                            <i className="fa fa-star"></i>&nbsp;
                            SKILLS SCORE
                        </SkillHeader>
                        <AllSkill>
                            <EachSkill index="1">
                                <SkillName>Marketing</SkillName>
                                <SkillCount>7839</SkillCount>
                            </EachSkill>
                            <EachSkill index="2">
                                <SkillName>Scriptwriter</SkillName>
                                <SkillCount>7213</SkillCount>
                            </EachSkill>
                            <EachSkill index="3">
                                <SkillName>Graphic Design</SkillName>
                                <SkillCount>3298</SkillCount>
                            </EachSkill>
                            <EachSkill index="4">
                                <SkillName>Archaeology Rese..</SkillName>
                                <SkillCount>5489</SkillCount>
                            </EachSkill>
                            <ClearBoth/>
                        </AllSkill>
                    </SkillsWrap>
                </UserWrap>
                <ClearBoth/>
            </LeftInner>
        </LeftContainer>
    </React.Fragment>
)