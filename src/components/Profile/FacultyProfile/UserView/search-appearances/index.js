import React, {Fragment} from 'react';
import styled from 'styled-components';

import {ClearBoth} from "../../../../Core/reusable-styles";

import img1 from '../../../../../assets/Stanford-Logo.png'
import img2 from '../../../../../assets/Caterpillar.png'
import img3 from '../../../../../assets/university-logo-small.png'
import img4 from '../../../../../assets/oracle.jpg'
import img5 from '../../../../../assets/microsoft.png'
import img6 from '../../../../../assets/mit-logo.jpg'
import img7 from '../../../../../assets/Harvard-Logo.png'



const FacultyDetailWrap = styled.div`
    width: 862px;
`
const UserDetailWrap = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.whiteOpacity.nine};
    border-radius: 4px;
    box-shadow: 0 0 14px 2px rgba(83,83,83,0.1);
    margin-bottom: 15px;
    padding: 20px;
    box-sizing: border-box;
`

const HeaderTxt = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 16px;
    font-weight: 500;
    margin: 0px;
`
const HeaderDesc = styled.p`
    color: ${({theme}) => theme.colors.gray};
    font-size: 12px;
    margin-bottom: 15px;
    margin-top: 40px;
`
const HeaderDescBold = styled.b`
    color: ${({theme}) => theme.colors.blue};
    font-size: 15px;
    font-weight: 500;
`

const SearchersContainer = styled.div`
    border: 1px solid rgba(221,223,229,0.75);
    border-radius: 7px;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0 1px 2px 0 rgba(204,204,204,0.5);
    margin-top: 15px;
`
const ContainerHeader = styled.div`
    padding: 10px 30px;
    border-bottom: 1px solid rgba(0, 51, 102, 0.07);
`
const ContainerHeadTxt = styled.span`
    color: ${({theme}) => theme.colors.gray};
    opacity: 0.8;
    font-size: 12px;
`
const SearchersWrap = styled.div`
    padding: 30px;
    padding-bottom: 0px;
`
const EachSearcher = styled.div`
    float: left;
    width: 25%;
    text-align: center;
    margin-bottom: 40px;
`
const SearcherLogo = styled.div`
    height: 81px;
    width: 81px;
    border-radius: 100%;
    // background-color: rgba(148, 119, 44, 0.15);
    background-color: rgba(0, 51, 102, 0.05);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    margin: auto;
`
const SearcherName = styled.p`
    margin: 0;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
    margin-top: 10px;
`
const SearcherLocation = styled.p`
    opacity: 0.5;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 15px;
`
const SearcherDesc = styled.p`
    opacity: 0.6;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 11px;
    margin: 0px;
    max-width: 158px;
    height: 65px;
    margin: auto;
    line-height: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
`
const FollowBtn = styled.button`
    height: 35px;
    width: 120px;
    border-radius: 4px;
    background: linear-gradient(2.21deg, 
    ${({theme}) => theme.colors.green} 0%, 
    ${({theme}) => theme.colors.lighter_blue} 100%);
    color: ${({theme}) => theme.colors.white};
    font-size: 12px;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 500;
    box-shadow: 3px 10px 10px 1px rgba(10,37,62,0.1);
    letter-spacing: 1px;
`
const ContainerFooter = styled.div`
    padding: 10px 30px;
    border-top: 1px solid rgba(0, 51, 102, 0.07);
    text-align: center;
`
const ViewAll = styled.button`
    text-align: center;
    color: ${({theme}) => theme.colors.green};
    font-size: 12px;
    border: none;
    outline: none;
    cursor: pointer;
`
const EachSearchesAction = styled.div`
    margin-bottom: 30px;
`
const ActionHead = styled.p`
    opacity: 0.9;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 18px;
    margin-top: 0px;
    margin-bottom: 15px;
`
const PercentageWrap = styled.div`
    border-radius: 4px;
    height: 8px;
    width: 100%;
    background-color: #DFE2EE;
    // box-shadow: inset 0 0 10px 0 rgba(0,0,0,0.1), 0 4px 8px 0 rgba(10,37,62,0.15);
`
const Percentage = styled.div`
    height: 100%;
    border-radius: ${props => props.percentage === 100 ? '4px 4px 4px 4px' : '4px 0 0 4px'};
    background: linear-gradient(181.2deg, 
    ${({theme}) => theme.colors.dark_purple} 0%, 
    ${({theme}) => theme.colors.light_blue} 100%);
    width: ${props => props.percentage + '%'};
    box-shadow: 0 3px 8px 0 rgba(0,51,102,0.2);
`
const PercentageTxt = styled.p`
    opacity: 0.5;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    margin-bottom: 0px;
`
const KeywordsWrap = styled.div`
    padding-bottom: 20px;
`
const EachKeyword = styled.div`
    height: 30px;
    padding: 0px 10px;
    margin-right: 10px;
    border-radius: 4px;
    background-color: rgba(0,51,102,0.4);
    display: grid;
    text-align: center;
    align-items: center;
    color: ${({theme}) => theme.colors.white};
    font-size: 12px;
    letter-spacing: 0.63px;
    float: left;
    font-weight: 300;
`

