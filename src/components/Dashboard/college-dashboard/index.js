import React from 'react';
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter';
import {Link} from 'react-router-dom'

import { Dashboard, Events, Articles, Billing, Settings } from './tab-content/index'
import { Members } from "./tab-content/members";
import { Subjects } from "./tab-content/subjects";
import { OnlineCourses } from "./tab-content/online-courses";

import { Wrapper, ClearBoth, InputContainer, CustomInput,
    CustomLabel, FullInput, BlueButton } from '../../Core/reusable-styles/index';


import logo1 from '../../../assets/black-and.jpg';


const DashboardHead = styled.header`
    height: 60px;
`
const FixedHeader = styled.div`
    background-color: rgb(255, 255, 255);
    height: 62px;
    width: 100%;
    left: 0;
    top: 0;
    position: fixed;
    right: 0;
    z-index: 1000;
    @media screen and (min-width: 1600px) {
        width: 1370px; 
        margin: auto;
    }
`
const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 30px;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
`
const HeaderLeft = styled.div`
    float: left;
    width: 20%
`

const HeaderCenter = styled.form`
    float: left;
    width: 50%;
`
const SearchInput = styled.input`
    opacity: 0.47;
    color: #4A4A4A;
    font-size: 14px;
    height: 30px;
    width: 100%;
    border-radius: 15px;
    background-color: transparent;
    outline: none;
    border: none;
    box-sizing: border-box;
    padding: 0 16px;
    margin: auto;
    display: block;
    &::placeholder {
        color: #949494;
        font-size: 13px;
    }
`
const HeaderRight = styled.div`
    float: right;
    width: 30%;
`
const AccountDiv = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${logo1});
    float: right;
    cursor: pointer;
    position: relative;
`
const AccountDivInner = styled.div`
    width: 100%;
    height: 100%;
`
const NotificationBtn = styled.div`
    height: 35px;
    width: 35px;
    border-radius: 100%;
    cursor: pointer;
    color: rgb(169, 172, 180);
    text-align: center;
    float: right;
    display: table;
    margin-right: 20px;
    position: relative;
    line-height: 33px;
`
const ExitBtnWrap = styled.div`
    width: 177px;
    height: 40px;
    text-align: right;
    float: right;
    display: flex;
    align-items: center;
    // margin-right: 20px;
    // position: relative;
`
const NotificatioCount = styled.span`
    position: absolute;
    height: 6px;
    width: 6px;
    background-color: ${({theme}) => theme.colors.blue};
    right: 4px;
    top: 0;
    border-radius: 100%;
`
const exitLink = {
    border: '1px solid #E9E7E7',
    backgroundColor: '#F2F2F2',
    color: '#1F87E0',
    fontSize: '12px',
    width: '150px',
    height: '35px',
    display: 'grid',
    textAlign: 'center',
    textDecoration: 'none',
    letterSpacing: '1px',
    alignItems: 'center'
}
const ProfileDropdown = styled.ul`
    position: absolute;
    top: 100%;
    right: -15px;
    z-index: 1000;
    float: left;
    padding: 5px 0;
    min-width: 170px;
    list-style-type: none;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    border: 1.5px solid #F2F2F2;
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    background-clip: padding-box;
    &:before {
        content: " ";
        position: absolute;
        display: block;
        top: -7px;
        border: 8px solid #fff;
        transform: translateX(-50%) rotate(135deg);
        box-shadow: -2px 2px 3px rgba(57,73,76,0.1);
        left: auto;
        right: 15px;
    }
`
const DropdownList = styled.li`
    list-style-type: none;
    padding: 0px 15px;
`
const dropdownLink = {
    display: 'block',
    padding: '10px 0px 10px 0px',
    clear: 'both',
    fontSize: '13px',
    lineHeight: '1.42857143',
    color: '#6D6C6E',
    textDecoration: 'none',
    fontWeight: 'lighter',
    textAlign: 'left',
    borderBottom: '1.5px solid #F2F2F2'
}
const lastOption = {
    display: 'block',
    padding: '10px 0px 10px 0px',
    clear: 'both',
    fontSize: '13px',
    lineHeight: '1.42857143',
    color: '#6D6C6E',
    textDecoration: 'none',
    fontWeight: 'lighter',
    textAlign: 'left',
    borderBottom: 'none'
}

const IconImage = styled.img`
    vertical-align: middle;
`


const DashboardContainer = styled.section`
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
`
const DashboardLeft = styled.section`
    float: left;
    width: 20%;
    background: linear-gradient(135.82deg, #FEAC5E 0%, #C779D0 52.28%, #4BC0C8 100%);
    padding: 2%;
    position: fixed;
    height: 100%;
    box-sizing: border-box;
    @media screen and (min-width: 1600px) {
        width: 300px;
    }
`
const DashboardRight = styled.section`
    float: left;
    width: 80%;
    margin-left: 20%;
    @media screen and (min-width: 1600px) {
        margin-left: 300px;
        width: 1069px;
    }
`

