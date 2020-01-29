import React from 'react';
import "../../../../../node_modules/video-react/dist/video-react.css"
import "../../../../static/main.css"
import styled from 'styled-components';

import { FeedLeft } from "./feed-left";
import { FeedRight } from "./feed-right";
import { FeedCenter } from "./feed-center";

import { ClearBoth } from "../../../Core/reusable-styles/index";

import logo from '../../../../assets/profile2.jpeg';
import logo1 from '../../../../assets/black-and.jpg';
import logo2 from '../../../../assets/profile3.jpeg';
import logo3 from '../../../../assets/pexels-photo-567630.jpeg';
import logo4 from '../../../../assets/mit-logo.jpg';
import logo5 from '../../../../assets/Stanford-Logo.png';
import logo6 from '../../../../assets/Harvard-Logo.png';
import logo8 from '../../../../assets/microsoft.png';
import logo9 from '../../../../assets/oracle.jpg';
import logo10 from '../../../../assets/Caterpillar.png';


const Container = styled.section`
    padding: 18px 0;
    margin: auto;
    width: 1141px;
`

class Feed extends React.Component {

    state = {
        peopleData: [],
        unisData: [],
        companyData: [],
        bookmarked: false,
        liked: false
    }

    followPeople = id => {
        const { peopleData } = this.state
        if (peopleData.includes(id)){
            let index = peopleData.indexOf(id);
            peopleData.splice(index, 1);
            this.setState({peopleData: peopleData})
        } else {
            peopleData.push(id)
            this.setState({peopleData: peopleData})
        }
    }

    followUni = id => {
        const { unisData } = this.state
        if (unisData.includes(id)){
            let index = unisData.indexOf(id);
            unisData.splice(index, 1);
            this.setState({unisData: unisData})
        } else {
            unisData.push(id)
            this.setState({unisData: unisData})
        }
    }

    followCompany = id => {
        const { companyData } = this.state
        if (companyData.includes(id)){
            let index = companyData.indexOf(id);
            companyData.splice(index, 1);
            this.setState({companyData: companyData})
        } else {
            companyData.push(id)
            this.setState({companyData: companyData})
        }
    }

    bookMark = () => {
        this.setState({bookmarked: !this.state.bookmarked})
    }

    like = () => {
        this.setState({liked: !this.state.liked})
    }

    render() {
        return(
            <Container>
                <FeedLeft/>
                <FeedCenter bookMark={this.bookMark} state={this.state} like={this.like}/>
                <FeedRight peoplesData={peoplesData} followPeople={this.followPeople} state={this.state}
                           uniData={uniData} followUni={this.followUni}
                           companiesData={companiesData} followCompany={this.followCompany}
                />
                <ClearBoth/>
            </Container>
        )
    }
}

const peoplesData = [
    {
        id: 1,
        name: 'Nathaniel Knight',
        locale: 'IT-Roukela',
        image: logo,
        following: false
    },
    {
        id: 2,
        name: 'Moble Valdez',
        locale: 'IT-Roukela',
        image: logo1,
        following: false
    },
    {
        id: 3,
        name: 'Ella Pena',
        locale: 'IT-Roukela',
        image: logo2,
        following: false
    },
    {
        id: 4,
        name: 'Jim Bradley',
        locale: 'IT-Roukela',
        image: logo3,
        following: false
    }
]

const uniData = [
    {
        id: 1,
        name: 'MIT University',
        locale: 'Roukela',
        image: logo4,
        following: false
    },
    {
        id: 2,
        name: 'SRM University',
        locale: 'Chennai',
        image: logo5,
        following: false
    },
    {
        id: 3,
        name: 'NIT University',
        locale: 'Warangal',
        image: logo6,
        following: false
    },
    {
        id: 4,
        name: 'Gujarat University',
        locale: 'Ahmedabad',
        image: logo4,
        following: false
    }
]

const companiesData = [
    {
        id: 1,
        name: 'Microsoft',
        locale: 'Computer Software',
        image: logo8,
        following: false
    },
    {
        id: 2,
        name: 'Oracle',
        locale: 'Information Technology',
        image: logo9,
        following: false
    },
    {
        id: 3,
        name: 'Caterpillar Inc',
        locale: 'Machinery',
        image: logo10,
        following: false
    },
    {
        id: 4,
        name: 'Honey Wall',
        locale: 'IT',
        image: logo8,
        following: false
    }
]

export { Feed }
