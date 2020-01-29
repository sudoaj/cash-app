import React, {Fragment} from 'react';
import styled from 'styled-components';

import {ClearBoth} from "../../../../../Core/reusable-styles";
import searchIcon from '../../../../../../assets/search-symbol.png'

import img1 from '../../../../../../assets/pexels-register.jpeg'
import img2 from '../../../../../../assets/lauren-mancke.jpg'
import img3 from '../../../../../../assets/airb1.jpg'

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

const ArticlesContainer = styled.div`
    margin-top: 15px;
`
const ArticlesHeader = styled.div`
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0,51,102,0.07);
`
const ArticlesType = styled.p`
    margin: 0px;
    opacity: 0.7;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
    float: left;
`
const ViewAllArticle = styled.p`
    margin: 0px;
    color: ${({theme}) => theme.colors.green};
    font-size: 12px;
    font-weight: bold;
    float: right;
    cursor: pointer;
`
const ArticlesBody = styled.div`
    padding: 0px 15px;
`
const EachArticle = styled.div`
    padding: 20px 0;
    border-bottom: 1px dashed rgba(0,51,102,0.1);
    transition: 0.3s;
`
const ArticleLeft = styled.div`
    float: left;
`
const ArticleName = styled.p`
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 14px;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 5px;
`
const ArticleDate = styled.p`
    opacity: 0.4;
    color: ${({theme}) => theme.colors.dark_blue};
    font-size: 12px;
    margin: 0px;
`
const ArticleRight = styled.div`
    float: right;
    text-align: right;
    height: 100%;
    padding-top: 10px;
`
const WriteBtn = styled.button`
    border: none;
    outline: none;
    color: rgb(200, 212, 221);
    cursor: pointer;
    display: none;
    transition: 0.3s;
    ${EachArticle}:hover & {
        display: inline;
    }
`
const ThirdViewArticleWrap = styled.div``
const ThirdArticle = styled.div`
  float: left;
  width: 32.3333%;
  margin-right: ${props => props.index % 3 === 0 ? '0' : '1%'};
  margin-bottom: 15px;
`
const ThirdArticleInner = styled.div`
  height: 234px;
  width: 258px;
  border-radius: 4px;
  background-color: rgba(255,255,255,0.9);
  border: 0.5px solid #D0D3E2;
  transition: 0.3s;
  &:hover{
    box-shadow: 0 0 20px 3px rgba(10,37,62,0.1);
    border-color: rgba(10,37,62,0.1);
  }
`
const ThirdArticleHeader = styled.div`
  height: 82px;
  width: 100%;
  border-radius: 4px 4px 0 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.image});
`
const ThirdArticleBody = styled.div`
  text-align: center;
`
const ThirdArticleTitle = styled.p`
  margin: 15px auto;
  color: ${({theme}) => theme.colors.dark_blue};
  opacity: 0.9;
  font-size: 14px;
  font-weight: 600;
  max-width: 190px;
`
const ThirdArticleActionsWrap = styled.div`
  margin-bottom: 24px;
`

const ThirdArticleActions = styled.div`
  display: inline;
  margin-right: ${props => props.last ? '0' : '20px'};
`
const ActionIcon = styled.i`
  // color: #BACAD8;
  color: rgba(0,51,102,0.2);
  font-size: 13px;
  margin-right: 5px;
`
const ActionCount = styled.span`
  opacity: 0.5;
  color: ${({theme}) => theme.colors.dark_blue};
  font-size: 12px;
`

const ThirdArticleCategory = styled.span`
  padding: 5px 10px;
  background-color: rgba(0,51,102,0.07);
  border-radius: 4px;
  color: rgba(0,51,102,0.45);
  font-size: 12px;
`
const ViewAllWrap = styled.div`
    width: 100%;
    padding-top: 15px;
    text-align: center;
    color: ${({theme}) => theme.colors.green};
    font-size: 14px;
`

export class FacultyArticles extends React.Component {

  state = {
    search: ''
  }

  handleSearch = (event) => {
    this.setState({search: event.target.value.substr(0, 20)})
  }

