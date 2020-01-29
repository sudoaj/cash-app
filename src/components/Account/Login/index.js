import React, {Fragment} from 'react';
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {ClearBoth} from "../../Core/reusable-styles";

import logo from '../../../assets/fake-logo.png'

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
    height: 450px;
    width: 840px;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0 5px 9px 2px rgba(0,0,0,0.26);
    margin: auto;
    position: relative;
    margin-top: 20px;
`
const AbsoluteForm = styled.div`
    position: absolute;
    right: 20px;
    top: -30px;
    bottom: -30px;
`
const InnerForm = styled.form`
    position: relative;
    box-shadow: 0 5px 9px 2px rgba(0,0,0,0.26);
    background-color: #FFFFFF;
    height: 510px;
    width: 321px;
    padding: 35px;
    box-sizing: border-box;
`

const FormHeader = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    opacity: 0.6;
    font-size: 17px;
    margin: 0px;
    letter-spacing: 0.5px;
    font-weight: 500;
`
const AllInputWrap = styled.div`
    padding-top: 100px;
`
const EachInputWrap = styled.div`
    margin-bottom: 30px;
`
const InputLabel = styled.label`
    font-size: 12px;
    color: ${({theme}) => theme.colors.dark_blue};
    margin-bottom: 10px;
    display: block;
`
const Input = styled.input`
    width: 100%;
    border: ${props => props.inValid ? '1px solid rgba(256, 0, 0, 0.5)'
  : props.valid ? '1px solid #48C7E5' : '1px solid #CAD4DE'};
    border-radius: 2px;
    padding: 10px 13px;
    font-size: 14px;
    color: #8492A6;
    box-sizing: border-box;
    outline: none;
    font-weight: 300;
    letter-spacing: 1px;
`
const ForgetPasswordSpan = styled.span`
    cursor: pointer;
    font-size: 72px;
    background: -webkit-linear-gradient(180deg, #38BAC1 0%, #48BE8B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 12px;
    text-align: right;
    font-weight: 600;
    float: right;
`
const LoginBtnWrap = styled.div`
    padding-top: 48px;
`
const LoginBtn = styled.button`
    background: linear-gradient(180deg, #38BAC1 0%, #48BE8B 100%);
    border-radius: 2px;
    height: 36px;
    width: 100%;
    color: ${({theme}) => theme.colors.white};
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: 300;
    letter-spacing: 1px;
    cursor: pointer;
`


class LoginComponent extends React.Component {

  createAccount = () => {
    this.props.history.push('/register')
  }

  handleSubmit = () => {
    this.props.history.push('/feed')
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
                <CreateAccountBtn onClick={this.createAccount}>CREATE ACCOUNT</CreateAccountBtn>
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
                  <AbsoluteForm>
                    <InnerForm>
                      <FormHeader>Login</FormHeader>
                      <AllInputWrap>
                        <Formik initialValues={{mail: '', password: ''}}
                                onSubmit={this.handleSubmit}
                                validationSchema={Yup.object().shape({
                                  mail: Yup.string().required('this field is required'),
                                  password: Yup.string().min(6).matches(/[a-zA-Z]+[^a-zA-Z\s]+/,
                                    'at least 1 number or special char (@,!,#, etc).')
                                    .required('this field is required')
                                })}
                                render={({
                                           values,
                                           handleSubmit,
                                           handleChange,
                                           touched,
                                           errors,
                                           dirty
                                         }) => (
                          <Fragment>
                            <EachInputWrap>
                              <InputLabel>E-mail or Phone no</InputLabel>
                              <Input type="text" name="mail"
                                     onChange={handleChange} value={values.mail}
                                     inValid={(errors.mail && touched.mail)}
                                     valid={(!errors.mail && dirty)}/>
                            </EachInputWrap>
                            <EachInputWrap>
                              <InputLabel style={{float: 'left'}}>Password</InputLabel>
                              <ForgetPasswordSpan>Forgot Password?</ForgetPasswordSpan>
                              <ClearBoth/>
                              <Input type="password" name="password"
                                     onChange={handleChange} value={values.password}
                                     inValid={(errors.password && touched.password)}
                                     valid={(!errors.password && dirty)}/>
                            </EachInputWrap>
                            <LoginBtnWrap>
                              <LoginBtn type="submit"
                                        onClick={handleSubmit}>LOGIN</LoginBtn>
                            </LoginBtnWrap>
                          </Fragment>
                        )}/>
                      </AllInputWrap>
                    </InnerForm>
                  </AbsoluteForm>
                </FormContainer>
              </RelativeInner>
            </AbsoluteContainer>
          </LoginWrap>
        </LoginSection>
      </Fragment>
    )
  }
}

export default withRouter(LoginComponent)

