import React from 'react';
import "../../../../../node_modules/video-react/dist/video-react.css"
import "../../../../static/main.css"
import styled from 'styled-components';
import { Player } from 'video-react'

import { ClearBoth } from "../../../Core/reusable-styles/index";

import logo from '../../../../assets/profile2.jpeg';
import logo1 from '../../../../assets/black-and.jpg';
import logo2 from '../../../../assets/profile3.jpeg';
import logo3 from '../../../../assets/pexels-photo-567630.jpeg';
import logo5 from '../../../../assets/Stanford-Logo.png';
import logo11 from '../../../../assets/pexels-register.jpeg';


const CenterContainer = styled.div`
    float: left;
    padding: 0 15px;
    box-sizing: border-box;
`

const BR = styled.span`
    display: block;
    margin-bottom: 8px;
`

const NewPostWrap = styled.div`
    border-radius: 4px;
    box-shadow: 0 0 14px 2px rgba(83,83,83,0.1);
    background-color: ${({theme}) => theme.whiteOpacity.nine};
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    max-height: 102px;
    width: 584px;
`
const PostTextArea = styled.textarea`
    width: 100%;
    border: none;
    resize: none;
    outline: none;
    opacity: 0.4;
    color: ${({theme}) => theme.colors.dark_blue};
    font-family: "Lucida Grande";
    font-size: 13px;
    height: 51px;
    &::placeholder {
        color: ${({theme}) => theme.colors.dark_blue};
    }
`

const UploadFileContainer = styled.div`
    width: 100%;
`
const UploadMediaWrap = styled.div`
    float: left;
    width: 20%;
`
const UploadLabel = styled.label`
    opacity: 0.3;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 11px;
    cursor: pointer;
    font-weight: 600;
`
const PostBtnWrap = styled.div`
    float: right;
    width: 20%;
    text-align: right;
`
const PostBtn = styled.button`
    height: 28px;
    width: 28px;
    background: linear-gradient(9.62deg, 
    ${({theme}) => theme.colors.green} 0%, 
    ${({theme}) => theme.colors.lighter_blue} 100%);
    box-shadow: 0 2px 7px 0 rgba(10,37,62,0.1);
    color: #fff;
    border: none;
    border-radius: 100%;
    text-align: center;
    outline: none;
    cursor: pointer;
`
const PostContainer = styled.div`
    padding-top: 15px;
`

const PostCard = styled.div`
    border-radius: 4px;
    background-color: ${({theme}) => theme.whiteOpacity.nine};
    box-shadow: 0 0 14px 2px rgba(83,83,83,0.1);
    padding: 15px;
    margin-bottom: 15px;
    max-width: 584px;
    max-height: 408px;
    box-sizing: border-box;
`
const PostCardHeader = styled.div`
    border-bottom: 1px solid rgba(0, 51, 102, 0.07);
    padding-bottom: 15px;
`
const PostHeaderLeft = styled.div`
    float: left;
    width: 10%;
`
const PosterImg = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    cursor: pointer;
`
const PostHeaderMiddle = styled.div`
    float: left;
    width: 80%;
`
const PosterName = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
    font-weight: 500;
    margin: 6px 0px 4px 0px;
`
const PosterSch = styled.p`
    opacity: 0.4;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    margin: 0px;
`
const PostHeaderRight = styled.div`
    float: left;
    width: 10%;
    text-align: right;
`
const BookmarkPost = styled.button`
    border: none;
    background: ${({theme}) => theme.colors.white};
    outline: none;
    cursor: pointer;
    color: rgba(0, 51, 102, 0.4);
    margin-top: 10px;
`
const PostMiddle = styled.div`
    padding: 15px 0px 5px 0px;
`
const Caption = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    opacity: 0.8;
    font-size: 12px;
    float: left;
    width: 95%;
    margin-top: 0px;
`
const CaptionLink = styled.a`
    color: #0645AD;
    opacity: 0.8;