export class SearchAppearances extends React.Component {

    state = {}

    render() {
        return(
            <Fragment>
                <FacultyDetailWrap>
                    <UserDetailWrap>
                        <HeaderTxt>Search Appearances</HeaderTxt>
                        <HeaderDesc>
                            <HeaderDescBold>22</HeaderDescBold>&nbsp;
                            number of times your profile appeared in search results between June 12 - June 19
                        </HeaderDesc>
                        <SearchersContainer>
                            <ContainerHeader>
                                <ContainerHeadTxt>
                                    Where are your searchers from
                                </ContainerHeadTxt>
                            </ContainerHeader>
                            <SearchersWrap>
                                {searches.map((searcher, index) => (
                                    <EachSearcher key={index}>
                                        <SearcherLogo image={searcher.logo}/>
                                        <SearcherName>{searcher.name}</SearcherName>
                                        <SearcherLocation>{searcher.location}</SearcherLocation>
                                        <SearcherDesc>{searcher.desc}</SearcherDesc>
                                        <FollowBtn>FOLLOW</FollowBtn>
                                    </EachSearcher>
                                ))}
                                <ClearBoth/>
                            </SearchersWrap>
                            <ContainerFooter>
                                <ViewAll>View All</ViewAll>
                            </ContainerFooter>
                        </SearchersContainer>
                        <SearchersContainer>
                            <ContainerHeader>
                                <ContainerHeadTxt>
                                    What do your searchers do
                                </ContainerHeadTxt>
                            </ContainerHeader>
                            <SearchersWrap>
                                <EachSearchesAction>
                                    <ActionHead>Mechanical Engineering Student</ActionHead>
                                    <PercentageWrap>
                                        <Percentage percentage={35}/>
                                    </PercentageWrap>
                                    <PercentageTxt>{35}%</PercentageTxt>
                                </EachSearchesAction>
                                <EachSearchesAction>
                                    <ActionHead>Recruiter</ActionHead>
                                    <PercentageWrap>
                                        <Percentage percentage={23}/>
                                    </PercentageWrap>
                                    <PercentageTxt>{23}%</PercentageTxt>
                                </EachSearchesAction>
                                <EachSearchesAction>
                                    <ActionHead>Finance and Marketing Faculty</ActionHead>
                                    <PercentageWrap>
                                        <Percentage percentage={12}/>
                                    </PercentageWrap>
                                    <PercentageTxt>{12}%</PercentageTxt>
                                </EachSearchesAction>
                                <EachSearchesAction>
                                    <ActionHead>Hardware Engineer</ActionHead>
                                    <PercentageWrap>
                                        <Percentage percentage={50}/>
                                    </PercentageWrap>
                                    <PercentageTxt>{50}%</PercentageTxt>
                                </EachSearchesAction>
                                <EachSearchesAction>
                                    <ActionHead>Mechanical Engineer</ActionHead>
                                    <PercentageWrap>
                                        <Percentage percentage={61}/>
                                    </PercentageWrap>
                                    <PercentageTxt>{61}%</PercentageTxt>
                                </EachSearchesAction>
                            </SearchersWrap>
                        </SearchersContainer>
                        <SearchersContainer>
                            <ContainerHeader>
                                <ContainerHeadTxt>Keywords your searchers used</ContainerHeadTxt>
                            </ContainerHeader>
                            <SearchersWrap>
                                <KeywordsWrap>
                                    <EachKeyword>Mechanical Engineer</EachKeyword>
                                    <EachKeyword>Marketing</EachKeyword>
                                    <EachKeyword>Machinery Design</EachKeyword>
                                    <ClearBoth/>
                                </KeywordsWrap>
                            </SearchersWrap>
                        </SearchersContainer>
                    </UserDetailWrap>
                </FacultyDetailWrap>
            </Fragment>
        )
    }
}

const locations = ['Chennai', 'Banglore', 'Madurai', 'Banglore', 'Banglore', 'Vellore', 'Punjab', 'Coimbatore']
const searchNames = ['SRM University', 'Caterpillar Inc.', 'HoneyWell', 'Oracle', 'Microsoft', 'VIT University',
'LP University', 'BOSCH']
const images = [ img1, img2, img3, img4, img5, img6, img7, img7 ]


const searches = Array.from(Array(8).keys()).map((value, index, array) => ({
    id: Math.floor(Math.random() * Math.floor(900)),
    name: searchNames[index],
    location: locations[index],
    desc: 'Global leadership in human development,excellence in education and healthcare.',
    logo: images[index],
    onClick: () => {}
}))