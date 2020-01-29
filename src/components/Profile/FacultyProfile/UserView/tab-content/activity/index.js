import React, {Fragment} from 'react';
import styled from 'styled-components';
import "../../../../../../../node_modules/video-react/dist/video-react.css";
import "../../../../../../static/main.css";
import {Player} from 'video-react';

import {ClearBoth} from "../../../../../Core/reusable-styles";

import img1 from '../../../../../../assets/profile3.jpeg'
import icon1 from '../../../../../../assets/comment-icon.png'
import bookmarkIcon from '../../../../../../assets/bookmarked-icon.png'
import shareIcon from '../../../../../../assets/share-lg.png'
import shareIconSmall from '../../../../../../assets/share-icon.png'
import downloadFile from '../../../../../../assets/download-file.png'
import pdfIcon from '../../../../../../assets/pdf-logo.png'
import imageExample from '../../../../../../assets/scott-walsh.jpg'
import destinationIcon from '../../../../../../assets/destination-icon.png'

const PostContainer = styled.div`
    border-bottom: 1px solid rgba(0,51,102,0.07);
    margin: 0px -30px;
    padding: 15px 0px;
`
const PostsWrap = styled.div`
    width: 90%;
    margin: auto;
`
const PosterLeft = styled.div`
    float: left;
    width: 8%;
`
const PosterImg = styled.div`
    height: 44px;
    width: 44px;
    border-radius: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    background-color: rgba(0,51,102,0.05);
`
const PostRight = styled.div`
    float: left;
    width: 92%;
`
const PostHeader = styled.div`  
    padding-top: 7px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(0,51,102,0.07);
`
const PostHeaderLeft = styled.div`
    float: left;
`
const PosterName = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
    font-weight: 600;
    margin: 0px;
    margin-bottom: 5px;
`
const PosterCollege = styled.p`
    opacity: 0.4;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    margin: 0px;
`
const PostHeaderRight = styled.div`
    float: right;
    text-align: right;
`
const PostTime = styled.p`
    margin: 0px;
    opacity: 0.6;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
`
const PostBody = styled.div`
    padding: 10px 0px;
`
const PostBodyLeft = styled.div`
    float: left;
    width: 70%;
`
const PostCaption = styled.p`
    opacity: 0.8;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
    line-height: 20px;
    margin: 0px;
    margin-bottom: 10px;
`
const CaptionLink = styled.a`
    color: #0645AD;
    text-decoration: none;
`
const PostActionWrap = styled.div`
    padding-top: 5px;
`
const PostActionLeft = styled.div`
    float: left;
    width: 50%
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
const PostFooter = styled.div`
    border-top: 1px solid rgba(0, 51, 102, 0.07);
    padding-top: 10px;
`
const FooterLeft = styled.div`
    float: left;
    width: 6%;
`
const CommentImage = PosterImg.extend`
    width: 35px;
    height: 35px;
`
const FooterMiddle = styled.div`
    width: 94%;
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
const PostBodyRight = styled.div`
    float: right;
`
const PostContent = styled.div`
    width: 100%;
`

//Multiple Images
const MultipleImages = styled.div`
    float: left;
    width: 33.3333%;
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
const BookmarkedBtn = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
`


//Post File
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

//Post Image
const PostImgWrap = styled.div`
    max-height: 168px;
    overflow: hidden;
`
const PostImage = styled.img`
    width: 100%;
    border-radius: 4px;