`
const PostTime = styled.p`
    float: right;
    width: 5%;
    opacity: 0.6;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    margin-top: 0px;
`
const PostEvent = styled.span`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 13px;
    font-weight: 600;
`
const PostContent = styled.div`
    border-radius: 4px;
    width: 100%;
`
const PostImgWrap = styled.div`
    max-height: 168px;
    overflow: hidden;
`
const PostImage = styled.img`
    width: 100%;
    border-radius: 4px;
`
const PostActionWrap = styled.div`
    padding-top: 5px;
`
const PostActionLeft = styled.div`
    float: left;
    width: 50%
`
const PostActionRight = styled.div`
    float: left;
    width: 50%;
    text-align: right;
`
const LikeBtn = styled.button`
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 12px;
    padding-left: 0;
    margin-right: 15px;
`
const LikeIcon = styled.i`
    background: ${props => props.liked ? `linear-gradient(9.62deg, 
    ${props.theme.colors.green} 0%, ${props.theme.colors.lighter_blue} 100%)` : 'transparent'};
    padding: 5px;
    border-radius: 100%;
    color: ${props => props.liked ? `${props.theme.colors.white}` : 'rgba(0, 51, 102, 0.5)'};
    transition: 0.3s;
`
const LikeTxt = styled.span`
    opacity: 0.5;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    margin-left: 5px;
`
const ActionCount = styled.span`
    opacity: 0.3;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    margin-left: 10px;
    font-weight: 600;
`

const PostFooter = styled.div`
    border-top: 1px solid rgba(0, 51, 102, 0.07);
    padding-top: 10px;
`

const FooterLeft = styled.div`
    float: left;
    width: 8%;
`
const CommentImage = PosterImg.extend`
    width: 35px;
    height: 35px;
`
const FooterMiddle = styled.div`
    width: 92%;
    float: left;
`
const FooterForm = styled.form`
    height: 35px;
    width: 100%;
    border: 0.5px solid rgba(0,51,102,0.2);
    background-color: rgba(234,234,234,0.3);
    opacity: 0.9;
    border-radius: 4px;
    padding: 4px 10px;
    box-sizing: border-box;
`
const FooterInput = styled.input`
    border: none;
    outline: none;
    color: rgba(0, 51, 102, 0.4);
    font-size: 14px;
    font-weight: 500;
    box-sizing: border-box;
    width: 90%;
    height: 100%;
    background: transparent;
    &::placeholder {
        color: rgba(0, 51, 102, 0.4);
        font-size: 14px;
        font-weight: 500;
    }
`
const FooterLabel = styled.label`
    opacity: 1;
    cursor: pointer;
    margin-left: 17px;
`
const FooterSmiley = styled.i`
    opacity: 0.2;
    color: ${({theme}) => theme.colors.dark_blue};
    cursor: pointer;
    font-size: 17px;
    margin-top: 3px;
`

const PostFileWrap = styled.div`
    border-radius: 4px;
    background-color: rgba(234,234,234,0.4);
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
`
const PostFileLeft = styled.div`
    float: left;
    width: 7%;
`
const PostFileCenter = styled.div`
    float: left;
    width: 88%;
`
const PostFileName = styled.p`
    opacity: 0.6;
    font-size: 12px;
    color: ${({theme}) => theme.colors.dark_blue};
    font-weight: 500;
    margin: 0px;
    margin-bottom: 5px;
`
const PostFileSize = styled.p`
    opacity: 0.3;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    margin: 0px;
`
const PostFileRight = styled.div`
    width: 5%;
    float: left; 
`
const DownloadBtn = styled.button`
    background-color: rgba(0, 51, 102, 0.2);
    border-radius: 2px;
    border: none;
    outline: none;
    cursor: pointer;
`

const MultipleImg = styled.div`
    float: left;
    width: 28%;
    height: 150px;
    position: relative;
