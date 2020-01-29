import React, { Component } from 'react'
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter'
import LandingPage from '../../../components/Landing'

const Wrapper = styled.section``

class HomeView extends Component {

    render() {
        return(
            <Wrapper>
                <LandingPage/>
            </Wrapper>
        )
    }
}

export default withRouter(HomeView);