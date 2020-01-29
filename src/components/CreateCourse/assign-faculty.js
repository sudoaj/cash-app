import React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'
import Select from 'react-select'
import {ErrorMsg} from "../Core/reusable-styles";
import '../../static/main.css'

const Wrapper = styled.section`
    min-height: 400px;
`

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
    padding-top: 15px;
    height: 100%;
`
const InputContainer = styled.div`
    min-height: 250px;
    position: relative;
`
const EachInput = styled.div`
    margin-top: 20px;
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
const AddFacultyWrap = styled.div`
    padding: 0px 0px 15px;
    text-align: right;
`
const AddFacultyBtn = styled.span`
    cursor: pointer;
    color: ${({theme}) => theme.colors.green};
    font-size: 12px;
    font-weight: bold;
`
const TextareaLabel = styled.label`
    text-align: left;
    opacity: 0.8;
    font-size: 14px;
    color: ${({theme}) => theme.colors.dark_blue};    
`


class AssignFaculty extends React.Component {
    state = {
        faculty: null
    }

    handleChange = (selectedOption) => {
        this.setState({faculty: selectedOption})
    }

    handleSubmit = () => {

    }

    render() {
        return(
            <Wrapper>
                <TabDetail>
                    <HeaderName>Assign Faculty</HeaderName>
                    <HeaderDesc>
                        Assign a Faculty to conduct the lessons.
                    </HeaderDesc>
                </TabDetail>
                <Formik
                initialValues={{
                    faculty: this.state.faculty
                }}
                onSubmit={this.state.faculty === null ? this.handleSubmit : this.props.handleSubmit}
                render={({values, handleSubmit, handleChange, errors, touched}) => (
                    <TabForm>
                        <InputContainer>
                            <AddFacultyWrap>
                                <AddFacultyBtn>+ Add Faculty</AddFacultyBtn>
                            </AddFacultyWrap>
                            <Select classNamePrefix="react-select"
                                    value={this.state.faculty}
                                    onChange={this.handleChange} options={options}
                                    name="faculty"
                                    placeholder={
                                        <TextareaLabel>Faculty Name</TextareaLabel>
                                    }
                            />
                            {touched.faculty && this.state.faculty === null ?
                                <ErrorMsg>Pick a faculty</ErrorMsg> : ''}
                        </InputContainer>
                        <EachInput>
                            <NextBtnWrap>
                                <NextBtn type="submit" onClick={handleSubmit}>NEXT</NextBtn>
                            </NextBtnWrap>
                        </EachInput>
                    </TabForm>
                )}/>
            </Wrapper>
        )
    }
}

export { AssignFaculty }

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];