`
const InnerImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 4px;
    cursor: pointer;
`
const ImgCountWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 51, 102, 0.7);
    text-align: center;
    display: table;
    width: 150px;
    height: 100%;
    border-radius: 4px; 
    cursor: pointer;
`
const ImgCount = styled.p`
    margin: 0px;
    display: table-cell;
    color: ${({theme}) => theme.colors.white};
    font-size: 24px;
    font-weight: bold;
    vertical-align: middle;
`

const EventHeader = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 16px;
    font-weight: 600;
    margin: 0px;
    float: left;
    margin-top: 10px;
`
const EventDetail = styled.div`
    padding-top: 10px;
    padding-bottom: 5px;
`
const EventCalendarWrap = styled.div`
    float: left;
    width: 15%;
`
const EventCalendar = styled.div`
    background: linear-gradient(180deg, #EAF4FF 0%, #E5F7F4 100%);
    border-radius: 4px;
    height: 64px;
    width: 71px;
`
const CalendarHeader = styled.div`
    text-align: center;
    background: linear-gradient(38.06deg, #8CC2FF 0%, #EAC4FF 100%);
    border-radius: 4px 4px 0 0;
    width: 100%;
    height: 18px;
    display: table;
`
const CalendarMonth = styled.span`
    color: ${({theme}) => theme.colors.white};
    font-size: 12px;
    display: table-cell;
    vertical-align: middle;
`
const CalendarBody = styled.div`
    display: table;
    text-align: center;
    width: 100%;
    height: 46px;
`
const CalendarDate = styled.span`
    display: table-cell;
    vertical-align: middle;
    color: #8CC2FF;
    font-size: 28px;
    font-weight: 300;
`
const EventNameWrap = styled.div`
    float: left;
    width: 50%
`
const EventName = styled.p` 
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 16px;
    font-weight: 500;
    margin: 0px;
    margin-bottom: 10px;
`
const EventLocale = styled.p`
    opacity: 0.4;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    float: left;
    margin: 0px;
    width: 93%;
`
const LocaleIcon = styled.div`
    display: block;
    float: left;
    width: 7%;
`
const EventMembersWrap = styled.div`
    width: 35%;
    float: left;
    text-align: right;
`
const EventMembers = styled.span`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    opacity: 0.9;
`
const EvtFootLeft = styled.div`
    float: left;
    width: 50%
    padding-top: 8px;
`
const EvtFootRight = styled.div`
    float: left;
    width: 50%;
    text-align: right;
`
const EvtFootBtn1 = styled.button`
    border-radius: 4px;
    background: linear-gradient(2.21deg, 
    ${({theme}) => theme.colors.green} 0%, 
    ${({theme}) => theme.colors.lighter_blue} 100%);
    border: 1px solid #4CC075;
    color: ${({theme}) => theme.colors.white};
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    padding: 10px 20px;
    margin-left: 10px;
    cursor: pointer;
    outline: none;
    letter-spacing: 1px;
`

const EvtFootBtn2 = EvtFootBtn1.extend`
    background: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.green};
`

