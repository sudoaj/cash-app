import React from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import { Formik } from 'formik'
import Select from 'react-select'
import {ErrorMsg} from "../Core/reusable-styles";
import '../../static/main.css'

const TabDetail = styled.div`
    padding: 2% 3%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgba(0, 51, 102, 0.07);
`
const HeaderName = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 16px;
    margin-bottom: 0px;
    margin-top: 0px;
`
const HeaderDesc = styled.p`
    opacity: 0.5;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    margin-bottom: 0px;
`

const TabForm = styled.div`
    padding: 3%;
`
const InputContainer = styled.div`
    border: 0.5px solid ${({theme}) => theme.colors.light_grey};
    border-radius: 2px;
    background-color: ${({theme}) => theme.colors.white};
    margin-top: 20px;
`
const EachInput = styled.div`
    margin-top: 20px;
`
const InputLabel = styled.label`
    opacity: 0.8;
    font-size: 14px;
    color: ${({theme}) => theme.colors.dark_blue};
    margin-bottom: 10px;
    display: block;
`
const Input = styled.input`
    padding: 15px;
    border: 0.5px solid ${({theme}) => theme.colors.light_grey};
    border-radius: 2px;
    background-color: ${({theme}) => theme.colors.white};
    width: 100%;
    box-sizing: border-box;
    font-size: 15px;
    outline: none;
    color: ${({theme}) => theme.colors.dark_blue};
    &::placeholder {
        font-size: 12px;
    }
`
const TextareaLabel = styled.label`
    text-align: left;
    opacity: 0.8;
    font-size: 14px;
    color: ${({theme}) => theme.colors.dark_blue};    
`
const DropDownSelectWrap = styled.div`
    width: 100%;
    position: relative;
`
const NextBtnWrap = styled.div`
    width: 100%;
    text-align: right;
    box-sizing: border-box;
`
const NextBtn = styled.button`
    border-radius: 4px;
    background: linear-gradient(0.49deg, 
    ${({theme}) => theme.colors.green} 0%, 
    ${({theme}) => theme.colors.lighter_blue} 100%);
    box-shadow: 1px 8px 10px 2px rgba(10,37,62,0.2);
    color: ${({theme}) => theme.colors.white};
    font-size: 14px;
    font-weight: 500;
    padding: 10px 30px;
    border: none;
    letter-spacing: 1px;
    outline: none;
    cursor: pointer;
`
const InnerInputWrap = styled.div`
    padding: 3%;
`
// const AddSkillWrap = styled.div`
//     border-top: 0.5px solid #D0D3E2;
//     padding: 15px 0;
//     text-align: center;
// `
// const AddSkillbtn = styled.span`
//     cursor: pointer;
//     color: #4CC075;
//     font-size: 12px;
//     font-weight: bold;
// `



class AssignSkills extends React.Component {
    state = {
        skillEnable: false,
        chosenSkill: '',
        skillLevel: null
    }

    handleChange = (selectedOption) => {
        this.setState({skillLevel: selectedOption})
    }

    handleSubmit = () => {

    }

    render() {
        return(
            <React.Fragment>
                <TabDetail>
                    <HeaderName>Key takeaways for a student</HeaderName>
                    <HeaderDesc>
                        Assign skills and respective points a student would gain after taking this course.
                    </HeaderDesc>
                </TabDetail>
                <Formik initialValues={{
                    skillLevel: this.state.skillLevel,
                    skill: ''
                }}
                onSubmit={this.state.skillLevel === null ? this.handleSubmit : this.props.handleSubmit}
                validationSchema={
                    Yup.object().shape({
                        skill: Yup.string().required('add a skill')
                    })
                }
                render={({values, handleSubmit, handleChange, errors, touched}) => (
                    <TabForm>
                        <EachInput>
                            <DropDownSelectWrap>
                                <Select classNamePrefix="react-select"
                                        value={this.state.skillLevel}
                                        onChange={this.handleChange} options={options}
                                        name="skillLevel"
                                        placeholder={
                                            <TextareaLabel>Select Skill Level of Course</TextareaLabel>
                                        }
                                />
                                {touched.skillLevel && this.state.skillLevel === null ?
                                    <ErrorMsg>Pick a skill</ErrorMsg> : ''}
                            </DropDownSelectWrap>
                        </EachInput>
                        <InputContainer>
                            <InnerInputWrap>
                                <EachInput style={{marginTop: '0px'}}>
                                    <InputLabel>Skills you wish to assign to the course</InputLabel>
                                    <Input type="text" placeholder="e.g. UX Design" name="skill"
                                    value={values.skill} onChange={handleChange}/>
                                    {touched.skill &&
                                    errors.skill && <ErrorMsg>{errors.skill}</ErrorMsg>}
                                </EachInput>
                            </InnerInputWrap>
                            {/*<EachInput>*/}
                                {/*<AddSkillWrap>*/}
                                    {/*<AddSkillbtn>+ Add Skills</AddSkillbtn>*/}
                                {/*</AddSkillWrap>*/}
                            {/*</EachInput>*/}
                        </InputContainer>
                        <EachInput>
                            <NextBtnWrap>
                                <NextBtn type="submit" onClick={handleSubmit}>NEXT</NextBtn>
                            </NextBtnWrap>
                        </EachInput>
                    </TabForm>
                )}/>
            </React.Fragment>
        )
    }
}

export { AssignSkills }



const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];