`

//Event Post
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

const MultipleImg = props => (
  <Fragment>
    <PostContainer>
      <PostsWrap>
        <PosterLeft>
          <PosterImg image={img1}/>
        </PosterLeft>
        <PostRight>
          <PostHeader>
            <PostHeaderLeft>
              <PosterName>Rajesh Verma</PosterName>
              <PosterCollege>Student-Electrical and Electronics Engineering-NITK</PosterCollege>
            </PostHeaderLeft>
            <PostHeaderRight>
              <PostTime>2 minutes ago</PostTime>
            </PostHeaderRight>
            <ClearBoth/>
          </PostHeader>
          <PostBody>
            <PostBodyLeft>
              <PostCaption>
                MRI-Safe Robots treat Epilepsy:
                <CaptionLink href="https://asme.org/kb/news" target="_blank">
                  &nbsp;https://asme.org/kb/news&nbsp;
                </CaptionLink>
                reminds me of this.
              </PostCaption>
              <PostContent>
                <MultipleImages>
                  <InnerImg src={img1} alt="image"/>
                </MultipleImages>
                <MultipleImages>
                  <InnerImg src={img1} alt="image"/>
                </MultipleImages>
                <MultipleImages>
                  <InnerImg src={img1} alt="image"/>
                  <ImgCountWrap>
                    <ImgCount>+12</ImgCount>
                  </ImgCountWrap>
                </MultipleImages>
                <ClearBoth/>
              </PostContent>
              <PostActionWrap>
                <PostActionLeft>
                  <LikeBtn onClick={props.like}>
                    <LikeIcon className="fa fa-thumbs-up"/>
                    <LikeTxt>26 likes</LikeTxt>
                  </LikeBtn>
                  <LikeBtn>
                    <img src={icon1} alt="comment"/>
                    <LikeTxt>8 Comments</LikeTxt>
                  </LikeBtn>
                </PostActionLeft>
                <ClearBoth/>
              </PostActionWrap>
            </PostBodyLeft>
            <PostBodyRight>
              <BookmarkedBtn>
                <img alt="share" src={shareIcon}/>
              </BookmarkedBtn>
              <BookmarkedBtn>
                <img alt="bookmarked" src={bookmarkIcon}/>
              </BookmarkedBtn>
            </PostBodyRight>
            <ClearBoth/>
          </PostBody>
          <PostFooter>
            <FooterLeft>
              <CommentImage image={img1}/>
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
        </PostRight>
        <ClearBoth/>
      </PostsWrap>
    </PostContainer>
  </Fragment>
)

const FilePost = props => (
  <Fragment>
    <PostContainer>
      <PostsWrap>
        <PosterLeft>
          <PosterImg image={img1}/>
        </PosterLeft>
        <PostRight>
          <PostHeader>
            <PostHeaderLeft>
              <PosterName>Rajesh Verma</PosterName>
              <PosterCollege>Student-Electrical and Electronics Engineering-NITK</PosterCollege>
            </PostHeaderLeft>
            <PostHeaderRight>
              <PostTime>2 minutes ago</PostTime>
            </PostHeaderRight>
            <ClearBoth/>
          </PostHeader>
          <PostBody>
            <PostBodyLeft>
              <PostCaption>
                Found this PDF in the documents folder
              </PostCaption>
              <PostContent>
                <PostFileWrap>
                  <PostFileLeft>
                    <img src={pdfIcon} alt="pdf"/>
                  </PostFileLeft>
                  <PostFileCenter>
                    <PostFileName>Engineering Thermodynamics_Tara Anand.pdf</PostFileName>
                    <PostFileSize>12 MB</PostFileSize>
                  </PostFileCenter>
                  <PostFileRight>
                    <DownloadBtn>
                      <img src={downloadFile}
                           alt="download"/>
                    </DownloadBtn>
                  </PostFileRight>
                  <ClearBoth/>
                </PostFileWrap>
              </PostContent>
              <PostActionWrap>
                <PostActionLeft>
                  <LikeBtn onClick={props.like}>
                    <LikeIcon className="fa fa-thumbs-up"/>
                    <LikeTxt>26 likes</LikeTxt>
                  </LikeBtn>
                  <LikeBtn>
                    <img src={icon1} alt="comment"/>
                    <LikeTxt>8 Comments</LikeTxt>
                  </LikeBtn>
                </PostActionLeft>
                <ClearBoth/>
              </PostActionWrap>
            </PostBodyLeft>
            <PostBodyRight>
              <BookmarkedBtn>
                <img alt="share" src={shareIcon}/>
              </BookmarkedBtn>
              <BookmarkedBtn>
                <img alt="bookmarked" src={bookmarkIcon}/>
              </BookmarkedBtn>
            </PostBodyRight>
            <ClearBoth/>
          </PostBody>
          <PostFooter>
            <FooterLeft>
              <CommentImage image={img1}/>
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
        </PostRight>
        <ClearBoth/>
      </PostsWrap>
    </PostContainer>
  </Fragment>
)

const ImagePost = props => (
  <Fragment>
    <PostContainer>
      <PostsWrap>
        <PosterLeft>
          <PosterImg image={img1}/>
        </PosterLeft>
        <PostRight>
          <PostHeader>
            <PostHeaderLeft>
              <PosterName>Rajesh Verma</PosterName>
              <PosterCollege>Student-Electrical and Electronics Engineering-NITK</PosterCollege>
            </PostHeaderLeft>
            <PostHeaderRight>
              <PostTime>2 minutes ago</PostTime>
            </PostHeaderRight>
            <ClearBoth/>
          </PostHeader>
          <PostBody>
            <PostBodyLeft>
              <PostCaption>
                Automotive prototyping from Indian institute of Technology-Pawai
                <CaptionLink href="https://asme.org/kb/news" target="_blank">
                  &nbsp;https://asme.org/kb/news&nbsp;
                </CaptionLink>
              </PostCaption>
              <PostContent>
                <PostImgWrap>
                  <PostImage src={imageExample} alt="image"/>
                </PostImgWrap>
              </PostContent>
              <PostActionWrap>
                <PostActionLeft>
                  <LikeBtn onClick={props.like}>
                    <LikeIcon className="fa fa-thumbs-up"/>
                    <LikeTxt>26 likes</LikeTxt>
                  </LikeBtn>
                  <LikeBtn>
                    <img src={icon1} alt="comment"/>
                    <LikeTxt>8 Comments</LikeTxt>
                  </LikeBtn>
                </PostActionLeft>
                <ClearBoth/>
              </PostActionWrap>
            </PostBodyLeft>
            <PostBodyRight>
              <BookmarkedBtn>
                <img alt="share" src={shareIcon}/>
              </BookmarkedBtn>
              <BookmarkedBtn>
                <img alt="bookmarked" src={bookmarkIcon}/>
              </BookmarkedBtn>
            </PostBodyRight>
            <ClearBoth/>
          </PostBody>
          <PostFooter>
            <FooterLeft>
              <CommentImage image={img1}/>
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
        </PostRight>
        <ClearBoth/>
      </PostsWrap>
    </PostContainer>
  </Fragment>
)

const VideoPost = props => (
  <Fragment>
    <PostContainer>
      <PostsWrap>
        <PosterLeft>
          <PosterImg image={img1}/>
        </PosterLeft>
        <PostRight>
          <PostHeader>
            <PostHeaderLeft>
              <PosterName>Rajesh Verma</PosterName>
              <PosterCollege>Student-Electrical and Electronics Engineering-NITK</PosterCollege>
            </PostHeaderLeft>
            <PostHeaderRight>
              <PostTime>2 minutes ago</PostTime>
            </PostHeaderRight>
            <ClearBoth/>
          </PostHeader>
          <PostBody>
            <PostBodyLeft>
              <PostCaption>
                Automotive prototyping from Indian institute of Technology-Pawai
                <CaptionLink href="https://asme.org/kb/news" target="_blank">
                  &nbsp;https://asme.org/kb/news&nbsp;
                </CaptionLink>
              </PostCaption>
              <PostContent>
                <Player playsInline
                        poster={imageExample}
                        className="newsFeedPlay"
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
              </PostContent>
              <PostActionWrap>
                <PostActionLeft>
                  <LikeBtn onClick={props.like}>
                    <LikeIcon className="fa fa-thumbs-up"/>
                    <LikeTxt>26 likes</LikeTxt>
                  </LikeBtn>
                  <LikeBtn>
                    <img src={icon1} alt="comment"/>
                    <LikeTxt>8 Comments</LikeTxt>
                  </LikeBtn>
                </PostActionLeft>
                <ClearBoth/>
              </PostActionWrap>
            </PostBodyLeft>
            <PostBodyRight>
              <BookmarkedBtn>
                <img alt="share" src={shareIcon}/>
              </BookmarkedBtn>
              <BookmarkedBtn>
                <img alt="bookmarked" src={bookmarkIcon}/>
              </BookmarkedBtn>
            </PostBodyRight>
            <ClearBoth/>
          </PostBody>
          <PostFooter>
            <FooterLeft>
              <CommentImage image={img1}/>
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
        </PostRight>
        <ClearBoth/>
      </PostsWrap>
    </PostContainer>
  </Fragment>
)

const EventPost = props => (
  <Fragment>
    <PostContainer>
      <PostsWrap>
        <PosterLeft>
          <PosterImg image={img1}/>
        </PosterLeft>
        <PostRight>
          <PostHeader>
            <PostHeaderLeft>
              <PosterName>Rajesh Verma</PosterName>
              <PosterCollege>Student-Electrical and Electronics Engineering-NITK</PosterCollege>
            </PostHeaderLeft>
            <PostHeaderRight>
              <PostTime>2 minutes ago</PostTime>
            </PostHeaderRight>
            <ClearBoth/>
          </PostHeader>
          <PostBody>
            <PostBodyLeft>
              <PostContent>
                <PostImgWrap>
                  <PostImage src={img1} alt="image"/>
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
                      <img src={destinationIcon}
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
              <PostActionWrap>
                <PostActionLeft>
                  <LikeBtn onClick={props.like}>
                    <LikeIcon className="fa fa-thumbs-up"/>
                    <LikeTxt>26 likes</LikeTxt>
                  </LikeBtn>
                  <LikeBtn>
                    <img src={icon1} alt="comment"/>
                    <LikeTxt>8 Comments</LikeTxt>
                  </LikeBtn>
                </PostActionLeft>
                <ClearBoth/>
              </PostActionWrap>
              <PostFooter style={{marginTop: '5px'}}>
                <EvtFootLeft>
                  <LikeBtn>
                    <img src={shareIcon} alt="share"/>
                    <LikeTxt>Share</LikeTxt>
                  </LikeBtn>
                </EvtFootLeft>
                <EvtFootRight>
                  <EvtFootBtn2>INTERESTED</EvtFootBtn2>
                  <EvtFootBtn1>GOING</EvtFootBtn1>
                </EvtFootRight>
                <ClearBoth/>
              </PostFooter>
            </PostBodyLeft>
            <PostBodyRight>
              <BookmarkedBtn>
                <img alt="share" src={shareIconSmall}/>
              </BookmarkedBtn>
              <BookmarkedBtn>
                <img alt="bookmarked" src={bookmarkIcon}/>
              </BookmarkedBtn>
            </PostBodyRight>
            <ClearBoth/>
          </PostBody>
        </PostRight>
        <ClearBoth/>
      </PostsWrap>
    </PostContainer>
  </Fragment>
)

const ViewAllWrap = styled.div`
    width: 100%;
    padding-top: 15px;
    text-align: center;
    color: ${({theme}) => theme.colors.green};
    font-size: 14px;
`

export class FacultyActivity extends React.Component {

  render() {
    return (
      <Fragment>
        <MultipleImg/>
        <FilePost/>
        <ImagePost/>
        <VideoPost/>
        <EventPost/>
        <ViewAllWrap>View All</ViewAllWrap>
      </Fragment>
    )
  }
}
