import React from 'react';
import styled from 'styled-components';

import { ClearBoth, BlueButton } from "../../../Core/reusable-styles";

import logo from '../../../../assets/Caterpillar.png'
import img1 from '../../../../assets/profile2.jpeg'
import img2 from '../../../../assets/profile3.jpeg'
import img3 from '../../../../assets/scott-walsh.jpg'
import logo3 from '../../../../assets/pexels-register.jpeg';
import logo4 from '../../../../assets/casual-cellular.jpg';
// import logo5 from '../../../../assets/adult-blur.jpg';
// import logo6 from '../../../../assets/airb1.jpg';
import logo10 from '../../../../assets/lauren-mancke.jpg';
// import logo11 from '../../../../assets/deng-unsplash.jpg';



const TabHeaderWrap = styled.div`
    border: 1px solid #E9E7E7;
`
const TabHeaderInner = styled.div`
    height: 65px;
    background-color: #fff;
    width: 100%;
    border-radius: 2px 2px 0px 0px;
    padding-left: 26px;
    padding-right: 26px;
    box-sizing: border-box;
`
const CollegeDetailWrap = styled.div`
    float: left;
    display: flex;
    align-items: center;
    height: 100%;
`
const CollegeLogo = styled.div`
    border-radius: 100%;
    height: 37px;
    width: 37px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.logo});
    float: left;
    margin-right: 10px; 
    background-color: rgb(225, 231, 238);
`
const DashName = styled.p`
    color: #4A4A4A;
    font-size: 18px;
    font-weight: 500;
    margin: 0px;
    float: left;
`
const MembersCountWrap = styled.div`
    float: right;
    display: flex;
    align-items: center;
    height: 100%;
`
const FewImages = styled.div`
    border-radius: 100%;
    height: 20px;
    width: 20px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    float: left;
`
const MembersCount = styled.span`
    color: #777D86;
    font-size: 11px;
    margin-left: 5px;
`
const TabNavContainer = styled.div`
    background-color: #fff;
    height: 45px;
    box-sizing: border-box;
    border-top: 1px solid #F2F2F2;
    padding: 0px 7px 0px 26px;
    border-radius: 0px 0px 2px 2px;
`
const TabNavLeft = styled.div`
    float: left;
    min-width: 30%;
    padding-top: 11px;
    box-sizing: border-box;
`

const TabNavRight = styled.div`
    float: right;
    width: 20%;
    text-align: right;
    display: flex;
    align-items: center;
    height: 100%;
`
const RightInner = styled.div`
    text-align: right;
    width: 100%;
`
const TabNav = styled.a`
    color: ${props => props.active ? '#4A4A4A' : '#777D86'};
    font-size: 13px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${props => props.active ? '#1F87E0' : 'transparent'};
    margin-right: 50px;
    padding-bottom: 11px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: 0.3s;
`

const TabNavBtn = BlueButton.extend`
    padding: 10px 20px;
    font-size: 11px;
    letter-spacing: 1px;
`
const TableContainer = styled.div`
    margin-top: 20px;
`
const PublishedCourse = styled.div`
    width: 24%;
    float: left;
    margin-right: ${props => props.index % 4 === 0 ? '0' : '1.2%'};
    margin-bottom: 15px;
    
`
const PublishedInner = styled.div`
    height: 248px;
    width: 235px;
    border-radius: 4px;
    background-color: rgba(255,255,255,0.9);
    box-shadow: 0 0 20px 3px rgba(10,37,62,0.1);
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        box-shadow: 0 0 20px 3px rgba(10,37,62,0.05);   
    }
`
const CourseTop = styled.div`
    height: 100px;
    width: 100%;
    // background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    position: relative;
    border-radius: 2px 2px 0px 0px;
`
const CourseCategory = styled.div`
    position: absolute;
    bottom: -12px;
    left: 0px;
    height: 24px;
    width: 82px;
    display: grid;
    align-items: center;
    text-align: center;
    border-radius: 0 2px 2px 0;
    background-color: #003366;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 1px;
    font-weight: lighter;
    padding: 0xp 5px;
`
const CourseBottom = styled.div`
    padding-top: 20px;
    box-sizing: border-box;
    padding: 25px 15px 0px 20px;
`

const CourseTitle = styled.p`
    opacity: 0.9;
    color: #003366;
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
    opacity: 0.9;
    color: #003366;
    font-size: 12px;
    // font-weight: 500;
`
const ViewDashBtnWrap = styled.div`
    text-align: right;
    margin-top: 5px;
`
const ViewDashBtn = styled.button`
    cursor: pointer;
    font-size: 12px;
    color: #1F87E0;
    border: none;
    outline: none;
    font-weight: bold;
`

const CoursePublished = props => (
    <React.Fragment>
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
                                    <CourseDetailTitle>Level:&nbsp;</CourseDetailTitle>
                                    <CourseDetailAns>{course.level}</CourseDetailAns>
                                </EachCourseDetail>
                                <EachCourseDetail>
                                    <CourseDetailTitle>INR:&nbsp;</CourseDetailTitle>
                                    <CourseDetailAns style={{fontWeight: 'bold'}}>{course.price}</CourseDetailAns>
                                </EachCourseDetail>
                            </OtherCourseDetail>
                            <ViewDashBtnWrap>
                                <ViewDashBtn>View Dashboard</ViewDashBtn>
                            </ViewDashBtnWrap>
                        </CourseBottom>
                    </PublishedInner>
                </PublishedCourse>
            ))}
            <ClearBoth/>
        </TableContainer>
    </React.Fragment>
)

