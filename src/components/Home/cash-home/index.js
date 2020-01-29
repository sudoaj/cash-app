import React from 'react';
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter';
import {Link} from 'react-router-dom'
import {Dashboard} from './menu-content/index'
import { Activity } from "./menu-content/activity";
import { Balance } from "./menu-content/balance";
import { Settings } from "./menu-content/settings";



import { Wrapper, ClearBoth } from '../../Core/reusable-styles/index';
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
const DashboardContainer = styled.section`
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
`
const DashboardLeft = styled.section`
    float: left;
    width: 20%;
    background-color:#25449E
    
    padding: 2%;
    position: fixed;
    height: 100%;
    box-sizing: border-box;
    @media screen and (min-width: 1600px) {
        width: 300px;
    }
`
const CustomerProfileImageContainer = styled.div `
    color:white;
    margin-bottom:10px
    margin-top:10px
    padding:0px 0px 100px

`
const CustomerProfileImage = styled.img `
        height:100%
        width:100%
        margin:auto;
        border-radius: 100%
        @media screen and (min-width: 1600px) {


        }
`
const CustomerName = styled.h3 `
    text-align: center;
`
const CustomerNameTag = styled.h5 `
    text-align: center;
    color: grey;
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

    margin:auto;


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

const AddNewButton = styled.button `
    margin:auto;
    margin-top:20px
    background-color: white;
    border: none;
    color: #25449E;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
`
class CollegeDashboardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 2
        }
    }


    componentDidMount() {
        this.setState({modalActive: true});
    }

    getTab = () => {
        let tab;
        switch (this.state.activeTab) {
            case 1:
               tab =  <Activity/>
               break         
            case 2:
                tab = <Balance/>
                break
            case 3:
                tab = <Settings/>
                break
            default:
                tab = <Dashboard/>
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
                <DashboardContainer>
                    <DashboardHead>
                        <FixedHeader>
                            <HeaderInner>
                                <HeaderLeft>
                                    <Link to="/create-course" >
                                        <img src={require('../../../assets/cash.png')} alt="Logo" />
                                    </Link>
                                </HeaderLeft>
                                <HeaderCenter>
                                    <SearchInput placeholder="Search  Transactions" type="text"/>
                                </HeaderCenter>
                                <ClearBoth/>
                            </HeaderInner>
                        </FixedHeader>
                    </DashboardHead>
                    <DashboardLeft>
                        <CustomerProfileImageContainer>
                            <CustomerProfileImage src={require("../../../assets/black-and.jpg")}></CustomerProfileImage>
                            <CustomerName>Ajayi Abdulsalam</CustomerName>
                            <CustomerNameTag>$Ajayi</CustomerNameTag>

                        </CustomerProfileImageContainer>
                        <DashListContainer style={{marginTop: '0px'}}>
                            <ListWrap>
                                <List active={this.state.activeTab === 1}
                                      onClick={() => this.changeTab(1)}>
                                    <i className="fa fa-user-friends fa-lg" style={iconMargin}></i>
                                    <ListSpan>Activity</ListSpan>
                                </List>
                                <List active={this.state.activeTab === 2}
                                      onClick={() => this.changeTab(2)}>
                                    <i className="fa fa-dollar-sign fa-lg" style={iconMargin}></i>
                                    <ListSpan>Balance</ListSpan>
                                </List>
                                <List active={this.state.activeTab === 3}
                                      onClick={() => this.changeTab(3)}>
                                    <i className="fa fa-cog fa-lg" style={iconMargin}></i>
                                    <ListSpan>Settings</ListSpan>
                                </List>
                                <List active={this.state.activeTab === 4}
                                      onClick={() => this.changeTab(4)}>
                                    <i className="fa fa-sign-out-alt fa-lg" style={iconMargin}></i>
                                    <ListSpan>Sign out</ListSpan>
                                </List>
                            </ListWrap>
                           <AddNewButton>New Transaction</AddNewButton>

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
