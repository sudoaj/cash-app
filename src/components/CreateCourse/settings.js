import React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Select from 'react-select'
import Dropzone from 'react-dropzone'
import {Link} from 'react-router-dom'

import '../../static/main.css'
import {ErrorMsg, ClearBoth} from "../Core/reusable-styles";


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

const TabForm = styled.div`
    padding: 3%;
`
const InputContainer = styled.div``
const EachInput = styled.div`
    margin-top: 20px;
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
    height: 90px;
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
const HalfInputWrap = styled.div`
    width: 31.3%;
    float: left;
`
const HalfInputLabel = styled.label`
    opacity: 0.5;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 7px;
    display: block;
`
const HalfInput = styled.input`
    padding: 13px;
    border: 1px solid rgba(0,51,102,0.15);
    border-radius: 5px;
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
const RadioBtnWrap = styled.div`
    border: 0.5px solid ${({theme}) => theme.colors.light_grey};
    height: 46px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 2px 2px 0 0;
    width: 100%;
    display: table;
    padding: 0 15px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`
const RadioBtnWrap2 = RadioBtnWrap.extend`
    border-top: none;
    border-radius: 0 0 2px 2px;
`
const RadioBtn = styled.input`
    display: none;
`
const RadioBtnLabel = styled.label`
    opacity: 0.8;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
    margin-left: 10px;
`


const DropZoneTxt = styled.span`
    display: ${props => props.active ? 'none' : 'block'};
    text-align: center;
    margin-top: 10px;
`
const previewLink = {
    color: '#4CC075',
    fontSize: '12px',
    float: 'right',
    textDecoration: 'none'
}

const ImageName = styled.span`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    float: left;
    padding-top: 18px;
`
const ImageIcon = styled.i`
    color: ${({theme}) => theme.colors.dark_purple};
    margin-right: 10px;
    float: left;
    padding-top: 12px;
    padding-left: 20px;
    display: ${props => props.active ? 'block' : 'none'};
`

const DelFileBtn = styled.button`
    color: ${({theme}) => theme.colors.light_grey};
    border: none;
    outline: none;
    cursor: pointer;
    float: right;
    padding-top: 19px;
    padding-right: 20px;
    display: ${props => props.active ? 'block' : 'none'};
    z-index: 100;
`

const DropZoneInner = styled.div`
    border: 1px dashed ${({theme}) => theme.colors.light_grey};
    background-color: ${({theme}) => theme.colors.white};
    height: 50px;
    text-align: center;
    display: ${props => props.active ? '' : 'grid'};
    align-items: center;
    border-radius: 2px;
    color: ${({theme}) => theme.blueOpacity.five};
    font-size: 14px;
    cursor: pointer;
    border-style: ${props => props.active ? 'solid' : 'dashed'};
`
const dropZoneStyle = {
    border: 'none',
    height: '50px',
    display: 'block',
    cursor: 'pointer',
}


const RadioBtnLabel2 = styled.label`
    width: 16px;
    height: 16px;
    border: 1px solid ${({theme}) => theme.colors.green};
    border-radius: 100%;
    display: flex;
    align-items: center;
`
const RadioLabelInner = styled.div`
    height: 12px;
    width: 12px;
    background: ${props => props.active 
    ? `linear-gradient(0.49deg, ${props.theme.colors.green} 0%, ${props.theme.colors.lighter_blue} 100%)` 
    : 'transparent'};
    border-radius: 100%;
    margin: auto;
`

class CreateCourseSettings extends React.Component {

    state = {
        program: null,
        courseType: options[0],
        currency: options[1],
        coverPhoto: [],
        video: [],
        activePhoto: false,
        activeVideo: false
    }


    handleProgram = selectedOption => {
        this.setState({program: selectedOption})
    }

    handleCourseType = selectedOption => {
        this.setState({courseType: selectedOption})
    }

    handleCurrency = selectedOption => {
        this.setState({currency: selectedOption})
    }

    handleSubmit = () => {}

    dropPhoto = (file) => {
        this.setState({
            activePhoto: true,
            coverPhoto: file,
        })
    }

    dropVideo = (file) => {
        this.setState({
            video: file,
            activeVideo: true
        })
    }

    delFile = (type) => {
        if (type === 'cover')
            this.setState({activePhoto: false, coverPhoto: []})
        else
            this.setState({video: [], activeVideo: false})
    }

