import React, {Fragment} from 'react'
import styled from 'styled-components'
import withRouter from 'react-router-dom/withRouter'

import {ClearBoth} from "../../Core/reusable-styles"

import logo from '../../../assets/fake-logo.png'
import {StepOne} from "./steps/step-one";
import {StepTwo} from "./steps/step-two";
import {StepThree} from "./steps/step-three";
import {StepFour} from "./steps/step-four";
import {StepFive} from "./steps/step-five";
import {StepSix} from "./steps/step-six";
import {StepSeven} from "./steps/step-seven";


const HeaderContainer = styled.div`
    width: 100%;
    padding-top: 40px;
`
const HeaderWrap = styled.div`
    width: 840px;
    margin: auto;
`
const LeftHeader = styled.div`
    float: left;
`
const LogoImg = styled.img``

const RightHeader = styled.div`
    float: right;
`
const CreateAccountWrap = styled.div`
    float: right;display: flex;
    align-items: center;
    height: 40px;
    
`
const CreateAccountBtn = styled.button`
    height: 37px;
    width: 134px;
    border-radius: 2px;
    background: linear-gradient(180deg, #38BAC1 0%, #48BE8B 100%);
    color: ${({theme}) => theme.whiteOpacity.nine};
    font-size: 12px; 
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 300;
    letter-spacing: 0.5px;
`
const NewUserWrap = styled.div`
    float: right;
    margin-right: 18px;
    display: flex;
    align-items: center;
    height: 40px;
`
const NewUserLink = styled.span`
    cursor: pointer;
    color: ${({theme}) => theme.colors.dark_blue};
    opacity: 0.5;
    font-size: 14px;
`

const LoginSection = styled.section`
    padding-top: 55px;
`

const LoginWrap = styled.div`
    width: 1000px;
    margin: auto;
    position: relative;
`
const OrangeBox = styled.div`
    float: left;
    background: linear-gradient(14.17deg, #F67177 0%, #F9AF5F 100%);
    height: 350px;
    width: 350px;
    opacity: 0.9;
    border-radius: 81px;
    transform: rotate(19deg);
`
const BlueBox = styled.div`
    margin-top: 160px;
    float: right;
    height: 350px;
    width: 350px;
    opacity: 0.9;
    border-radius: 81px;
    background: linear-gradient(8.91deg, #3EA6E8 0%, #4DD8E3 100%);
    transform: rotate(-19deg);
`
const AbsoluteContainer = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
`
const RelativeInner = styled.div`
    width: 100%;
`
const FormContainer = styled.div`
    height: 460px;
    width: 845px;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0 5px 9px 2px rgba(0,0,0,0.26);
    margin: auto;
    position: relative;
    margin-top: 20px;
`


class CreateAccount extends React.Component {
  state = {
    step: 1,
  }

  handleSubmit = values => {
    const {step} = this.state
    if (step === 7)
      this.props.history.push('/feed')
    else
      this.setState({step: step + 1})
  }

  getStep = () => {
    let registerStep
    const {step} = this.state
    switch (step) {
      case 1:
        registerStep = <StepOne handleSubmit={this.handleSubmit}/>
        break
      case 2:
        registerStep = <StepTwo handleSubmit={this.handleSubmit}/>
        break
      case 3:
        registerStep = <StepThree handleSubmit={this.handleSubmit}/>
        break
      case 4:
        registerStep = <StepFour handleSubmit={this.handleSubmit}/>
        break
      case 5:
        registerStep = <StepFive handleSubmit={this.handleSubmit}/>
        break
      case 6:
        registerStep = <StepSix handleSubmit={this.handleSubmit}/>
        break
      case 7:
        registerStep = <StepSeven handleSubmit={this.handleSubmit}/>
        break
      default:
        registerStep = <StepOne handleSubmit={this.handleSubmit}/>
        break
    }
    return registerStep
  }

  render() {
    return (
      <Fragment>
        <HeaderContainer>
          <HeaderWrap>
            <LeftHeader>
              <LogoImg src={logo}/>
            </LeftHeader>
            <RightHeader>
              <CreateAccountWrap>
                <CreateAccountBtn>CREATE ACCOUNT</CreateAccountBtn>
              </CreateAccountWrap>
              <NewUserWrap>
                <NewUserLink>New User?</NewUserLink>
              </NewUserWrap>
            </RightHeader>
            <ClearBoth/>
          </HeaderWrap>
        </HeaderContainer>
        <LoginSection>
          <LoginWrap>
            <OrangeBox/>
            <BlueBox/>
            <ClearBoth/>
            <AbsoluteContainer>
              <RelativeInner>
                <FormContainer>
                  {this.getStep()}
                </FormContainer>
              </RelativeInner>
            </AbsoluteContainer>
          </LoginWrap>
        </LoginSection>
      </Fragment>
    )
  }
}

export default withRouter(CreateAccount)

