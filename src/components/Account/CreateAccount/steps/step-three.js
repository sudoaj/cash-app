import React, {Fragment} from 'react'
import styled from 'styled-components'
import {Formik} from 'formik'
import * as Yup from 'yup'


const AbsoluteForm = styled.div`
    position: absolute;
    left: 20px;
    top: -30px;
    bottom: -30px;
`
const InnerForm = styled.div`
    position: relative;
    box-shadow: 0 5px 9px 2px rgba(0,0,0,0.26);
    background-color: #FFFFFF;
    height: 100%;
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
const FormDesc = styled.p`
    margin-bottom: 0px;
    color: #8492A6;
    font-size: 14px;
    font-weight: lighter;
`
const AllInputWrap = styled.div`
    padding-top: 60px;
`
const LoginBtnWrap = styled.div`
    padding-top: 0px;
    margin-top: 85px;
`
const LoginBtn = styled.button`
    background: linear-gradient(180deg, #38BAC1 0%, #48BE8B 100%);
    border-radius: 2px;
    height: 36px;
    width: 100%;
    color: ${({theme}) => theme.whiteOpacity.nine};
    font-size: 13px;
    border: none;
    outline: none;
    font-weight: 300;
    letter-spacing: 1px;
    cursor: pointer;
`
const UserNameWrap = styled.div`
    margin-bottom: 24px;
`
const UserNameHead = styled.p`
    color: #8492A6;
    font-size: 12px;
    margin-top: 0px;
    margin-bottom: 7px;
`
const UserName = styled.p`
    color: #777D86;
    font-size: 14px;
    margin: 0px;
`
const EachInputWrap = styled.div`
    margin-bottom: 20px;
`
const InputLabel = styled.label`
    font-size: 12px;
    color: #8492A6;
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

export class StepThree extends React.Component {
  render() {
    return (
      <Fragment>
        <AbsoluteForm>
          <InnerForm>
            <FormHeader>Need a few more details</FormHeader>
            <FormDesc>Please select an option below</FormDesc>
            <AllInputWrap>
              <Formik initialValues={{password: '', confirmPassword: ''}}
                      onSubmit={this.props.handleSubmit}
                      validationSchema={Yup.object().shape({
                        password: Yup.string().min(6).matches(/[a-zA-Z]+[^a-zA-Z\s]+/,
                          'at least 1 number or special char (@,!,#, etc).')
                          .required('this field is required'),
                        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null],
                          'passwords do not match').required('this field is required')
                      })}
                      render={({values, handleSubmit, handleChange, touched, errors, dirty}) => (
                        <Fragment>
                          <UserNameWrap>
                            <UserNameHead>Your Name</UserNameHead>
                            <UserName>Sharfaz Sharif</UserName>
                          </UserNameWrap>
                          <EachInputWrap>
                            <InputLabel>New Password</InputLabel>
                            <Input type="password" name="password"
                                   onChange={handleChange} value={values.password}
                                   inValid={(errors.password && touched.password)}
                                   valid={(!errors.password && dirty)}/>
                          </EachInputWrap>
                          <EachInputWrap>
                            <InputLabel>Re-Type Password</InputLabel>
                            <Input type="password" name="confirmPassword"
                                   onChange={handleChange} value={values.confirmPassword}
                                   inValid={(errors.confirmPassword && touched.confirmPassword)}
                                   valid={(!errors.confirmPassword && dirty)}/>
                          </EachInputWrap>
                          <LoginBtnWrap>
                            <LoginBtn type="submit"
                                      onClick={handleSubmit}>NEXT</LoginBtn>
                          </LoginBtnWrap>
                        </Fragment>
                      )}/>
            </AllInputWrap>
          </InnerForm>
        </AbsoluteForm>
      </Fragment>
    )
  }
}
