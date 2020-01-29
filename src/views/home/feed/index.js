import React, { Component } from 'react'
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter'

import HeaderComponent from '../../../components/Core/Header';
import HomePageComponent from '../../../components/Newsfeed'


const Wrapper = styled.section``

class HomeView extends Component {

    render() {
        return(
            <React.Fragment>
                <HeaderComponent/>
                <Wrapper>
                    <HomePageComponent/>
                </Wrapper>
            </React.Fragment>
        )
    }
}

export default withRouter(HomeView);