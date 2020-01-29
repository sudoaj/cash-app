import React from 'react';
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter'

import { Wrapper } from "../Core/reusable-styles";

import { Feed } from "./tab-content/Feed/index";
import {Chats, Calendar, Study, Work, Projects} from "./tab-content";

const FeedWrapper = Wrapper.extend``
const NavWrap = styled.div`
    height: 40px;
`

const TabNavContainer = styled.div`
    height: 40px;
    // background: linear-gradient(135.82deg, #FEAC5E 0%, #C779D0 52.28%, #4BC0C8 100%);
    background: linear-gradient(0.07deg, #9C89F2 0%, #69C3F6 100%);
    width: 100%;
    left: 0;
    top: ${props => props.count > 0 && props.stats === 'scroll stop' ? '60px' : '0'};
    position: ${props => props.count > 0 && props.stats === 'scroll stop' ? 'fixed' : 'relative'};
    right: 0;
    z-index: ${props => props.count > 0 && props.stats === 'scroll stop' ? '500' : 'unset'};
    @media screen and (min-width: 1600px) {
        width: 1370px; 
        margin: auto;
    }
`

const TabNavWrap = styled.ul`
    width: 50%;
    justify-content: space-between;
    display: flex;
    margin: auto;
    padding: 0px;
    @media (max-width: 768px) {
        width: 90%;
    }
`
const TabList = styled.li`
    list-style-type: none;
    display: inline;
    color: #fff;
    font-size: 12px;
    font-weight: 100;
    border-bottom-width: 3px;
    border-bottom-style: solid;
    border-bottom-color: ${props => props.active ? '#fff' : 'transparent'};
    padding: 12px 10px 12px 10px;
    transition: 0.3s;
    cursor: pointer; 
    letter-spacing: 1px;
    position: relative;
`
const TabContainer = styled.div``

const ProfileDropdown = styled.ul`
    position: absolute;
    top: 60px;
    right: -10px;
    z-index: 1000;
    float: left;
    padding: 5px 0;
    min-width: 278px;
    list-style-type: none;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 2px 16px 22px 7px rgba(83,83,83,0.2);
    background-clip: padding-box;
    transition: 0.3s;
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
    padding: 10px 0px 10px 15px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    color: rgba(0,51,102,0.6);
    transition: 0.3s;
    &:hover{
        background-color: rgba(0, 51, 102, 0.1);
    }
`

let lastScrollY = 0;
let ticking = false;
let isScrolling = null;

class HomePageComponent extends React.Component {

    state = {
        activeTab: 1,
        onlineCourse: false,
        scrollCount: 0,
        scrollStatus: ''
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        window.addEventListener('scroll', (event) => {
            window.clearTimeout(isScrolling)
            isScrolling = setTimeout(() => {
                this.setState({scrollStatus: 'scroll stop'})
            }, 1000)
            this.setState({scrollStatus: ''})
        });

        document.addEventListener('click', (e) => {
            if ([].slice.call(document.querySelectorAll('online-popover')).indexOf(e.target) === -1) {
                this.setState({onlineCourse: false})
                return
            }
        }, true)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                ticking = false;
            });

            ticking = true;
        }
        this.setState({scrollCount: lastScrollY})
    }

    getTab = () => {
        let tab;
        switch (this.state.activeTab) {
            case 1:
                tab = <Feed style={{transition: '0.3s'}} />
                break;
            case 2:
                tab = <Chats style={{transition: '0.3s'}}/>
                break
            case 3:
                tab = <Calendar style={{transition: '0.3s'}}/>
                break
            case 4:
                tab = <Study style={{transition: '0.3s'}}/>
                break
            case 5:
                tab = <Work style={{transition: '0.3s'}}/>
                break
            default:
                tab = <Projects style={{transition: '0.3s'}}/>
                break
        }
        return tab;
    }

    changeTab = index => {
        this.setState({activeTab: index})
    }

    onlineCourseDrop = (e) => {
        e.stopPropagation();
        const {onlineCourse} = this.state
        this.setState({onlineCourse: !onlineCourse})
    }


    render() {
        return(
            <FeedWrapper>
                <NavWrap>
                    <TabNavContainer count={this.state.scrollCount} stats={this.state.scrollStatus}
                    className={this.state.scrollStatus === 'scroll stop' && this.state.scrollCount !== 0
                        ? 'slideInDown animated' : ''}>
                        <TabNavWrap>
                            <TabList active={this.state.activeTab === 1}
                                     onClick={() => this.changeTab(1)}>Feeds</TabList>
                            <TabList active={this.state.activeTab === 2}
                                     onClick={() => this.changeTab(2)}>Chats</TabList>

                            <TabList active={this.state.activeTab === 3}
                                     onClick={() => this.changeTab(3)}>Calendar</TabList>
                            <TabList active={this.state.activeTab === 4}
                                     onClick={() => this.changeTab(4)}>My Subjects</TabList>
                            <TabList active={this.state.activeTab === 5}
                                     className="online-popover"
                                     onClick={this.onlineCourseDrop}>
                                Online Courses
                                <ProfileDropdown
                                    style={{display: this.state.onlineCourse ? 'block' : 'none'}}>
                                    <DropdownList onClick={() => this.changeTab(5)}>Learn UX Design</DropdownList>
                                    <DropdownList>Android Development</DropdownList>
                                    <DropdownList>Design and History</DropdownList>
                                    <DropdownList>Financial and Technology</DropdownList>
                                    <DropdownList>Digital Marketing</DropdownList>
                                </ProfileDropdown>
                            </TabList>
                            <TabList active={this.state.activeTab === 6}
                                     onClick={() => this.changeTab(6)}>Projects</TabList>
                        </TabNavWrap>
                    </TabNavContainer>
                </NavWrap>
                <TabContainer>
                    {this.getTab()}
                </TabContainer>
            </FeedWrapper>
        )
    }
}

export default withRouter(HomePageComponent)
