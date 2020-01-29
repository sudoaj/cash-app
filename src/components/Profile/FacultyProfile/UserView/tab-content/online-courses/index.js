import React, {Fragment} from 'react';
import styled from 'styled-components';

import {ClearBoth} from "../../../../../Core/reusable-styles";

import logo3 from '../../../../../../assets/pexels-register.jpeg';
import logo4 from '../../../../../../assets/casual-cellular.jpg';
import logo10 from '../../../../../../assets/lauren-mancke.jpg';


const TableContainer = styled.div``
const PublishedCourse = styled.div`
    width: 32%;
    float: left;
    margin-right: ${props => props.index % 3 === 0 ? '0' : '2%'};
    margin-bottom: 15px;
    
`
const PublishedInner = styled.div`
    height: 226px;
    width: 258px;
    border-radius: 4px;
    border: 0.5px solid ${({theme}) => theme.colors.light_grey};
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: ${({theme}) => theme.whiteOpacity.nine};
        box-shadow: 0 0 20px 3px rgba(10,37,62,0.1);
        border-color: transparent;
    }
`
const CourseTop = styled.div`
    height: 88px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    position: relative;
    border-radius: 4px 4px 0px 0px;
    box-sizing: border-box;
`
const CourseCategory = styled.div`
    position: absolute;
    bottom: -12px;
    left: 0px;
    height: 24px;
    min-width: 90px;
    display: grid;
    align-items: center;
    text-align: center;
    border-radius: 0 2px 2px 0;
    background: linear-gradient(186.54deg, 
    ${({theme}) => theme.colors.dark_purple} 0%, 
    ${({theme}) => theme.colors.light_blue} 100%);
    font-size: 12px;
    color: ${({theme}) => theme.colors.white};
    letter-spacing: 1px;
    font-weight: lighter;
    padding: 0xp 10px;
`
const CourseBottom = styled.div`
    padding-top: 20px;
    box-sizing: border-box;
    padding: 25px 15px 0px 20px;
`

const CourseTitle = styled.p`
    opacity: 0.9;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
    margin-top: 0px;
    margin-bottom: 10px;
    font-weight: 600;
    letter-spacing: 1px;
`
const OtherCourseDetail = styled.div``

const EachCourseDetail = styled.div`
    margin-bottom: 3px;
`
const CourseDetailTitle = styled.span`
    color: rgb(106, 138, 163);
    font-size: 12px;
`
const CourseDetailAns = styled.span`
    color: ${({theme}) => theme.colors.dark_blue};
    opacity: 0.8;
    font-size: 12px;
    font-weight: 600;
`
const ViewDashBtnWrap = styled.div`
    text-align: right;
    margin-top: 13px;
`
const ViewDashBtn = styled.button`
    cursor: pointer;
    font-size: 12px;
    color: ${({theme}) => theme.colors.green};
    border: none;
    outline: none;
    font-weight: bold;
`

export class FacultyOnlineCourses extends React.Component {

    render() {
        return(
            <Fragment>
                <TableContainer>
                    {studentData.map((course, index) => (
                        <PublishedCourse key={index} index={index+1}>
                            <PublishedInner>
                                <CourseTop image={course.image}>
                                    <CourseCategory>{course.category}</CourseCategory>
                                </CourseTop>
                                <CourseBottom>
                                    <CourseTitle>{course.name}</CourseTitle>
                                    <OtherCourseDetail>
                                        <EachCourseDetail>
                                            <CourseDetailTitle>Skills:&nbsp;</CourseDetailTitle>
                                            <CourseDetailAns>{course.skill}</CourseDetailAns>
                                        </EachCourseDetail>
                                        <EachCourseDetail>
                                            <CourseDetailTitle>Points:&nbsp;</CourseDetailTitle>
                                            <CourseDetailAns>{course.points}</CourseDetailAns>
                                        </EachCourseDetail>
                                    </OtherCourseDetail>
                                    <ViewDashBtnWrap>
                                        <ViewDashBtn>View Detail</ViewDashBtn>
                                    </ViewDashBtnWrap>
                                </CourseBottom>
                            </PublishedInner>
                        </PublishedCourse>
                    ))}
                    <ClearBoth/>
                </TableContainer>
            </Fragment>
        )
    }
}

const studentData = [
    {
        id: 'ASC23001',
        name: 'Learn UX Design',
        category: 'Design',
        skill: 'Research, Wireframes',
        points: 600,
        image: logo10
    },
    {
        id: 'ASC23001',
        name: 'Learn UI Design',
        category: 'Design',
        skill: 'Design',
        points: 300,
        image: logo3
    },
    {
        id: 'ASC23001',
        name: 'Learn Typography',
        category: 'Design',
        skill: 'Sketching',
        points: 100,
        image: logo10
    },
    {
        id: 'ASC23001',
        name: 'Learn Web Design',
        category: 'Code',
        skill: 'Research, Wireframes',
        points: 89,
        image: logo3
    },
    {
        id: 'ASC23001',
        name: 'Learning Texturing',
        category: '3D Modeling',
        skill: 'Design',
        points: 500,
        image: logo4
    },
    {
        id: 'ASC23001',
        name: 'Learn Illustrator',
        category: 'Design',
        skill: 'Sketching',
        points: 600,
        image: logo3
    }
]