    render() {
        return(
            <React.Fragment>
                <TabDetail>
                    <HeaderName style={{float:'left'}}>Course Landing Page</HeaderName>
                    <Link to="/" style={previewLink}>Preview</Link>
                    <ClearBoth/>
                </TabDetail>
                <Formik
                    initialValues={{
                        topic: '',
                        desc: '',
                        program: this.state.program,
                        courseType: this.state.courseType,
                        currency: this.state.currency,
                        amount: '',
                        activity: true
                    }}
                    onSubmit={this.state.program === null ? this.handleSubmit : this.props.handleSubmit}
                    validationSchema={
                        Yup.object().shape({
                            topic: Yup.string().required('title is required'),
                            desc: Yup.string().min(10).required('description is required'),
                            amount: Yup.number().required('amount is required')
                        })
                    }
                    render={({values, handleSubmit, handleChange, errors, touched, handleBlur, setFieldValue}) => (
                        <TabForm>
                            <InputContainer>
                                <EachInput style={{marginTop: '0px'}}>
                                    <Input type="text" placeholder="Enter Quiz Topic"
                                           name="topic"
                                           value={values.topic} onChange={handleChange}/>
                                    {touched.topic &&
                                    errors.topic && <ErrorMsg>{errors.topic}</ErrorMsg>}
                                </EachInput>
                                <EachInput>
                                    <Select classNamePrefix="react-select"
                                            value={this.state.program}
                                            onChange={this.handleProgram} options={options}
                                            name="program"
                                            placeholder={
                                                <TextareaLabel>Choose a program&nbsp;
                                                    <span style={{color: '#FF5E72'}}>*</span>
                                                </TextareaLabel>
                                            }
                                    />
                                    {touched.program && this.state.program === null ?
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
                                    <Dropzone onDrop={this.dropPhoto} style={dropZoneStyle}
                                              accept="image/*" disabled={this.state.activePhoto}>
                                        <DropZoneInner active={this.state.activePhoto}>
                                            <DropZoneTxt active={this.state.activePhoto}>
                                                + Add a Cover Picture
                                            </DropZoneTxt>
                                            <ImageIcon className="fas fa-image fa-2x" active={this.state.activePhoto}/>
                                            {this.state.coverPhoto.map(f =>
                                                <ImageName key={f.name}>{f.name}</ImageName>)}
                                            <DelFileBtn className="far fa-trash-alt fa-lg"
                                                        active={this.state.activePhoto}
                                                        onClick={() => this.delFile('cover')}/>
                                            <ClearBoth/>
                                        </DropZoneInner>
                                    </Dropzone>
                                </EachInput>
                                <EachInput>
                                    <Dropzone onDrop={this.dropVideo} style={dropZoneStyle} accept="video/*"
                                    disabled={this.state.activeVideo}>
                                        <DropZoneInner active={this.state.activeVideo}>
                                            <DropZoneTxt active={this.state.activeVideo}>
                                                + Add a Promotional video
                                            </DropZoneTxt>
                                            <ImageIcon className="far fa-play-circle fa-2x"
                                                       active={this.state.activeVideo}/>
                                            {this.state.video.map(f =>
                                                <ImageName key={f.name}>{f.name}</ImageName>)}
                                            <DelFileBtn className="far fa-trash-alt fa-lg"
                                                        active={this.state.activeVideo}
                                                        onClick={() => this.delFile('video')}/>
                                            <ClearBoth/>
                                        </DropZoneInner>
                                    </Dropzone>
                                </EachInput>
                            </InputContainer>
                            <InputContainer style={{paddingTop: '20px'}}>
                                <HeaderName>Course Type</HeaderName>
                                <EachInput>
                                    <HalfInputWrap style={{marginRight: '3%'}}>
                                        <HalfInputLabel>Choose Course Type</HalfInputLabel>
                                        <Select classNamePrefix="course-type"
                                                value={this.state.courseType}
                                                onChange={this.handleCourseType} options={options}
                                                name="courseType"
                                        />
                                    </HalfInputWrap>
                                    <HalfInputWrap style={{marginRight: '3%'}}>
                                        <HalfInputLabel>Choose Currency</HalfInputLabel>
                                        <Select classNamePrefix="course-type"
                                                value={this.state.currency}
                                                onChange={this.handleCurrency} options={options}
                                                name="currency"
                                        />
                                    </HalfInputWrap>
                                    <HalfInputWrap>
                                        <HalfInputLabel>Amount Per Person</HalfInputLabel>
                                        <HalfInput type="number" placeholder=""
                                               name="amount"
                                               value={values.amount} onChange={handleChange}/>
                                        {touched.amount &&
                                        errors.amount && <ErrorMsg>{errors.amount}</ErrorMsg>}
                                    </HalfInputWrap>
                                    <ClearBoth/>
                                </EachInput>
                            </InputContainer>
                            <InputContainer style={{marginTop: '20px'}}>
                                <HeaderName>Set Activity</HeaderName>
                                <EachInput>
                                    <RadioBtnWrap>
                                        <RadioBtn type="radio" name="setActivity" id="invite-member"
                                                  value={values.activity}
                                                  onChange={() => setFieldValue('activity', true)}
                                                  onBlur={handleBlur} checked={values.activity}/>
                                        <RadioBtnLabel2 htmlFor="invite-member">
                                            <RadioLabelInner active={values.activity}/>
                                        </RadioBtnLabel2>
                                        <RadioBtnLabel>Invite Members to test the Course</RadioBtnLabel>
                                    </RadioBtnWrap>
                                    <RadioBtnWrap2>
                                        <RadioBtn type="radio" name="setActivity" id="review"
                                                   onChange={() => setFieldValue('activity', false)}
                                                  onBlur={handleBlur} value={values.activity}
                                                  checked={values.activity === false}/>
                                        <RadioBtnLabel2 htmlFor="review">
                                            <RadioLabelInner active={values.activity === false}/>
                                        </RadioBtnLabel2>
                                        <RadioBtnLabel>Submit for Review</RadioBtnLabel>
                                    </RadioBtnWrap2>
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

export { CreateCourseSettings }


const options = [
    { value: 'Paid Course', label: 'Paid Course' },
    { value: 'Free Course', label: 'Free Course' }
];