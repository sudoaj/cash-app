import React from 'react';
import styled from 'styled-components';

import { ClearBoth, BlueButton } from "../../../Core/reusable-styles";

import logo from '../../../../assets/Caterpillar.png'
import img1 from '../../../../assets/profile2.jpeg'
import img2 from '../../../../assets/profile3.jpeg'
import img3 from '../../../../assets/black-and.jpg'
import logo3 from '../../../../assets/pexels-photo-567630.jpeg';
import logo4 from '../../../../assets/casual-cellular.jpg';
import logo5 from '../../../../assets/adult-blur.jpg';
import logo6 from '../../../../assets/adolescent-b.jpg';

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
const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
`

const TableHead = styled.thead`
    background-color: #E9E7E7;
`
const TableBody = styled.tbody`
   background-color: ${({theme}) => theme.colors.white};
`
const Row = styled.tr`
    border-bottom: 1px solid #E9E7E7;
    height: 39px;
`

const HeadCol = styled.th`
    color: #777D86;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: left;
`

const StudentImage = styled.div`
    border-radius: 100%;
    display: inline-block;
    height: 30px;
    width: 30px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    float:left;
    background-color: rgb(225,231,238);
`

// const CheckBox = styled.label`
//     height: 15px;
//     width: 15px;
//     background-color: #FFFFFF;
//     color: #fff;
//     border: 1px solid #E9E7E7;
//     text-align: center;
// `
// const CheckMark = styled.i`
//     color: ${props => props}
// `
const BodyCol = styled.td`
    color: #4A4A4A;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: left;
    height: 39px;
`
const IconBtn = styled.button`
    border: none;
    box-shadow: none;
    color: ${props => props.color};
    cursor: pointer;
    background: unset;
    outline: none;
    padding-left: ${props => props.left};
`

const PaginateWrap = styled.div`
    text-align: right;
    margin-top: 10px;
`
const PaginateCount = styled.span`
    color: #4A4A4A;
    font-size: 13px;
    margin-right: 10px;
`
const PaginateBtn = styled.button`
    border: 1px solid #C7C7C7;
    background-color: #FFFFFF;
    padding: 1px 10px;
    color: #4A4A4A;
    outline: none;
    cursor: pointer;
`

const AllAdminWrap = styled.div`
    margin-top: 20px;
`
const EachCourseWrap = styled.div`
    float: left;
    // width: 33.3333%;
    margin-bottom: 20px;
`
const EachCourse = styled.div`
    height: 60px;
    width: 235px;
    border: ${props => props.active ? '2px solid #1F87E0' : '1px solid #E9E7E7'};
    border-radius: 30px;
    background-color: #FFFFFF;
    box-sizing: border-box;
    float: left;
    display: table;
    padding-left: 20px;
`
const CourseTitle = styled.p`
    display: table-cell;
    vertical-align: middle;
    color: #4A4A4A;
    font-size: 13px;
    letter-spacing: 0.62px;
    margin: 0px;
    font-weight: bold;
`
const FacultyImage = StudentImage.extend`
    height: 20px;
    width: 20px;
`
const CourseArrowWrap = styled.div`
    height: 60px;
    width: 60px;
    box-sizing: border-box;
    float: left;
    display: flex;
    align-items: center;
`
const CourseArrow = styled.hr`
    border: ${props => props.active ? '1px solid #1F87E0' : '1px solid #979797'};
    width: 100%;
`
const CourseCountWrap = styled.div`
    width: 25px;
    height: 60px;
    float: left;
    display: flex;
    align-items: center;
`
const CourseCountBox = styled.div`
    height: 25px;
    width: 25px;
    background-color: ${props => props.active ? '#1F87E0' : '#777D86'};
    text-align: center;
    color: #FFFFFF;
    font-size: 13px;
    display: grid;
    align-items: center;
`


