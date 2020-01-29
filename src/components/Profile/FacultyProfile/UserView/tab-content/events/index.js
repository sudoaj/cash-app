import React, {Fragment} from 'react';
import styled from 'styled-components';
import {ClearBoth} from "../../../../../Core/reusable-styles";

import searchIcon from '../../../../../../assets/search-symbol.png'
import downArrow from '../../../../../../assets/arrow-down.png'
import img1 from '../../../../../../assets/lauren-mancke.jpg'
import img2 from '../../../../../../assets/airb1.jpg'
import img3 from '../../../../../../assets/airb2.jpg'
import img4 from '../../../../../../assets/pexels-register.jpeg'
import img5 from '../../../../../../assets/deng-unsplash.jpg'

const SearchContainer = styled.div``
const SearchBorder = styled.div`
    border-bottom: 1px solid rgba(0,51,102,0.07);
    padding-bottom: 10px;
`
const SearchForm = styled.form``
const SearchBtn = styled.button`
    border: none;
    outline: none;
    float: left;
    width: 3%;
    text-align: left;
    padding-left: 0px;
`
const SearchInput = styled.input`
    border: none;
    outline: none;
    color: rgba(0,51,102,0.8);
    font-size: 14px;
    width: 80%;
    float: left;
    &::placeholder {
        color: rgba(0,51,102,0.8);
        font-size: 14px;
    }
`
const SearchFilter = styled.div`
    float: right;
    cursor: pointer;
    position: relative;
`
const FilterName = styled.span`
     color: ${({theme}) => theme.colors.dark_blue};
     opacity: 0.9;
     font-size: 14px;
`

const EventsWrap = styled.div`
    margin-top: 15px;
`
const EachEvents = styled.div`
    float: left;
    width: 32%;
    margin-right: ${props => props.index % 3 === 0 ? '0' : '2%'};
    margin-bottom: 15px;
`
const EventBox = styled.div`
    height: 234px;
    width: 258px;
    border: 0.5px solid ${({theme}) => theme.colors.light_grey};
    border-radius: 4px;
    background-color: ${({theme}) => theme.whiteOpacity.seven};
    transition: 0.2s;
    box-sizing: border-box;
    &:hover {
        box-shadow: 0 0 14px 2px rgba(83,83,83,0.1);
        border-color:  #fff;
    }
`
const TopImage = styled.div`
    height: 108px;
    width: 100%;
    border-radius: 4px 4px 0px 0px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
`
const EventDetailWrap = styled.div`
    padding: 15px 15px 10px 15px;
    box-sizing: border-box;
`
const TopDetailWrap = styled.div`
    min-height: 80px;
`
const LeftDetail = styled.div`
    float: left;
    width: 32%;
`
const CalenderWrap = styled.div`
    height: 54px;
    width: 60px;
    border: 1px solid #194775;
    border-color: rgba(25, 71, 117, 0.6);
    border-radius: 4px;
    background: linear-gradient(180deg, #EAF4FF 0%, #E5F7F4 100%);
`
const CalenderTop = styled.div`
    height: 17px;
    width: 100%;
    text-align: center;
    display: grid;
    align-items: center;
    background-color: rgba(25, 71, 117, 0.7);
    border-radius: 3px 3px 0 0;
    color: ${({theme}) => theme.colors.white};
    font-size: 12px;
`
const CalendarBody = styled.p`
    color: rgba(25, 71, 117, 0.7);
    font-size: 16px;
    text-align: center;
    margin: 10px 0px;
`
const RightDetail = styled.div`
    float: left;
    width: 68%;
`
const EvtName = styled.p`
    opacity: 0.9;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 13px;
    margin: 0px;
    font-weight: 600;
    margin: 5px 0px 7px;
`
const EvtLocation = styled.p`
    margin: 0px;
    opacity: 0.3;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    line-height: 17px;
`
const BottomDetailWrap = styled.div`
    width: 100%;
`
const EvtType = styled.span`
    opacity: 0.6;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
    font-weight: bold;
    float: left;
`
const ViewEvt = styled.span`
    cursor: pointer;
    font-size: 12px;
    float: right;
    color: ${({theme}) => theme.colors.green};
    font-weight: bold;
`

export class FacultyEvents extends React.Component {

    state = {
        search: ''
    }

    handleSearch = (event) => {
        this.setState({search: event.target.value.substr(0, 20)})
    }

    render() {
        let filteredEvents = events.filter(
            (event) => {
                return event.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        )
        return(
            <Fragment>
                <SearchContainer>
                    <SearchBorder>
                        <SearchForm>
                            <SearchBtn type="submit">
                                <img alt="search" src={searchIcon}/>
                            </SearchBtn>
                            <SearchInput type="text" placeholder="Search.."
                                         value={this.state.search} onChange={this.handleSearch}/>
                            <SearchFilter>
                                <FilterName>
                                    Upcoming Events&nbsp;&nbsp;
                                    <img alt="arrow" src={downArrow}/>
                                </FilterName>
                            </SearchFilter>
                            <ClearBoth/>
                        </SearchForm>
                    </SearchBorder>
                </SearchContainer>
                <EventsWrap>
                    {filteredEvents.map((event, index) => (
                        <EachEvents key={index} index={index+1}>
                            <EventBox>
                                <TopImage image={event.image}/>
                                <EventDetailWrap>
                                    <TopDetailWrap>
                                        <LeftDetail>
                                            <CalenderWrap>
                                                <CalenderTop>{event.month}</CalenderTop>
                                                <CalendarBody>{event.date}</CalendarBody>
                                            </CalenderWrap>
                                        </LeftDetail>
                                        <RightDetail>
                                            <EvtName>{event.name}</EvtName>
                                            <EvtLocation>{event.location}</EvtLocation>
                                        </RightDetail>
                                        <ClearBoth/>
                                    </TopDetailWrap>
                                    <BottomDetailWrap>
                                        <EvtType>{event.type}</EvtType>
                                        <ViewEvt>View Event</ViewEvt>
                                        <ClearBoth/>
                                    </BottomDetailWrap>
                                </EventDetailWrap>
                            </EventBox>
                        </EachEvents>
                    ))}
                    <ClearBoth/>
                </EventsWrap>
            </Fragment>
        )
    }
}

const events = [
    {
        id: 0,
        image: img5,
        month: 'MAY',
        date: '30',
        name: 'Pottery Workshop',
        location: 'Dr.TMA Pai Hall Manipal University',
        type: 'Co-hosting'
    },
    {
        id: 1,
        image: img2,
        month: 'JUN',
        date: '1-4',
        name: 'Mechatronics Workshop',
        location: 'Anna University, Chennai',
        type: 'Co-hosting'
    },
    {
        id: 2,
        image: img3,
        month: 'JUN',
        date: '25-26',
        name: 'Gaming',
        location: 'IIT, Chennai',
        type: 'Co-hosting'
    },
    {
        id: 3,
        image: img4,
        month: 'JUL',
        date: '5',
        name: 'Art & Design',
        location: 'NIT, Trichy',
        type: 'Attending'
    },
    {
        id: 4,
        image: img1,
        month: 'JUL',
        date: '15',
        name: 'Economics',
        location: 'Punjab University, Punjab',
        type: 'Co-hosting'
    },
    {
        id: 5,
        image: img3,
        month: 'JUL',
        date: '21-22',
        name: 'Music and Memories',
        location: 'Jawaharlal Nehru Stadium, Chennai',
        type: 'Attending'
    }
]