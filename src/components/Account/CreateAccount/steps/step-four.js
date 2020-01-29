import React, {Fragment} from 'react'
import styled from 'styled-components'
import {ErrorMsg, ClearBoth} from "../../../Core/reusable-styles";

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
    height: 88%;
    position: relative;
    box-sizing: border-box;
`
const LoginBtnWrap = styled.div`
    padding-top: 0px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
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
const EachInputWrap = styled.form`
    margin-bottom: 10px;
`
const Input = styled.input`
    width: 100%;
    border: 1px solid #CAD4DE;
    border-radius: 2px;
    padding: 10px 13px;
    font-size: 14px;
    color: #777D86;
    box-sizing: border-box;
    outline: none;
    font-weight: 300;
    letter-spacing: 1px;
    cursor: ${props => props.pointer ? 'not-allowed' : 'text'};
`
const DescText = styled.p`
    color: #777D86;
    font-size: 14px;
    margin-top: 0px;
`
const SkillsWrap = styled.div``
const EachSkill = styled.div`
    height: 31px;
    width: 100%;
    border-box: box-sizing;
    border-radius: 2px;
    background: linear-gradient(8.91deg, #3EA6E8 0%, #4DD8E3 100%);
    background: linear-gradient(8.91deg, #3EA6E8 0%, #4DD8E3 100%);
    padding: 0px 15px;
    margin-bottom: 8px;
    box-sizing: border-box;
    padding-top: 7px;
`
const SkillTxt = styled.span`
    color: ${({theme}) => theme.colors.white};
    font-size: 14px;
    display: table-cell;
    font-weight: 300;
    letter-spacing: 1px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 210px;
    float: left;
`
const Delete = styled.i`
    color: ${({theme}) => theme.colors.white};
    font-size: 14px;
    text-align: right;
    cursor: pointer;
    display: none;
    float: right;
    ${EachSkill}:hover & {
        display: block;
    }
`

export class StepFour extends React.Component {

  state = {
    skill: '',
    skills: [],
    validate: false
  }

  handleChange = (e) => {
    this.setState({skill: e.target.value})
  }

  addSkill = (e) => {
    e.preventDefault()
    const {skills} = this.state
    this.setState({
      skills: [...skills, this.state.skill],
      skill: ''
    })
  }

  removeSkill = (id) => {
    this.setState({
      skills: this.state.skills.filter((skill, index) => index !== id)
    })
  }

  validation = () => {
    this.setState({validate: true})
  }

  render() {
    const {skills, skill, validate} = this.state
    return (
      <Fragment>
        <AbsoluteForm>
          <InnerForm>
            <FormHeader>Need a few more details</FormHeader>
            <FormDesc>Please select an option below</FormDesc>
            <AllInputWrap>
              <DescText>Your top 5 interested skills</DescText>
              <EachInputWrap onSubmit={this.addSkill}>
                <Input type="text" name="search" placeholder="Search Skills"
                       onChange={this.handleChange} value={skill}
                       disabled={skills.length === 5} pointer={skills.length === 5}/>
              </EachInputWrap>
              <SkillsWrap>
                {skills.map((skill, index) => (
                  <EachSkill key={index}>
                    <SkillTxt>{skill}</SkillTxt>
                    <Delete className="fa fa-times" onClick={() => this.removeSkill(index)}/>
                    <ClearBoth/>
                  </EachSkill>
                ))}
              </SkillsWrap>
              <LoginBtnWrap>
                {skills.length < 5 && validate &&
                <ErrorMsg style={{marginBottom: '5px'}}>Select at least 5 skills</ErrorMsg>}
                <LoginBtn onClick={(skills.length < 5)
                  ? this.validation : this.props.handleSubmit}>NEXT</LoginBtn>
              </LoginBtnWrap>
            </AllInputWrap>
          </InnerForm>
        </AbsoluteForm>
      </Fragment>
    )
  }
}