const SubjectsTab = props => (
    <React.Fragment>
        <TableContainer>
            <Table>
                <TableHead>
                    <Row>
                        <HeadCol style={{textAlign: 'center', width: '50px'}}><input type="checkbox"/></HeadCol>
                        <HeadCol>Subject Name</HeadCol>
                        <HeadCol>Program</HeadCol>
                        <HeadCol>Course</HeadCol>
                        <HeadCol>Semester</HeadCol>
                        <HeadCol>Faculty</HeadCol>
                        <HeadCol>Action</HeadCol>
                    </Row>
                </TableHead>
                <TableBody>
                    {studentData.map((student, index) => (
                        <Row key={index}>
                            <BodyCol style={{textAlign: 'center', width: '50px'}}>
                                <input type="checkbox"/>
                            </BodyCol>
                            <BodyCol>{student.name}</BodyCol>
                            <BodyCol>{student.program}</BodyCol>
                            <BodyCol>{student.course}</BodyCol>
                            <BodyCol>{student.semester}</BodyCol>
                            <BodyCol>
                                <FacultyImage image={student.image}/>
                                <FacultyImage image={student.image}
                                              style={{marginLeft: '-2px', display: student.semester === '3'
                                         ? 'inline-block' : 'none'}}
                                />
                            </BodyCol>
                            <BodyCol>
                                <IconBtn className="far fa-user" color="rgb(79, 228, 200)" left="0px"></IconBtn>
                                <IconBtn className="far fa-trash-alt" color="rgb(255, 92, 115)"></IconBtn>
                            </BodyCol>
                        </Row>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <PaginateWrap>
            <PaginateCount>1 - 50 of 1,572</PaginateCount>
            <PaginateBtn><i className="fas fa-caret-left"></i></PaginateBtn>
            <PaginateBtn><i className="fas fa-caret-right"></i></PaginateBtn>
        </PaginateWrap>
    </React.Fragment>
)

const Courses = props => (
    <React.Fragment>
        <TableContainer>
            <AllAdminWrap>
                <EachCourseWrap>
                    <EachCourse active>
                        <CourseTitle>Architecture</CourseTitle>
                    </EachCourse>
                    <CourseArrowWrap>
                        <CourseArrow active/>
                    </CourseArrowWrap>
                    <CourseCountWrap>
                        <CourseCountBox active>3</CourseCountBox>
                    </CourseCountWrap>
                </EachCourseWrap>
                <EachCourseWrap>
                    <CourseArrowWrap>
                        <CourseArrow active/>
                    </CourseArrowWrap>
                    <EachCourse>
                        <CourseTitle>Bachelor of Architecture</CourseTitle>
                    </EachCourse>
                    <CourseArrowWrap>
                        <CourseArrow/>
                    </CourseArrowWrap>
                    <CourseCountWrap>
                        <CourseCountBox>3</CourseCountBox>
                    </CourseCountWrap>
                </EachCourseWrap>
                <ClearBoth/>
            </AllAdminWrap>
            <AllAdminWrap>
                <EachCourseWrap>
                    <EachCourse>
                        <CourseTitle>Communication</CourseTitle>
                    </EachCourse>
                    <CourseArrowWrap>
                        <CourseArrow/>
                    </CourseArrowWrap>
                    <CourseCountWrap>
                        <CourseCountBox>3</CourseCountBox>
                    </CourseCountWrap>
                </EachCourseWrap>
                <EachCourseWrap>
                    <CourseArrowWrap>
                        <CourseArrow style={{visibility: 'hidden'}}/>
                    </CourseArrowWrap>
                    <EachCourse>
                        <CourseTitle>B. design (Fashion Design)</CourseTitle>
                    </EachCourse>
                    <CourseArrowWrap>
                        <CourseArrow/>
                    </CourseArrowWrap>
                    <CourseCountWrap>
                        <CourseCountBox>3</CourseCountBox>
                    </CourseCountWrap>
                </EachCourseWrap>
                <ClearBoth/>
            </AllAdminWrap>
            <AllAdminWrap>
                <EachCourseWrap>
                    <EachCourse>
                        <CourseTitle>Dentistry</CourseTitle>
                    </EachCourse>
                    <CourseArrowWrap>
                        <CourseArrow/>
                    </CourseArrowWrap>
                    <CourseCountWrap>
                        <CourseCountBox>3</CourseCountBox>
                    </CourseCountWrap>
                </EachCourseWrap>
                <EachCourseWrap>
                    <CourseArrowWrap>
                        <CourseArrow style={{visibility: 'hidden'}}/>
                    </CourseArrowWrap>
                    <EachCourse>
                        <CourseTitle>B. design (Interior Design)</CourseTitle>
                    </EachCourse>
                    <CourseArrowWrap>
                        <CourseArrow/>
                    </CourseArrowWrap>
                    <CourseCountWrap>
                        <CourseCountBox>3</CourseCountBox>
                    </CourseCountWrap>
                </EachCourseWrap>
                <ClearBoth/>
            </AllAdminWrap>
            <AllAdminWrap>
                <EachCourseWrap>
                    <EachCourse>
                        <CourseTitle>Engeenering</CourseTitle>
                    </EachCourse>
                    <CourseArrowWrap>
                        <CourseArrow/>
                    </CourseArrowWrap>
                    <CourseCountWrap>
                        <CourseCountBox>3</CourseCountBox>
                    </CourseCountWrap>
                </EachCourseWrap>
                <ClearBoth/>
            </AllAdminWrap>
            <AllAdminWrap>
                <EachCourseWrap>
                    <EachCourse>
                        <CourseTitle>Management</CourseTitle>
                    </EachCourse>
                    <CourseArrowWrap>
                        <CourseArrow/>
                    </CourseArrowWrap>
                    <CourseCountWrap>
                        <CourseCountBox>3</CourseCountBox>
                    </CourseCountWrap>
                </EachCourseWrap>
                <ClearBoth/>
            </AllAdminWrap>
        </TableContainer>
    </React.Fragment>
)

export class Subjects extends React.Component{

    state = {
        activeTab: 1
    }

    getTab = () => {
        let tab;
        switch (this.state.activeTab) {
            case 1:
                tab = <SubjectsTab/>
                break
            case 2:
                tab = <Courses/>
                break
            default:
                tab = <SubjectsTab/>
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
                            <DashName>College Subjects</DashName>
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
                                    onClick={() => this.switchTab(1)}>Subjects 1,572</TabNav>

                            <TabNav active={this.state.activeTab === 2}
                                    onClick={() => this.switchTab(2)}>Courses 28</TabNav>

                        </TabNavLeft>
                        <TabNavRight>
                            <RightInner>
                                <TabNavBtn>ADD SUBJECT</TabNavBtn>
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
        name: 'Words To Live By',
        program: 'Management',
        course: 'Bsc Business Management',
        semester: '2',
        email: 'coy_oloson@gmail.com',
        phone: '274-894-2437',
        title: 'Super Admin',
        image: logo
    },
    {
        id: 'ASC23002',
        name: 'Philosophy As A Science',
        program: 'Management',
        course: 'Bsc Business Management',
        semester: '3',
        email: 'von.kali@mail.com',
        phone: '229-348-5873',
        title: 'Principal',
        image: logo3
    },
    {
        id: 'ASC23003',
        name: 'On Being Human',
        program: 'Management',
        course: 'Bsc Business Management',
        semester: '4',
        email: 'brennon_ferry@yahoo.com',
        phone: '296-393-8976',
        title: 'IT Admin Head',
        image: logo4
    },
    {
        id: 'ASC23004',
        name: 'Importance On Human Life',
        program: 'Management',
        course: 'Bsc Business Management',
        semester: '6',
        email: 'arnaldo.coss@rahul.in',
        phone: '678-343-8348',
        title: 'Student Council',
        image: logo5
    },
    {
        id: 'ASC23005',
        name: 'Enlightement Is Not Just...',
        program: 'Management',
        course: 'Bsc Business Management',
        semester: '3',
        email: 'elnino@hotmail.com',
        phone: '062-849-8357',
        title: 'Head of Department',
        image: logo6
    },
    {
        id: 'ASC23006',
        name: 'When The Morning Dawns',
        program: 'Management',
        course: 'Bsc Business Management',
        semester: '6',
        email: 'dooley.enos@casandra.io',
        phone: '782-493-9384',
        title: 'IT Admin',
        image: img1
    },
    {
        id: 'ASC23007',
        name: 'A Brief History Of Creation',
        program: 'Management',
        course: 'Bsc Business Management',
        semester: '2',
        email: 'crooks_olga@yahoo.com',
        phone: '086-913-4895',
        title: 'IT-Admin',
        image: img2
    },
    {
        id: 'ASC23008',
        name: 'Always Look At The Brig...',
        program: 'Management',
        course: 'Bsc Business Management',
        semester: '7',
        email: 'shane.torp@hotmail.com',
        phone: '542-348-2547',
        title: 'System Admin',
        image: img3
    },
    {
        id: 'ASC23009',
        name: 'The Idea of God Is Not Hen...',
        program: 'Management',
        course: 'Bsc Business Management',
        semester: '8',
        email: 'lewy_stones@mail.com',
        phone: '349-546-7656',
        title: 'Member',
        image: logo3
    },
    {
        id: 'ASC230010',
        name: 'Enlightenment Is Not Just...',
        program: 'Management',
        course: 'Bsc Business Management',
        semester: '6',
        email: 'info@apple.com',
        phone: '349-546-7656',
        title: 'Member',
        image: img3
    },
    {
        id: 'ASC230011',
        name: 'Edward Williams',
        program: 'Management',
        course: 'Bsc Business Management',
        semester: '3',
        email: 'gusikowski@hotmail.com',
        phone: '349-546-7656',
        title: 'Member',
        image: img3
    },
    {
        id: 'ASC230012',
        name: 'Mathieu Fleming',
        program: 'Management',
        course: 'Bsc Business Management',
        semester: '2',
        email: 'shawnmendes@gmail.com',
        phone: '349-546-7656',
        title: 'Member',
        image: logo5
    },
    {
        id: 'ASC230013',
        name: 'Aaron Ramsey',
        program: 'Management',
        course: 'Bsc Business Management',
        semester: '3',
        email: 'brianchesky@airbnb.com',
        phone: '349-546-7656',
        title: 'Member',
        image: img3
    }
]