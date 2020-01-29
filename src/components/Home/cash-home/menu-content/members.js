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
const NameSpan = styled.span`
    display: inline-block;
    margin-top: 10px;
    margin-left: 20px;
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
const AdminHeader = styled.p`
    color: #777D86;
    font-size: 14px;
    margin: 0px;
`
const AllAdminWrap = styled.div`
    margin-top: 20px;
`
const EachAdmin = styled.div`
    height: 75px;
    width: 235px;
    border-radius: 37.5px;
    background-color: #FFFFFF;
    padding: 8px;
    box-sizing: border-box;
    float: left;
    margin-right: ${props => props.margin % 4 === 0 ? '0px' : '10px'};
    margin-bottom: 20px;
`
const AdmimImage = styled.div`
    border-radius: 100%;
    height: 59px;
    width: 59px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    float: left;
    background-color: rgb(225,231,238);
`
const AdminDetails = styled.div`
    float: left;
    display: grid;
    height: 100%;
    align-items: center;
    margin-left: 10px;
`
const AdminName = styled.p`
    color: #4A4A4A;
    font-size: 13px;
    letter-spacing: 0.62px;
    margin: 0px;
    margin-bottom: 5px;
`
const AdminPosition = styled.p`
    margin: 0px;
    color: #AAA6A6;
    font-size: 11px;
    letter-spacing: 0.53px;
`


const Student = props => (
    <React.Fragment>
        <TableContainer>
            <Table>
                <TableHead>
                    <Row>
                        <HeadCol style={{textAlign: 'center', width: '50px'}}><input type="checkbox"/></HeadCol>
                        <HeadCol style={{textAlign: 'left'}}>Name</HeadCol>
                        <HeadCol>Email</HeadCol>
                        <HeadCol>Department</HeadCol>
                        <HeadCol>Course</HeadCol>
                        <HeadCol>Action</HeadCol>
                    </Row>
                </TableHead>
                <TableBody>
                    {studentData.map((student, index) => (
                        <Row key={index}>
                            <BodyCol style={{textAlign: 'center', width: '50px'}}>
                                <input type="checkbox"/>
                            </BodyCol>
                            <BodyCol style={{textAlign: 'left', paddingLeft: '0px'}}>
                                <StudentImage image={student.image}/>
                                <NameSpan>{student.name}</NameSpan>
                                <ClearBoth/>
                            </BodyCol>
                            <BodyCol>{student.email}</BodyCol>
                            <BodyCol>{student.program}</BodyCol>
                            <BodyCol>{student.course}</BodyCol>
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

const Faculty = props => (
    <React.Fragment>
        <TableContainer>
            <Table>
                <TableHead>
                    <Row>
                        <HeadCol style={{textAlign: 'center', width: '50px'}}><input type="checkbox"/></HeadCol>
                        <HeadCol style={{textAlign: 'left'}}>Name</HeadCol>
                        <HeadCol>Email</HeadCol>
                        <HeadCol>Phone No</HeadCol>
                        <HeadCol>Subjects</HeadCol>
                        <HeadCol>Action</HeadCol>
                    </Row>
                </TableHead>
                <TableBody>
                    {studentData.map((student, index) => (
                        <Row key={index}>
                            <BodyCol style={{textAlign: 'center', width: '50px'}}>
                                <input type="checkbox"/>
                            </BodyCol>
                            <BodyCol style={{textAlign: 'left', paddingLeft: '0px'}}>
                                <StudentImage image={student.image}/>
                                <NameSpan>{student.name}</NameSpan>
                                <ClearBoth/>
                            </BodyCol>
                            <BodyCol>{student.email}</BodyCol>
                            <BodyCol>{student.phone}</BodyCol>
                            <BodyCol>{student.semester}</BodyCol>
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
            <PaginateCount>1 - 50 of 1,000</PaginateCount>
            <PaginateBtn><i className="fas fa-caret-left"></i></PaginateBtn>
            <PaginateBtn><i className="fas fa-caret-right"></i></PaginateBtn>
        </PaginateWrap>
    </React.Fragment>
)

const Admin = props => (
    <React.Fragment>
        <TableContainer>
            <AdminHeader>Super Admin</AdminHeader>
            <AllAdminWrap>
                <EachAdmin>
                    <AdmimImage image={img2}/>
                    <AdminDetails>
                        <div>
                            <AdminName>Lillian Robinson</AdminName>
                            <AdminPosition>IT Administrator</AdminPosition>
                        </div>
                    </AdminDetails>
                    <ClearBoth/>
                </EachAdmin>
                <EachAdmin>
                    <AdmimImage image={img1}/>
                    <AdminDetails>
                        <div>
                            <AdminName>Lettie Wilson</AdminName>
                            <AdminPosition>Chairman</AdminPosition>
                        </div>
                    </AdminDetails>
                    <ClearBoth/>
                </EachAdmin>
                <ClearBoth/>
            </AllAdminWrap>
        </TableContainer>
        <TableContainer style={{marginTop: '30px'}}>
            <AdminHeader>Sub Admin</AdminHeader>
            <AllAdminWrap>
                {subAdmins.map((admin, index) => (
                    <EachAdmin key={index} margin={index+1}>
                        <AdmimImage image={admin.logo}/>
                        <AdminDetails>
                            <div>
                                <AdminName>{admin.name}</AdminName>
                                <AdminPosition>{admin.position}</AdminPosition>
                            </div>
                        </AdminDetails>
                        <ClearBoth/>
                    </EachAdmin>
                ))}
                <ClearBoth/>
            </AllAdminWrap>
        </TableContainer>
    </React.Fragment>
)

export class Members extends React.Component{

    tabBtn = ['', 'ADD STUDENTS', 'ADD FACULTY', 'ADD ADMIN']

    state = {
        activeTab: 1
    }

    getTab = () => {
        let tab;
        switch (this.state.activeTab) {
            case 1:
                tab = <Student/>
                break
            case 2:
                tab = <Faculty/>
                break
            default:
                tab = <Admin/>
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
                            <DashName>College Members</DashName>
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
                                    onClick={() => this.switchTab(1)}>Member 2</TabNav>

                            <TabNav active={this.state.activeTab === 2}
                                    onClick={() => this.switchTab(2)}>Faculty 2</TabNav>

                            <TabNav active={this.state.activeTab === 3}
                                    onClick={() => this.switchTab(3)}>Admins 28</TabNav>
                        </TabNavLeft>
                        <TabNavRight>
                            <RightInner>
                                <TabNavBtn>{this.tabBtn[this.state.activeTab]}</TabNavBtn>
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

const images = [
    img3, logo3, logo5, logo6, logo4
]

const subAdmins = Array.from(Array(4).keys()).map((value, index, array) => ({
    id: Math.floor(Math.random() * Math.floor(900)),
    name: 'Loretta Miles',
    position: 'Head Of Department',
    logo: images[index],
    onClick: () => {}
}))

const studentData = [
    {
        id: 'ASC23001',
        name: 'Miguel Houston',
        program: 'Management',
        course: 'Bsc Business Management',
        semester: '32',
        email: 'coy_oloson@gmail.com',
        phone: '274-894-2437',
        title: 'Super Admin',
        image: logo
    },
    {
        id: 'ASC23002',
        name: 'Terresa Lopez',
        program: 'Management',
        course: 'Bsc Business Management',
        semester: '33',
        email: 'von.kali@mail.com',
        phone: '229-348-5873',
        title: 'Principal',
        image: logo3
    }
]