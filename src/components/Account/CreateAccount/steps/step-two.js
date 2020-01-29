import React, {Fragment} from 'react'
import styled from 'styled-components'
import {Formik} from 'formik'
// import * as Yup from 'yup'



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
    padding-top: 50px;
`
const LoginBtnWrap = styled.div`
    padding-top: 0px;
    margin-top: 30px;
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
const AllInputHead = styled.p`
    margin-top: 0px;
    color: #777D86;
    font-size: 14px;
`
const ProfileTypeWrap = styled.div`
    border: 1px solid #CAD4DE;
    border-radius: 2px;
`
const ProfileTypes = styled.label`
    display: block;
    padding: 10px 17px;
    border-bottom: ${props => props.last ? 'none' : '1px solid #CAD4DE'};
    cursor: pointer;
`
const RadioBtn = styled.input`
    display: none;
`
const ProfileTypeTxt = styled.p`
    color: #777D86;
    font-size: 14px;
    margin: 0px;
    font-weight: 500;
`

export class StepTwo extends React.Component {
    render() {
        return(
            <Fragment>
                <AbsoluteForm>
                    <InnerForm>
                        <FormHeader>Need a few more details</FormHeader>
                        <FormDesc>Please select an option below</FormDesc>
                        <AllInputWrap>
                            <AllInputHead>Select your profile type</AllInputHead>
                            <Formik
                                initialValues={{
                                profileType: ''
                                }}
                                onSubmit={this.props.handleSubmit}
                                // validationSchema={
                                //     Yup.object().shape({
                                //         profileType: Yup.string().required('choose profile type')
                                //     })
                                // }
                                render={({values, handleSubmit, handleChange, errors, setFieldValue}) => (
                                    <Fragment>
                                        <ProfileTypeWrap>
                                            <ProfileTypes htmlFor="student">
                                                <RadioBtn type="radio" name="profileType" id="student"
                                                          onChange={() => setFieldValue('profileType', 'student')}
                                                          checked={values.profileType === 'student'}/>
                                                <ProfileTypeTxt>College Student</ProfileTypeTxt>
                                            </ProfileTypes>
                                            <ProfileTypes htmlFor="faculty">
                                                <RadioBtn type="radio" name="profileType" id="faculty"
                                                          onChange={() => setFieldValue('profileType', 'faculty')}
                                                          checked={values.profileType === 'faculty'}/>
                                                <ProfileTypeTxt>College Faculty</ProfileTypeTxt>
                                            </ProfileTypes>
                                            <ProfileTypes htmlFor="admin">
                                                <RadioBtn type="radio" name="profileType" id="admin"
                                                          onChange={() => setFieldValue('profileType', 'admin')}
                                                          checked={values.profileType === 'admin'}/>
                                                <ProfileTypeTxt>College Administrator</ProfileTypeTxt>
                                            </ProfileTypes>
                                            <ProfileTypes htmlFor="employee">
                                                <RadioBtn type="radio" name="profileType" id="employee"
                                                          onChange={() => setFieldValue('profileType', 'employee')}
                                                          checked={values.profileType === 'employee'}/>
                                                <ProfileTypeTxt>Company Employee</ProfileTypeTxt>
                                            </ProfileTypes>
                                            <ProfileTypes htmlFor="companyHR">
                                                <RadioBtn type="radio" name="profileType" id="companyHR"
                                                          onChange={() => setFieldValue('profileType', 'companyHR')}
                                                          checked={values.profileType === 'companyHR'}/>
                                                <ProfileTypeTxt>Company HR</ProfileTypeTxt>
                                            </ProfileTypes>
                                            <ProfileTypes htmlFor="owner" last>
                                                <RadioBtn type="radio" name="profileType" id="owner"
                                                          onChange={() => setFieldValue('profileType', 'owner')}
                                                          checked={values.profileType === 'owner'}/>
                                                <ProfileTypeTxt>Company Owner</ProfileTypeTxt>
                                            </ProfileTypes>
                                        </ProfileTypeWrap>
                                        <LoginBtnWrap>
                                            <LoginBtn type="submit"
                                                      onClick={handleSubmit}>NEXT</LoginBtn>
                                        </LoginBtnWrap>
                                    </Fragment>
                                )}
                            />
                        </AllInputWrap>
                    </InnerForm>
                </AbsoluteForm>
            </Fragment>
        )
    }
}