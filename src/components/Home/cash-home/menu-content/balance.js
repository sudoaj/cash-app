import React from 'react';
import styled from 'styled-components';



import logo from '../../../../assets/Caterpillar.png'
import logo3 from '../../../../assets/pexels-photo-567630.jpeg';

const TableContainer = styled.div`
    margin-top: 30px;
`

const BalanceContainer = styled.div`
    width: 100%;
    padding: 1px
    padding-bottom: 100px
    margin: auto;
    background-color: white;
    text-align:center;

`
const BalanceAmount = styled.h1`
    color:#25449E
    font-size: 100px
`
const CardContainer = styled.div`
    background-color: black;
    margin:auto;
    width: 50%;
    padding:20px 20px;
    margin-bottom:20px
    border-radius: 15px

`
const OtherContainer = styled.div`

    margin:auto;
    width: 50%;
    padding:20px 20px;
    margin-bottom:20px
    border: 1px solid #ddd;
    border-radius: 15px



`

const CardNumber = styled.p`
    text-align:right;
    color:white;
    font-size:20px;
    letter-spacing:5px

`
const CardInfo = styled.p`
    color:white;
    text-align: left;
`




const ActivityList = props => (
    <React.Fragment>
        <TableContainer>
            <h1>Balance</h1>
            <BalanceContainer>
                <BalanceAmount>$2.99</BalanceAmount>

                <CardContainer>
                    <CardNumber > 1293  1233 1233 1334</CardNumber>
                    <CardInfo style={{ textAlign: "right" }}>CVV: * * *</CardInfo>
                    <CardInfo style={{ textAlign: "right" }}>EXP: 04 / 24  </CardInfo>

                    <CardInfo>ABDULSALAM AJAYI</CardInfo>
                    <CardInfo style={{ textAlign: "right", fontSize:"20px", fontWeight:"900" }}>VISA  </CardInfo>
                </CardContainer>

                <OtherContainer>
                Direct Deposit

                <CardInfo style={{ color: "black" }}>Routing Number:</CardInfo>
                    <CardNumber style={{ color: "black" }}> 1293  9485</CardNumber>
                    <CardInfo style={{ color: "black" }}>Account Number:</CardInfo>
                    <CardNumber style={{ color: "black" }}> 1293  9485</CardNumber>

                </OtherContainer>
                <OtherContainer>
                Spending Limit

                <CardInfo style={{ color: "black" }}>Weekely:</CardInfo>
                    <CardNumber style={{ color: "black" }}> $100,000</CardNumber>
                    <CardInfo style={{ color: "black" }}>Monthly</CardInfo>
                    <CardNumber style={{ color: "black" }}> $10,000,000</CardNumber>

                </OtherContainer>
            </BalanceContainer>


        </TableContainer>
    </React.Fragment>
)
export class Balance extends React.Component {
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