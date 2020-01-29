import React, {Fragment} from 'react';
import styled from 'styled-components';

import {ClearBoth} from "../../../../../Core/reusable-styles";

const SkillBoxWrap = styled.div``
const EachBox = styled.div`
    float: left;
    width: 24%;
    margin-right: ${props => props.index % 4 === 0 ? '0' : '1.3%'};
    margin-bottom: 1.3%;
`
const SkillBox = styled.div`
    height: 80px;
    width: 190px;
    border: 0.5px solid ${({theme}) => theme.colors.light_grey};
    background-color: ${({theme}) => theme.whiteOpacity.seven};
    border-radius: 2px;
    transition: 0.2s;
    padding-left: 20px;
    box-sizing: border-box;
    &:hover {
        background-color: ${({theme}) => theme.whiteOpacity.nine};
        box-shadow: 0 0 20px 3px rgba(10,37,62,0.1);
        border-color: ${({theme}) => theme.colors.white};
    }
`
const SkillTitle = styled.p`
    color: ${({theme}) => theme.colors.green};
    font-size: 12px;
    margin-top: 15px;
`
const SkillPoints = styled.p`
    margin-top: 0px;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 18px;
    opacity: 0.9;
`

export class FacultySubjects extends React.Component {

    render() {
        return(
            <Fragment>
                <SkillBoxWrap>
                    {allSkills.map((skill, index) => (
                        <EachBox key={index} index={index+1}>
                            <SkillBox>
                                <SkillTitle>{skill.name}</SkillTitle>
                                <SkillPoints>Semester {skill.semester + index}</SkillPoints>
                            </SkillBox>
                        </EachBox>
                    ))}
                    <ClearBoth/>
                </SkillBoxWrap>
            </Fragment>
        )
    }
}

const allSkills = Array.from(Array(4).keys()).map((value, index, array) => ({
    id: index,
    name: 'Statistics & Dynamics ' + index,
    semester: 1
}))