const CoursesDrafts = props => (
    <React.Fragment>
        <TableContainer>
            Course Drafts
        </TableContainer>
    </React.Fragment>
)

const Payments = props => (
    <React.Fragment>
        <TableContainer>
            Payments
        </TableContainer>
    </React.Fragment>
)

const Certificates = props => (
    <React.Fragment>
        <TableContainer>
            Certificates
        </TableContainer>
    </React.Fragment>
)

export class OnlineCourses extends React.Component{

    state = {
        activeTab: 1
    }

    getTab = () => {
        let tab;
        switch (this.state.activeTab) {
            case 1:
                tab = <CoursePublished/>
                break
            case 2:
                tab = <CoursesDrafts/>
                break
            case 3:
                tab = <Payments/>
                break
            case 4:
                tab = <Certificates/>
                break
            default:
                tab = <CoursePublished/>
                break
        }
        return tab;
    }

    switchTab = index => {
        this.setState({activeTab: index})
    }

    render() {
        return(
            <React.Fragment>
                <TabHeaderWrap>
                    <TabHeaderInner>
                        <CollegeDetailWrap>
                            <CollegeLogo logo={logo}/>
                            <DashName>College Online Courses</DashName>
                            <ClearBoth/>
                        </CollegeDetailWrap>
                        <MembersCountWrap>
                            <FewImages image={img1}/>
                            <FewImages image={img2} style={{marginLeft: '-2px'}}/>
                            <MembersCount>+1598</MembersCount>
                        </MembersCountWrap>
                        <ClearBoth/>
                    </TabHeaderInner>
                    <TabNavContainer>
                        <TabNavLeft>
                            <TabNav active={this.state.activeTab === 1}
                                    onClick={() => this.switchTab(1)}>Course Published</TabNav>

                            <TabNav active={this.state.activeTab === 2}
                                    onClick={() => this.switchTab(2)}>Course Drafts 28</TabNav>

                            <TabNav active={this.state.activeTab === 3}
                                    onClick={() => this.switchTab(3)}>Payments</TabNav>

                            <TabNav active={this.state.activeTab === 4}
                                    onClick={() => this.switchTab(4)}>Certificates 28</TabNav>

                        </TabNavLeft>
                        <TabNavRight>
                            <RightInner>
                                <TabNavBtn>ADD ONLINE COURSE</TabNavBtn>
                            </RightInner>
                        </TabNavRight>
                        <ClearBoth/>
                    </TabNavContainer>
                </TabHeaderWrap>
                <React.Fragment>
                    {this.getTab()}
                </React.Fragment>
            </React.Fragment>
        )
    }
}


const studentData = [
    {
        id: 'ASC23001',
        name: 'Learn UX Design',
        category: 'Design',
        skill: 'Research, Wireframes',
        level: 'Advanced',
        price: '3500.00',
        image: logo10
    },
    {
        id: 'ASC23001',
        name: 'Learn UI Design',
        category: 'Design',
        skill: 'Design',
        level: 'Amatuer',
        price: '5000.00',
        image: logo3
    },
    {
        id: 'ASC23001',
        name: 'Learn Typography',
        category: 'Design',
        skill: 'Sketching',
        level: 'Professional',
        price: '7500.00',
        image: logo10
    },
    {
        id: 'ASC23001',
        name: 'Learn Web Design',
        category: 'Code',
        skill: 'Research, Wireframes',
        level: 'Professional',
        price: '30,500.00',
        image: logo3
    },
    {
        id: 'ASC23001',
        name: 'Learning Texturing',
        category: '3D Modeling',
        skill: 'Design',
        level: 'Advanced',
        price: '30,500.00',
        image: logo4
    },
    {
        id: 'ASC23001',
        name: 'Learn Illustrator',
        category: 'Design',
        skill: 'Sketching',
        level: 'Advanced',
        price: '22,00.00',
        image: logo3
    },
    {
        id: 'ASC23001',
        name: 'Learn UX Design',
        category: 'Design',
        skill: 'Research, Wireframes',
        level: 'Advanced',
        price: '3500.00',
        image: img3
    },
    {
        id: 'ASC23001',
        name: 'Learn UX Design',
        category: 'Design',
        skill: 'Research, Wireframes',
        level: 'Advanced',
        price: '3500.00',
        image: logo10
    },
    {
        id: 'ASC23001',
        name: 'Learn UX Design',
        category: 'Design',
        skill: 'Research, Wireframes',
        level: 'Advanced',
        price: '3500.00',
        image: logo10
    },
    {
        id: 'ASC23001',
        name: 'Learn UX Design',
        category: 'Design',
        skill: 'Research, Wireframes',
        level: 'Advanced',
        price: '3500.00',
        image: logo10
    },
    {
        id: 'ASC23001',
        name: 'Learn UX Design',
        category: 'Design',
        skill: 'Research, Wireframes',
        level: 'Advanced',
        price: '3500.00',
        image: logo10
    },
    {
        id: 'ASC23001',
        name: 'Learn UX Design',
        category: 'Design',
        skill: 'Research, Wireframes',
        level: 'Advanced',
        price: '3500.00',
        image: logo10
    },
    {
        id: 'ASC23001',
        name: 'Learn UX Design',
        category: 'Design',
        skill: 'Research, Wireframes',
        level: 'Advanced',
        price: '3500.00',
        image: logo10
    }
]