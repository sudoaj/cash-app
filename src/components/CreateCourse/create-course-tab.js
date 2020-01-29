import React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Select from 'react-select'

import '../../static/main.css'
import {ErrorMsg} from "../Core/reusable-styles";


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
    color: ${({theme}) => theme.blueOpacity.five};
    font-size: 12px;
    margin-bottom: 0px;
`

const TabForm = styled.div`
    padding: 3%;
`
const InputContainer = styled.div``
const EachInput = styled.div`
    margin-top: 20px;
`

const InputLabel = styled.label`
    font-size: 14px;
    opacity: 0.8;
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

const TextareaWrap = styled.div`
    border: 0.5px solid ${({theme}) => theme.colors.light_grey};
    border-radius: 2px;
`
const TextAreaHeader = styled.div`
    border-bottom: 0.5px solid ${({theme}) => theme.colors.light_grey};
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
`

const TextareaLabel = styled.label`
    text-align: left;
    opacity: 0.8;
    font-size: 14px;
    color: ${({theme}) => theme.colors.dark_blue};
`
const TextareaAmount = styled.span`
    text-align: right;
    font-size: 12px;
    color: ${({theme}) => theme.colors.dark_blue};
    opacity: 0.3;
    float: right;
    margin-top: 3px;
`
const Textarea = styled.textarea`
    border: none;
    height: 120px;
    width: 98%;
    margin: auto;
    padding: 1% 0;
    margin: 0 1%; 
    box-sizing: border-box;
    resize: none;
    outline: none;
    font-size: 13px;
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
const MultiSelectWrap = TextareaWrap.extend`
    box-sizing: border-box;
    min-height: 78px;
`
const InnerSelectWrap = styled.div`
    padding: 5px 0 5px 10px;
`

class CreateCourseTab extends React.Component {

    state = {
        touchProgram: false,
        programEnable: false,
        chosenProgram: '',
        newTag: '',
        tags: ['UX Design', 'Architecture'],
        selectedOption: null,
        selectedTags: [options[1]]
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption})
    }

    handleTagChange = (selectedTags) => {
        this.setState({selectedTags})
    }

    handleSubmit = () => {

    }

    render() {
        return(
            <React.Fragment>
                <TabDetail>
                    <HeaderName>Create a Course</HeaderName>
                    <HeaderDesc>Create a rich learning experience with the help of video lectures,
                        quizzes and exercises.</HeaderDesc>
                </TabDetail>
                <Formik
                    initialValues={{
                        title: '',
                        desc: '',
                        tags: this.state.selectedTags,
                        program: this.state.selectedOption
                    }}
                    onSubmit={this.state.selectedOption === null ? this.handleSubmit : this.props.handleSubmit}
                    validationSchema={
                        Yup.object().shape({
                            title: Yup.string().min(3).required('title is required'),
                            desc: Yup.string().min(10).required('description is required'),
                            tags: Yup.array().required('select at least a tag')
                        })
                    }
                    render={({values, handleSubmit, handleChange, errors, touched}) => (
                            <TabForm>
                                <InputContainer>
                                    <EachInput style={{marginTop: '0px'}}>
                                        <InputLabel>How about a good Title?&nbsp;
                                            <span style={{color: '#FF5E72'}}>*</span>
                                        </InputLabel>
                                        <Input type="text" placeholder="e.g. Launch your Career in UX Design"
                                               name="title"
                                               value={values.title} onChange={handleChange}/>
                                        {touched.title &&
                                        errors.title && <ErrorMsg>{errors.title}</ErrorMsg>}
                                    </EachInput>
                                    <EachInput>
                                        <Select classNamePrefix="react-select"
                                                value={this.state.selectedOption}
                                                onChange={this.handleChange} options={options}
                                                name="program"
                                                placeholder={
                                                    <TextareaLabel>Choose a program&nbsp;
                                                        <span style={{color: '#FF5E72'}}>*</span>
                                                    </TextareaLabel>
                                                }
                                        />
                                        {touched.program && this.state.selectedOption === null ?
                                            <ErrorMsg>choose a program</ErrorMsg> : ''}
                                    </EachInput>
                                    <EachInput>
                                        <TextareaWrap>
                                            <TextAreaHeader>
                                                <TextareaLabel>About the course&nbsp;
                                                    <span style={{color: '#FF5E72'}}>*</span>
                                                </TextareaLabel>
                                                <TextareaAmount>250 words</TextareaAmount>
                                            </TextAreaHeader>
                                            <Textarea name="desc" value={values.desc} onChange={handleChange}/>
                                        </TextareaWrap>
                                        {touched.desc &&
                                        errors.desc && <ErrorMsg>{errors.desc}</ErrorMsg>}
                                    </EachInput>
                                    <EachInput>
                                        <MultiSelectWrap>
                                            <TextAreaHeader>
                                                <TextareaLabel>
                                                    Add Tags&nbsp;
                                                    <span style={{color: '#FF5E72'}}>*</span>
                                                </TextareaLabel>
                                                <TextareaAmount>Add 5 Tags</TextareaAmount>
                                            </TextAreaHeader>
                                            <InnerSelectWrap>
                                                <Select defaultValue={values.tags} isMulti
                                                        name="tags" options={options}
                                                        className="basic-multi-select"
                                                        classNamePrefix="select"
                                                        placeholder="Add a tag"
                                                        onChange={this.handleTagChange}
                                                />
                                            </InnerSelectWrap>
                                        </MultiSelectWrap>
                                        {touched.tags &&
                                        this.state.selectedTags.length === 0 && <ErrorMsg>{errors.tags}</ErrorMsg>}
                                    </EachInput>
                                    <EachInput>
                                        <NextBtnWrap>
                                            <NextBtn onClick={handleSubmit} type="submit">NEXT</NextBtn>
                                        </NextBtnWrap>
                                    </EachInput>
                                </InputContainer>
                            </TabForm>
                        )}/>
            </React.Fragment>
        )
    }
}

export { CreateCourseTab }


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];