const DashListContainer = styled.div`
    margin-top: 90px;
`

const ListWrap = styled.ul`
    margin: 0px;
    padding-left: 10%;
`
const List = styled.li`
    list-style-type: none;
    color: #FFFFFF;
    opacity: ${props => props.active ? '1' : '0.5'};
    transition: 0.3s;
    font-size: 14px;
    margin-top: 40px;
    cursor: pointer;
    // font-family: Muli;
    letter-spacing: 1px;
    font-weight: lighter;
    &:hover {
        opacity: 1;
    }
    @media (max-width: 768px) {
        text-align: center;
    } 
`
const iconMargin = {
    display: 'inline-block',
    width: '40px'
}
const ListSpan = styled.span`
    @media (max-width: 768px) {
        display: none;
    }   
`

const DashBody = styled.div`
    min-height: ${props => props.height};
    background: #f2f2f2;
    padding: 2%;
    box-sizing: border-box;
`

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: ${props => props.active ? 'block' : 'none'};
    -webkit-overflow-scrolling: touch;
    transition: opacity .15s linear;
    background: rgb(0,0,0, 0.2);
    @media screen and (min-width: 1600px) {
        width: 1370px;
        margin: auto;
    }
`

const ModalInner = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    padding: 5% 0;
`
const ModalFormDiv = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
    width: 30%;
    margin: auto;
    padding: 5%;
    border-radius: 5px;
    @media (max-width: 768px) {
        width: 70%;
    }  
`
const UploadImageWrap = styled.div``
const UploadLabel = styled.label`
    display: block;
    margin: auto;
    height: 125px;
    width: 125px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 100%;
    text-align: center;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    display: flex;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`

const InputExtend = CustomInput.extend`
    background-color: #F4F6F8;
`
const CancelModalBtn = styled.button`
    color: #777D86;
    font-size: 13px;
    letter-spacing: 0.74px;
    border: none;
    box-shadow: none;
    text-align: left;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
    margin-top: 10px;
`
const ViewDashboard = BlueButton.extend`
    text-align: right;
    padding: 13px 20px;
    float: right;
