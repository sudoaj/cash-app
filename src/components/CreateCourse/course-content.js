import React from 'react'
import styled from 'styled-components'


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



class CourseContent extends React.Component {
    state = {

    }

    render() {
        return(
            <React.Fragment>
                <TabDetail>
                    <HeaderName>Course Content</HeaderName>
                    <HeaderDesc>
                        Assign skills and respective points a student would gain after taking this course.
                    </HeaderDesc>
                </TabDetail>
                <TabForm>
                    <EachInput>
                        <NextBtnWrap>
                            <NextBtn type="submit" onClick={this.props.handleSubmit}>NEXT</NextBtn>
                        </NextBtnWrap>
                    </EachInput>
                </TabForm>
            </React.Fragment>
        )
    }
}

export { CourseContent }