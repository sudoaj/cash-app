import React, {Fragment} from 'react'
import styled from 'styled-components'
import withRouter from 'react-router-dom/withRouter'
import {Link} from 'react-router-dom'
import {ClearBoth} from "../Core/reusable-styles";

import LogoImage from '../../assets/university-logo-small.png'

const Wrapper = styled.div``
const HeaderContainer = styled.div`
    width: 100%;
    padding-top: 40px;
`
const HeaderWrap = styled.div`
    width: 1152px;
    margin: auto;
`
const LeftHeader = styled.div`
    float: left;
`

const Logo = styled.img`
    float: left;
`
const LinksWrap = styled.div`
    float: left;
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 100px;
`
const HeaderLinks = styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.colors.dark_blue};
    opacity: 0.5;
    font-size: 14px;
    margin-right: 25px;
`
const RightHeader = styled.div`
    float: right;
    text-align: right;
    height: 40px;
    display: flex;
    align-items: center;
    width: auto;
`

const loginLinkStyle = {
    color: '#18BAEB',
    fontSize: '14px',
    fontWeight: '500',
    textDecoration: 'none',
    float: 'right',
    marginRight: '30px'
}

const GetStarted = styled.button`
    border-radius: 6.48px;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0 5px 16px 0 rgba(7,42,68,0.1);
    width: 145.8px;
    height: 100%;
    color: #18BAEB;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.88px;
    float: right;
    border: none;
    cursor: pointer;
    outline: none;
`

class LandingPage extends React.Component {

    getStarted = () => {
        this.props.history.push('/register')
    }

    render() {
        return(
            <Fragment>
                <Wrapper>
                    <HeaderContainer>
                        <HeaderWrap>
                            <LeftHeader>
                                <Logo src={LogoImage}/>
                                <LinksWrap>
                                    <HeaderLinks href="*">For Students</HeaderLinks>
                                    <HeaderLinks href="*">For College</HeaderLinks>
                                    <HeaderLinks href="*">For Business</HeaderLinks>
                                </LinksWrap>
                                <ClearBoth/>
                            </LeftHeader>
                            <RightHeader>
                                
                                <Link to="/login" style={loginLinkStyle}>Login</Link>
                                <GetStarted onClick={this.getStarted}>GET STARTED</GetStarted>
                                {/*<ClearBoth/>*/}
                            </RightHeader>
                            <ClearBoth/>
                        </HeaderWrap>
                    </HeaderContainer>
                </Wrapper>
            </Fragment>
        )
    }
}

export default withRouter(LandingPage)