`


class CollegeDashboardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 2,
            modalActive: false
        }
    }


    componentDidMount() {
        this.setState({modalActive: true});
    }

    getTab = () => {
        let tab;
        switch (this.state.activeTab) {
            case 1:
               tab = <Dashboard/>
               break
            case 2:
                tab = <Members/>
                break
            case 3:
                tab = <Subjects/>
                break
            case 4:
                tab = <OnlineCourses/>
                break
            case 5:
                tab = <Events/>
                break
            case 6:
                tab = <Articles/>
                break
            case 7:
                tab = <Billing/>
                break
            default:
                tab = <Settings/>
                break
        }
        return tab;
    }

    changeTab = index => {
        this.setState({activeTab: index});
    }

    cancelModal = (e) => {
        e.preventDefault()
        this.setState({modalActive: false})
    }

    render() {
        return (
            <Wrapper>
                <ModalContainer active={this.state.modalActive}>
                    <ModalInner>
                        <ModalFormDiv>
                            <form>
                                <UploadImageWrap>
                                    <input type="file" id="collegePhoto" style={{display: 'none'}}/>
                                    <UploadLabel htmlFor="collegePhoto"
                                    style={{backgroundImage: `url(${logo1})`}}></UploadLabel>
                                </UploadImageWrap>
                                <InputContainer>
                                    <FullInput>
                                        <CustomLabel>College Name&nbsp;<span
                                            style={{color: '#FF5E72'}}>*</span></CustomLabel>
                                        <InputExtend type="text"/>
                                    </FullInput>
                                    <FullInput>
                                        <CustomLabel>Description&nbsp;<span
                                            style={{color: '#FF5E72'}}>*</span></CustomLabel>
                                        <InputExtend type="text"/>
                                    </FullInput>
                                    <FullInput>
                                        <CustomLabel>Location&nbsp;<span
                                            style={{color: '#FF5E72'}}>*</span></CustomLabel>
                                        <InputExtend type="text"/>
                                    </FullInput>
                                </InputContainer>
                                <InputContainer style={{marginTop: '10%'}}>
                                    <CancelModalBtn onClick={this.cancelModal}>Cancel</CancelModalBtn>
                                    <ViewDashboard type="submit"
                                                   onClick={this.cancelModal}>View Dashboard</ViewDashboard>
                                    <ClearBoth/>
                                </InputContainer>
                            </form>
                        </ModalFormDiv>
                    </ModalInner>
                </ModalContainer>
                <DashboardContainer>
                    <DashboardHead>
                        <FixedHeader>
                            <HeaderInner>
                                <HeaderLeft>
                                    <Link to="/create-course" >
                                        <img src={require('../../../assets/university-logo-small.png')} alt="Logo" />
                                    </Link>
                                </HeaderLeft>
                                <HeaderCenter>
                                    <SearchInput placeholder="Search Control Panel" type="text"/>
                                </HeaderCenter>
                                <HeaderRight>
                                    <AccountDiv>
                                        <AccountDivInner
                                            onClick={() => this.handleDropDown("profile", this.state.profileEnable)}/>
                                        <ProfileDropdown
                                            style={{display: this.state.profileEnable ? 'block' : 'none'}}>
                                            <DropdownList>
                                                <Link to="/" style={dropdownLink} bottom="true">Credits</Link>
                                            </DropdownList>
                                            <DropdownList>
                                                <Link to="/" style={dropdownLink}>View Profile</Link>
                                            </DropdownList>
                                            <DropdownList>
                                                <Link to="/" style={dropdownLink}>Settings</Link>
                                            </DropdownList>
                                            <DropdownList>
                                                <Link to="/" style={dropdownLink}>Help Center</Link>
                                            </DropdownList>
                                            <DropdownList>
                                                <Link to="/" style={lastOption}>Logout</Link>
                                            </DropdownList>
                                        </ProfileDropdown>
                                    </AccountDiv>
                                    <NotificationBtn>
                                        <IconImage src={require('../../../assets/CombinedShape.png')} alt="Logo"/>
                                        <NotificatioCount/>
                                    </NotificationBtn>
                                    <NotificationBtn>
                                        <IconImage src={require('../../../assets/upload.png')} alt="Logo"/>
                                    </NotificationBtn>
                                    <ExitBtnWrap>
                                        <Link style={exitLink} to="/">Exit</Link>
                                    </ExitBtnWrap>
                                    <ClearBoth/>
                                </HeaderRight>
                                <ClearBoth/>
                            </HeaderInner>
                        </FixedHeader>
                    </DashboardHead>
                    <DashboardLeft>
                        <DashListContainer style={{marginTop: '0px'}}>
                            <ListWrap>
                                <List active={this.state.activeTab === 1}
                                      onClick={() => this.changeTab(1)}>
                                    <i className="fa fa-bars fa-lg" style={iconMargin}></i>
                                    <ListSpan>Dashboard</ListSpan>
                                </List>
                                <List active={this.state.activeTab === 2}
                                      onClick={() => this.changeTab(2)}>
                                    <i className="fa fa-user-friends fa-lg" style={iconMargin}></i>
                                    <ListSpan>Members</ListSpan>
                                </List>
                                <List active={this.state.activeTab === 3}
                                      onClick={() => this.changeTab(3)}>
                                    <i className="fa fa-book fa-lg" style={iconMargin}></i>
                                    <ListSpan>Subjects</ListSpan>
                                </List>
                                <List active={this.state.activeTab === 4}
                                      onClick={() => this.changeTab(4)}>
                                    <i className="fa fa-laptop fa-lg" style={iconMargin}></i>
                                    <ListSpan>Online Course</ListSpan>
                                </List>
                                <List active={this.state.activeTab === 5}
                                      onClick={() => this.changeTab(5)}>
                                    <i className="far fa-calendar-alt fa-lg" style={iconMargin}></i>
                                    <ListSpan>Events</ListSpan>
                                </List>
                                <List active={this.state.activeTab === 6}
                                      onClick={() => this.changeTab(6)}>
                                    <i className="fa fa-pen fa-lg" style={iconMargin}></i>
                                    <ListSpan>Articles</ListSpan>
                                </List>
                                <List active={this.state.activeTab === 7}
                                      onClick={() => this.changeTab(7)}>
                                    <i className="fa fa-dollar-sign fa-lg" style={iconMargin}></i>
                                    <ListSpan>Billing</ListSpan>
                                </List>
                                <List active={this.state.activeTab === 8}
                                      onClick={() => this.changeTab(8)}>
                                    <i className="fa fa-cog fa-lg" style={iconMargin}></i>
                                    <ListSpan>Settings</ListSpan>
                                </List>
                            </ListWrap>
                        </DashListContainer>
                    </DashboardLeft>
                    <DashboardRight>
                        <DashBody height={window.innerHeight - 76 + 'px'}>
                            {this.getTab()}
                        </DashBody>
                    </DashboardRight>
                    <ClearBoth/>
                </DashboardContainer>
            </Wrapper>
        )
    }
    
}

export default withRouter(CollegeDashboardComponent);
