import React, {Fragment} from 'react'
import styled from 'styled-components'
import ReactCodeInput from 'react-code-input'
import {Link} from 'react-router-dom'
import {Formik} from 'formik'
import * as Yup from 'yup'

import {ClearBoth} from "../../../Core/reusable-styles"


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
const AllInputWrap = styled.div`
    padding-top: 25px;
`
const EachInputWrap = styled.div`
    margin-bottom: 25px;
`
const InputLabel = styled.label`
    font-size: 12px;
    color: ${({theme}) => theme.colors.dark_blue};
    margin-bottom: 10px;
    display: block;
`
const Input = styled.input`
    width: 100%;
    border: 1px solid #CAD4DE;
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
    background: -webkit-linear-gradient(180deg, #38BAC1 0%, #48BE8B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 12px;
    text-align: right;
    font-weight: 600;
    float: right;
    letter-spacing: 0.5;
`
const LoginBtnWrap = styled.div`
    padding-top: 0px;
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
const NumberTxt = styled.p`
    margin: 0px;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
    margin-top: 0px;
    letter-spacing: 1px;
    font-weight: 300;
`
const OTPInput = styled(ReactCodeInput)`
    margin-left: -5px;
`


const PrivacyTxt = styled.p`
    color: #4A4A4A;
    font-size: 11px;
    font-weight: 600;
    margin: 0px;
    margin-top: 20px;
    line-height: 14px;
`
const termsLink = {
    color: '#65caec',
}

const inputStyleReactCode = {
    outline: 'none',
    borderRadius: '2px',
    // border: `${props => props.inValid ? '1px solid red' : '1px solid blue'}`,
    margin: '5px',
    width: '40px',
    height: '40px',
    fontSize: '14px',
    boxSizing: 'border-box',
    color: '#8492A6',
    backgroundColor: 'white',
    textAlign: 'center',
    fontWeight: '300'
}

export class StepOne extends React.Component {

    render() {
        return(
            <Fragment>
                <AbsoluteForm>
                    <InnerForm>
                        <FormHeader>Signing Up...</FormHeader>
                        <AllInputWrap>
                            <Formik initialValues={{ aadhar: '', otp: ''}}
                                    onSubmit={this.props.handleSubmit}
                                    validationSchema={Yup.object().shape({
                                        aadhar: Yup.string().required('this field is required'),
                                        otp: Yup.string().min(5).required('this field is required')
                                    })}
                                    render={({values,
                                        handleSubmit,
                                        handleChange,
                                        errors,
                                        setFieldValue,
                                        touched, dirty}) => (
                                        <Fragment>
                                            <EachInputWrap>
                                                <InputLabel>Enter your aadhaar number</InputLabel>
                                                <Input type="number" name="aadhar"
                                                       onChange={handleChange} value={values.aadhar}
                                                       inValid={(errors.aadhar && touched.aadhar)}
                                                       valid={(!errors.aadhar && dirty)}/>
                                            </EachInputWrap>
                                            <EachInputWrap>
                                                <InputLabel style={{float: 'left'}}>Your Phone No</InputLabel>
                                                <ForgetPasswordSpan>Send OTP</ForgetPasswordSpan>
                                                <ClearBoth/>
                                                <NumberTxt>+91 9740389555</NumberTxt>
                                            </EachInputWrap>
                                            <EachInputWrap>
                                                <InputLabel style={{float: 'left'}}>Your Email</InputLabel>
                                                <ForgetPasswordSpan>Send OTP</ForgetPasswordSpan>
                                                <ClearBoth/>
                                                <NumberTxt>shawaz@codigoworld.com</NumberTxt>
                                            </EachInputWrap>
                                            <EachInputWrap>
                                                <InputLabel style={{marginBottom: '5px'}}>Enter OTP</InputLabel>
                                                <OTPInput inputStyle={{...inputStyleReactCode,
                                                        border: (errors.otp && touched.otp)
                                                        ? '1px solid rgba(256, 0, 0, 0.5)'
                                                        : (!errors.otp && dirty) ? '1px solid #48C7E5'
                                                            : '1px solid #CAD4DE' }}
                                                        name="code"
                                                        fields={5} value={values.otp}
                                                        onChange={code => setFieldValue('otp', code)}/>
                                            </EachInputWrap>
                                            <LoginBtnWrap>
                                                <LoginBtn type="submit"
                                                          onClick={handleSubmit}>CREATE ACCOUNT</LoginBtn>
                                            </LoginBtnWrap>
                                            <PrivacyTxt>
                                                <span>By signing up your agree to our</span>&nbsp;
                                                <Link to="*" style={termsLink}>Privacy Policy</Link>&nbsp;
                                                <span>and</span>&nbsp;
                                                <Link to="*" style={termsLink}>Terms of use</Link>.
                                            </PrivacyTxt>
                                        </Fragment>
                                    )}/>
                        </AllInputWrap>
                    </InnerForm>
                </AbsoluteForm>
            </Fragment>
        )
    }
}