  render() {
    let filteredArticles = allArticles.filter(
      (article) => {
        return article.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    )
    return (
      <Fragment>
        {this.props.thirdView ? (
          <Fragment>
            <ThirdViewArticleWrap>
              {articles.map((article, index) => (
                <ThirdArticle key={index}>
                  <ThirdArticleInner>
                    <ThirdArticleHeader image={article.image}/>
                    <ThirdArticleBody>
                      <ThirdArticleTitle>{article.name}</ThirdArticleTitle>
                      <ThirdArticleActionsWrap>
                        <ThirdArticleActions>
                          <ActionIcon className="fa fa-star"/>
                          <ActionCount>2k</ActionCount>
                        </ThirdArticleActions>
                        <ThirdArticleActions>
                          <ActionIcon className="fa fa-thumbs-up"/>
                          <ActionCount>19k</ActionCount>
                        </ThirdArticleActions>
                        <ThirdArticleActions last>
                          <ActionIcon className="fa fa-share"/>
                          <ActionCount>5k</ActionCount>
                        </ThirdArticleActions>
                      </ThirdArticleActionsWrap>
                      <ThirdArticleCategory>{article.category}</ThirdArticleCategory>
                    </ThirdArticleBody>
                  </ThirdArticleInner>
                </ThirdArticle>
              ))}
              <ClearBoth/>
            </ThirdViewArticleWrap>
            <ViewAllWrap>View all</ViewAllWrap>
          </Fragment>
        ) : (
          <Fragment>
            <SearchContainer>
              <SearchBorder>
                <SearchForm>
                  <SearchBtn type="submit">
                    <img alt="search" src={searchIcon}/>
                  </SearchBtn>
                  <SearchInput type="text" placeholder="Search.."
                               value={this.state.search} onChange={this.handleSearch}/>
                  <ClearBoth/>
                </SearchForm>
              </SearchBorder>
            </SearchContainer>
            <ArticlesContainer>
              <ArticlesHeader>
                <ArticlesType>Drafts</ArticlesType>
                <ViewAllArticle>View All</ViewAllArticle>
                <ClearBoth/>
              </ArticlesHeader>
              <ArticlesBody>
                {filteredArticles.map((article, index) => (
                  <div key={index}>
                    {article.category === 'Drafts' ? (
                      <EachArticle>
                        <ArticleLeft>
                          <ArticleName>{article.name}</ArticleName>
                          <ArticleDate>{article.time}</ArticleDate>
                        </ArticleLeft>
                        <ArticleRight>
                          <WriteBtn>
                            <i className="fas fa-pencil-alt"></i>
                          </WriteBtn>
                          <WriteBtn>
                            <i className="fas fa-trash-alt"></i>
                          </WriteBtn>
                        </ArticleRight>
                        <ClearBoth/>
                      </EachArticle>
                    ) : (
                      ''
                    )}
                  </div>
                ))}
              </ArticlesBody>
            </ArticlesContainer>
            <ArticlesContainer>
              <ArticlesHeader>
                <ArticlesType>Published</ArticlesType>
                <ViewAllArticle>View All</ViewAllArticle>
                <ClearBoth/>
              </ArticlesHeader>
              <ArticlesBody>
                {filteredArticles.map((article, index) => (
                  <div key={index}>
                    {article.category === 'Published' ? (
                      <EachArticle>
                        <ArticleLeft>
                          <ArticleName>{article.name}</ArticleName>
                          <ArticleDate>{article.time}</ArticleDate>
                        </ArticleLeft>
                        <ArticleRight>
                          <WriteBtn>
                            <i className="fas fa-pencil-alt"></i>
                          </WriteBtn>
                          <WriteBtn>
                            <i className="fas fa-trash-alt"></i>
                          </WriteBtn>
                        </ArticleRight>
                        <ClearBoth/>
                      </EachArticle>
                    ) : (
                      ''
                    )}
                  </div>
                ))}

              </ArticlesBody>
            </ArticlesContainer>
          </Fragment>
        )}
      </Fragment>
    )
  }
}

const allArticles = [
  {
    name: 'Making the Emotional Robot',
    time: 'Created 2 hours ago',
    category: 'Drafts'
  },
  {
    name: 'Artificial Intelligence Transforms Manufacturing',
    time: 'Created on 3rd May 2018',
    category: 'Drafts'
  },
  {
    name: 'The State of the Hacks',
    time: 'Created on 4th June 2018',
    category: 'Drafts'
  },
  {
    name: 'In defence of voice interfaces',
    time: 'Created 2nd June 2018',
    category: 'Published'
  },
  {
    name: 'GoSnack Cycling — Inspiration Phase',
    time: 'Created 22nd June 2018',
    category: 'Published'
  },
  {
    name: 'Space Exploration: The Gift That Keeps on Giving',
    time: 'Created on 30 June 2018',
    category: 'Published'
  },
]


const searchNames = ['Making the Emotional Robot', 'Artificial Intelligence Transforms Manufacturing',
  'The State of the Hacks', 'In defence of voice interfaces',
  'GoSnack Cycling Inspiration Phase', 'Space Exploration, The Gift that keeps on Giving']
const category = ['Artificial Intelligence', 'Artificial Intelligence', 'Hacking',
  'User Interface', 'Technology', 'Science']
const images = [ img1, img2, img3, img1, img1, img3 ]


const articles = Array.from(Array(6).keys()).map((value, index, array) => ({
  id: Math.floor(Math.random() * Math.floor(900)),
  name: searchNames[index],
  category: category[index],
  image: images[index],
  onClick: () => {}
}))
