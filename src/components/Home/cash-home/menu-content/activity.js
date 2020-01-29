import React from 'react';
import styled from 'styled-components';

import logo from '../../../../assets/Caterpillar.png'
import logo3 from '../../../../assets/pexels-photo-567630.jpeg';

const TableContainer = styled.div`
    margin-top: 30px;
`
const PaginateWrap = styled.div`
    text-align: right;
    margin-top: 10px;
`
const PaginateCount = styled.span`
    color: #4A4A4A;
    font-size: 13px;
    margin-right: 10px;
`
const PaginateBtn = styled.button`
    border: 1px solid #C7C7C7;
    background-color: #FFFFFF;
    padding: 1px 10px;
    color: #4A4A4A;
    outline: none;
    cursor: pointer;
`
const UnorderedList = styled.ul`
    width: 100%;
    padding: 1px
    margin: auto;
    background-color: white;
    
`
const ListItem = styled.li`
    list-style-type: none;
    padding: 10px 25px ;
    &:hover{
        background-color:#dcdcda;
    }

`
const ListitemLink = styled.a`
    text-decoration: none;
    color: blue;
    display: block;
    width: 100%;
`
const ActivityListImage = styled.img`

    float: left;
    margin: 0 15px 0 0;
    width:35px;
    height: 35px;
    border: 1px solid #ddd;
    border-radius: 100%;

`
const InnerSpanTitle = styled.h3`
    color:#25449E;
`
const ActivityMeta = styled.h5`
    color:grey;

`
const AmountSpan = styled.span`
    color:black;
    float: right;
    padding: 0px, 10px, 20px
    
`
const ListWrapperInner = styled.div`
padding: 0px 70px;
    
`




const ActivityList = props => (
    <React.Fragment>
        <TableContainer>
            <h1>Activities</h1>
            <UnorderedList>
                {transactionData.map((transaction, index)=>(
<ListItem key={index} index={index+1}>
<ListitemLink>
                        <ActivityListImage src={transaction.image} />
                        <ListWrapperInner>


                            <InnerSpanTitle>
                                {transaction.title}
                    </InnerSpanTitle>

                            <ActivityMeta>
                                {transaction.source}
                        <AmountSpan>
                                    {transaction.amount}
                    </AmountSpan>
                            </ActivityMeta>
                        </ListWrapperInner>

                    </ListitemLink>
</ListItem>
                ))}
            </UnorderedList>
        </TableContainer>
        <PaginateWrap>
            <PaginateCount>1 - 50 of 1,572</PaginateCount>
            <PaginateBtn><i className="fas fa-caret-left"></i></PaginateBtn>
            <PaginateBtn><i className="fas fa-caret-right"></i></PaginateBtn>
        </PaginateWrap>
    </React.Fragment>
)
export class Activity extends React.Component {
    state = {
        activeTab: 1
    }
    render() {
        return (
            <React.Fragment>
                <React.Fragment>
                    <ActivityList />
                </React.Fragment>
            </React.Fragment>
        )
    }
}
const transactionData = [
    {
        id: '001',
        title: 'Car Wash',
        source: 'Chase',
        amount: '$7',
        time: 'Thursdays',
        status: 'Completed',
        location: 'Atlanta GA',
        image: logo
    },
    {
        id: '002',
        title: 'Apple Inc',
        source: 'Cash Card',
        amount: '$700',
        time: 'Monday',
        status: 'Pending',
        location: 'Capichino Califronia',
        image: logo3
    }
]