const ImagePost = props => (
    <React.Fragment>
        <PostCard>
            <PostCardHeader>
                <PostHeaderLeft>
                    <PosterImg image={logo2}/>
                </PostHeaderLeft>
                <PostHeaderMiddle>
                    <PosterName>Bruce Rivera</PosterName>
                    <PosterSch>Student-Electrical and Electronics Engineering-NITK</PosterSch>
                </PostHeaderMiddle>
                <PostHeaderRight>
                    <BookmarkPost onClick={props.bookMark}>
                        <i className={props.state.bookmarked
                            ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>
                    </BookmarkPost>
                </PostHeaderRight>
                <ClearBoth/>
            </PostCardHeader>

            <PostMiddle>
                <Caption>MRI-Safe Robots treat Epilepsy:
                    <CaptionLink href="https://asme.org/kb/news" target="_blank">
                        &nbsp;https://asme.org/kb/news&nbsp;
                    </CaptionLink>
                    reminds me of this.
                </Caption>
                <PostTime>2 hr</PostTime>
                <ClearBoth/>
                <PostContent>
                    <PostImgWrap>
                        <PostImage src={require('../../../../assets/scott-walsh.jpg')} alt="image"/>
                    </PostImgWrap>
                </PostContent>
                <PostActionWrap>
                    <PostActionLeft>
                        <LikeBtn onClick={props.like}>
                            <LikeIcon className="fa fa-thumbs-up" liked={props.state.liked}/>
                            <LikeTxt>like</LikeTxt>
                        </LikeBtn>
                        <LikeBtn>
                            <img src={require('../../../../assets/comment-icon.png')} alt="comment"/>
                            <LikeTxt>Comment</LikeTxt>
                        </LikeBtn>
                        <LikeBtn>
                            <img src={require('../../../../assets/share-icon.png')} alt="share"/>
                            <LikeTxt>Share</LikeTxt>
                        </LikeBtn>
                    </PostActionLeft>
                    <PostActionRight>
                        <ActionCount>26 likes</ActionCount>
                        <ActionCount>8 Comments</ActionCount>
                    </PostActionRight>
                    <ClearBoth/>
                </PostActionWrap>
            </PostMiddle>

            <PostFooter>
                <FooterLeft>
                    <CommentImage image={logo1}/>
                </FooterLeft>
                <FooterMiddle>
                    <FooterForm>
                        <FooterInput type="text" placeholder="Write a comment…"/>
                        <FooterSmiley className="far fa-smile"></FooterSmiley>
                        <input type="file" id="post-file" style={{display: 'none'}}/>
                        <FooterLabel htmlFor="post-file">
                            <FooterSmiley className="fa fa-paperclip"></FooterSmiley>
                        </FooterLabel>
                    </FooterForm>
                </FooterMiddle>
                <ClearBoth/>
            </PostFooter>
        </PostCard>

    </React.Fragment>
)

const FilePost = props => (
    <React.Fragment>
        <PostCard>
            <PostCardHeader>
                <PostHeaderLeft>
                    <PosterImg image={logo3}/>
                </PostHeaderLeft>
                <PostHeaderMiddle>
                    <PosterName>Lettie Owens</PosterName>
                    <PosterSch>Student-Mechanical Engineering-BMS College of Engineering</PosterSch>
                </PostHeaderMiddle>
                <PostHeaderRight>
                    <BookmarkPost onClick={props.bookMark}>
                        <i className={props.state.bookmarked
                            ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>
                    </BookmarkPost>
                </PostHeaderRight>
                <ClearBoth/>
            </PostCardHeader>

            <PostMiddle>
                <Caption>Found this pdf related to thermodynamics</Caption>
                <PostTime>1 hr</PostTime>
                <ClearBoth/>
                <PostContent>
                    <PostFileWrap>
                        <PostFileLeft>
                            <img src={require('../../../../assets/pdf-logo.png')} alt="pdf"/>
                        </PostFileLeft>
                        <PostFileCenter>
                            <PostFileName>Engineering Thermodynamics_Tara Anand.pdf</PostFileName>
                            <PostFileSize>12 MB</PostFileSize>
                        </PostFileCenter>
                        <PostFileRight>
                            <DownloadBtn>
                                <img src={require('../../../../assets/download-file.png')}
                                     alt="download"/>
                            </DownloadBtn>
                        </PostFileRight>
                        <ClearBoth/>
                    </PostFileWrap>
                </PostContent>
                <PostActionWrap>
                    <PostActionLeft>
                        <LikeBtn onClick={props.like}>
                            <LikeIcon className="fa fa-thumbs-up" liked={props.state.liked}/>
                            <LikeTxt>like</LikeTxt>
                        </LikeBtn>
                        <LikeBtn>
                            <img src={require('../../../../assets/comment-icon.png')} alt="comment"/>
                            <LikeTxt>Comment</LikeTxt>
                        </LikeBtn>
                        <LikeBtn>
                            <img src={require('../../../../assets/share-icon.png')} alt="share"/>
                            <LikeTxt>Share</LikeTxt>
                        </LikeBtn>
                    </PostActionLeft>
                    <PostActionRight>
                        <ActionCount>26 likes</ActionCount>
                        <ActionCount>8 Comments</ActionCount>
                    </PostActionRight>
                    <ClearBoth/>
                </PostActionWrap>
            </PostMiddle>

            <PostFooter>
                <FooterLeft>
                    <CommentImage image={logo1}/>
                </FooterLeft>
                <FooterMiddle>
                    <FooterForm>
                        <FooterInput type="text" placeholder="Write a comment…"/>
                        <FooterSmiley className="far fa-smile"></FooterSmiley>
                        <input type="file" id="post-file" style={{display: 'none'}}/>
                        <FooterLabel htmlFor="post-file">
                            {/*<img src={require('../../../../assets/upload-shape.png')}/>*/}
                            <FooterSmiley className="fa fa-paperclip"></FooterSmiley>
                        </FooterLabel>
                    </FooterForm>
                </FooterMiddle>
                <ClearBoth/>
            </PostFooter>
        </PostCard>
    </React.Fragment>
)

const VideoPost = props => (
    <React.Fragment>
        <PostCard>
            <PostCardHeader>
                <PostHeaderLeft>
                    <PosterImg image={logo2}/>
                </PostHeaderLeft>
                <PostHeaderMiddle>
                    <PosterName>Rebbeca Anguilar</PosterName>
                    <PosterSch>Student-Electrical and Electronics Engineering-NITK</PosterSch>
                </PostHeaderMiddle>
                <PostHeaderRight>
                    <BookmarkPost onClick={props.bookMark}>
                        <i className={props.state.bookmarked
                            ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>
                    </BookmarkPost>
                </PostHeaderRight>
                <ClearBoth/>
            </PostCardHeader>

            <PostMiddle>
                <Caption>
                    This video explains fluid statics and dynamics in detail<BR/>
                    Subject :&nbsp;
                    <CaptionLink target="_blank" href="https://asme.org/kb/news">
                        Fluid Mechanics
                    </CaptionLink><BR/>
                    {/*Chapter :&nbsp;*/}
                    {/*<CaptionLink target="_blank" href="https://asme.org/kb/news">*/}
                        {/*Introduction to fluid mechanics*/}
                    {/*</CaptionLink>*/}
                </Caption>
                <PostTime>1 hr</PostTime>
                <ClearBoth/>
                <PostContent>
                    <Player playsInline
                            poster={logo5}
                            className="newsFeedPlay"
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
                </PostContent>
                <PostActionWrap>
                    <PostActionLeft>
                        <LikeBtn onClick={props.like}>
                            <LikeIcon className="fa fa-thumbs-up" liked={props.state.liked}/>
                            <LikeTxt>like</LikeTxt>
                        </LikeBtn>
                        <LikeBtn>
                            <img src={require('../../../../assets/comment-icon.png')} alt="comment"/>
                            <LikeTxt>Comment</LikeTxt>
                        </LikeBtn>
                        <LikeBtn>
                            <img src={require('../../../../assets/share-icon.png')} alt="share"/>
                            <LikeTxt>Share</LikeTxt>
                        </LikeBtn>
                    </PostActionLeft>
                    <PostActionRight>
                        <ActionCount>26 likes</ActionCount>
                        <ActionCount>8 Comments</ActionCount>
                    </PostActionRight>
                    <ClearBoth/>
                </PostActionWrap>
            </PostMiddle>

            <PostFooter>
                <FooterLeft>
                    <CommentImage image={logo1}/>
                </FooterLeft>
                <FooterMiddle>
                    <FooterForm>
                        <FooterInput type="text" placeholder="Write a comment…"/>
                        <FooterSmiley className="far fa-smile"></FooterSmiley>
                        <input type="file" id="post-file" style={{display: 'none'}}/>
                        <FooterLabel htmlFor="post-file">
                            {/*<img src={require('../../../../assets/upload-shape.png')}/>*/}
                            <FooterSmiley className="fa fa-paperclip"></FooterSmiley>
                        </FooterLabel>
                    </FooterForm>
                </FooterMiddle>
                <ClearBoth/>
            </PostFooter>
        </PostCard>
    </React.Fragment>
)

const MultipleImages = props => (
    <React.Fragment>
        <PostCard>
            <PostCardHeader>
                <PostHeaderLeft>
                    <PosterImg image={logo5}/>
                </PostHeaderLeft>
                <PostHeaderMiddle>
                    <PosterName>Stanford University</PosterName>
                    <PosterSch>California</PosterSch>
                </PostHeaderMiddle>
                <PostHeaderRight>
                    <BookmarkPost onClick={props.bookMark}>
                        <i className={props.state.bookmarked
                            ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>
                    </BookmarkPost>
                </PostHeaderRight>
                <ClearBoth/>
            </PostCardHeader>

            <PostMiddle>
                <Caption>
                    <CaptionLink target="_blank" href="https://asme.org/kb/news">
                        Inter Collegiate Band Competition
                    </CaptionLink><br/><br/>
                    Event Date: &nbsp;<PostEvent>April 27 2018</PostEvent><br/><br/>
                    Event Location:&nbsp;
                    <PostEvent>
                        University Grounds, BMS College of Engineering, Bangalore
                    </PostEvent>
                </Caption>
                <PostTime>1 hr</PostTime>
                <ClearBoth/>
                <PostContent>
                    <MultipleImg>
                        <InnerImg src={logo3} alt="image"/>
                    </MultipleImg>
                    <MultipleImg>
                        <InnerImg src={logo2} alt="image"/>
                    </MultipleImg>
                    <MultipleImg>
                        <InnerImg src={logo} alt="image"/>
                        <ImgCountWrap>
                            <ImgCount>+12</ImgCount>
                        </ImgCountWrap>
                    </MultipleImg>
                    <ClearBoth/>
                </PostContent>
                <PostActionWrap>
                    <PostActionLeft>
                        <LikeBtn onClick={props.like}>
                            <LikeIcon className="fa fa-thumbs-up" liked={props.state.liked}/>
                            <LikeTxt>like</LikeTxt>
                        </LikeBtn>
                        <LikeBtn>
                            <img src={require('../../../../assets/comment-icon.png')} alt="comment"/>
                            <LikeTxt>Comment</LikeTxt>
                        </LikeBtn>
                        <LikeBtn>
                            <img src={require('../../../../assets/share-icon.png')} alt="share"/>
                            <LikeTxt>Share</LikeTxt>
                        </LikeBtn>
                    </PostActionLeft>
                    <PostActionRight>
                        <ActionCount>26 likes</ActionCount>
                        <ActionCount>8 Comments</ActionCount>
                    </PostActionRight>
                    <ClearBoth/>
                </PostActionWrap>
            </PostMiddle>

            <PostFooter>
                <FooterLeft>
                    <CommentImage image={logo1}/>
                </FooterLeft>
                <FooterMiddle>
                    <FooterForm>
                        <FooterInput type="text" placeholder="Write a comment…"/>
                        <FooterSmiley className="far fa-smile"></FooterSmiley>
                        <input type="file" id="post-file" style={{display: 'none'}}/>
                        <FooterLabel htmlFor="post-file">
                            <FooterSmiley className="fa fa-paperclip"></FooterSmiley>
                        </FooterLabel>
                    </FooterForm>
                </FooterMiddle>
                <ClearBoth/>
            </PostFooter>
        </PostCard>
    </React.Fragment>
)
const EventPost = props => (
    <React.Fragment>
        <PostCard>
            <PostCardHeader>
                <EventHeader>Inter College Event</EventHeader>
                <PostHeaderRight style={{float: 'right'}}>
                    <BookmarkPost onClick={props.bookMark}>
                        <i className={props.state.bookmarked
                            ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>
                    </BookmarkPost>
                </PostHeaderRight>
                <ClearBoth/>
            </PostCardHeader>
            <PostMiddle>
                <PostContent>
                    <PostImgWrap>
                        <PostImage src={logo11} alt="image"/>
                    </PostImgWrap>
                    <EventDetail>
                        <EventCalendarWrap>
                            <EventCalendar>
                                <CalendarHeader>
                                    <CalendarMonth>MAY</CalendarMonth>
                                </CalendarHeader>
                                <CalendarBody>
                                    <CalendarDate>30</CalendarDate>
                                </CalendarBody>
                            </EventCalendar>
                        </EventCalendarWrap>
                        <EventNameWrap>
                            <EventName>Backyard Band Live</EventName>
                            <LocaleIcon>
                                <img src={require('../../../../assets/destination-icon.png')}
                                     alt="img"/>
                            </LocaleIcon>
                            <EventLocale>RVCE, R V Vidyanikethan College,
                                Mysuru Road Bengaluru - 560 059</EventLocale>
                            <ClearBoth/>
                        </EventNameWrap>
                        <EventMembersWrap>
                            <EventMembers>
                                <b>18&nbsp;</b>
                                Members Attending
                            </EventMembers>
                        </EventMembersWrap>
                        <ClearBoth/>
                    </EventDetail>
                </PostContent>
            </PostMiddle>
            <PostFooter>
                <EvtFootLeft>
                    <LikeBtn>
                        <img src={require('../../../../assets/share-icon.png')} alt="share"/>
                        <LikeTxt>Share</LikeTxt>
                    </LikeBtn>
                </EvtFootLeft>
                <EvtFootRight>
                    <EvtFootBtn2>INTERESTED</EvtFootBtn2>
                    <EvtFootBtn1>GOING</EvtFootBtn1>
                </EvtFootRight>
                <ClearBoth/>
            </PostFooter>
        </PostCard>
    </React.Fragment>
)

export const FeedCenter = props => (
    <React.Fragment>
        <CenterContainer>
            {/*New Post Text area Container*/}
            <NewPostWrap>
                <PostTextArea placeholder="Write something..."/>
                <UploadFileContainer>
                    <UploadMediaWrap>
                        <input type="file" style={{display: 'none'}} id="upload-photo"/>
                        <UploadLabel htmlFor="upload-photo">
                            <i className="fa fa-camera"
                               style={{fontWeight: 'bold', fontSize: '16px',
                                   marginRight: '8px'}}></i>
                            <span>Photo / Video</span>
                        </UploadLabel>
                    </UploadMediaWrap>
                    <UploadMediaWrap>
                        <input type="file" style={{display: 'none'}} id="upload-doc"/>
                        <UploadLabel htmlFor="upload-doc">
                            <i className="fa fa-file"
                               style={{fontWeight: 'bold', fontSize: '16px',
                                   marginRight: '8px'}}></i>
                            <span>File / Document</span>
                        </UploadLabel>
                    </UploadMediaWrap>
                    <PostBtnWrap>
                        <PostBtn>
                            <i className="fab fa-telegram-plane" style={{transform: 'rotate(0.9rad)'}}></i>
                        </PostBtn>
                    </PostBtnWrap>
                    <ClearBoth/>
                </UploadFileContainer>
            </NewPostWrap>

            {/* Post Card Wrap */}
            <PostContainer>
                <ImagePost bookMark={props.bookMark} state={props.state} like={props.like}/>
                <FilePost bookMark={props.bookMark} state={props.state} like={props.like}/>
                <VideoPost bookMark={props.bookMark} state={props.state} like={props.like}/>
                <MultipleImages bookMark={props.bookMark} state={props.state} like={props.like}/>
                <EventPost bookMark={props.bookMark} state={props.state}/>
            </PostContainer>
        </CenterContainer>
    </React.Fragment>
)