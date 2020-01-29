import React from 'react';
import styled from 'styled-components';



import logo from '../../../../assets/Caterpillar.png'

const TableContainer = styled.div`
    margin-top: 30px;
`

const BalanceContainer = styled.div`
    width: 100%;
    padding: 1px
    padding-bottom: 100px
    padding-top: 100px
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

`;
const CardInfo = styled.p`
    color:white;
    text-align: left;
`

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;


const SettingsList = props => (
    <React.Fragment>
        <TableContainer>
            <h1>Settings</h1>
            <BalanceContainer>

                <OtherContainer>

                    <CheckBoxWrapper>
                        <CheckBox id="checkbox" type="checkbox" />x
                        <CheckBoxLabel htmlFor="checkbox" />

                    </CheckBoxWrapper>

                </OtherContainer>
                <OtherContainer>
                    Bank Settings
                <CardInfo style={{ color: "black" }}>Weekely:</CardInfo>
                    <CardNumber style={{ color: "black" }}> $100,000</CardNumber>
                    <CardInfo style={{ color: "black" }}>Monthly</CardInfo>
                    <CardNumber style={{ color: "black" }}> $10,000,000</CardNumber>

                </OtherContainer>

            </BalanceContainer>


        </TableContainer>
    </React.Fragment>
)
export class Settings extends React.Component {
    state = {
        activeTab: 1
    }
    render() {
        return (
            <React.Fragment>
                <React.Fragment>
                    <SettingsList />
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
    }
]