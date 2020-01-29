import styled from 'styled-components';

const ErrorMsg = styled.p`
  color: ${({theme}) => theme.colors.red};
  font-size: 12px;
  font-style: italic;
  margin-bottom: 0px;
  margin-top: 5px;
`

const FixedBackground = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    background: url('${props => props.imageURL}');
    background-position: center;
    background-size: cover;
    @media screen and (min-width: 1600px) {
         position: relative;
    }
    
`
const Wrapper = styled.section`
    position: relative;
    background-color: #f2f2f2;
    min-height: ${props => props.height ? props.height : 'unset'};
    @media screen and (min-width: 1600px) {
        width: 1370px; 
        margin: auto;
    }
`

const RightContainer = styled.div`
    background-color: ${({theme}) => theme.colors.dark_white_opacity};
    float: right;
    width: 35%;
    height: 100%;
    padding: 10% 3%;
    @media (max-width: 768px) {
        width: 80%;
        clear: both;
        margin: auto;
    }
`

const ClearBoth = styled.div`
    clear: both;
`

const BlueButton = styled.button`
    padding: 13px 50px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 3px;
    border: none;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    outline: none;
    font-weight: lighter;
`
const InputContainer = styled.div``
const CustomLabel = styled.label`
    font-size: 14px;
    color: ${({theme}) => theme.colors.dark};
    margin-bottom: 6px;
    display: block;
    letter-spacing: 1px;
`
const CustomInput = styled.input`
    background-color: ${({ theme }) => theme.colors.white };
    padding: 10px 10px;
    outline: none;
    width: 100%;
    border-radius: 2px;
    border: 1px solid #E9E7E7;
    font-size: 15px;
    box-sizing: border-box;
`
const HalfInput = styled.div`
    width: 48%;
    float: left;
`
const FullInput = styled.div`
    width: 100%;
    margin-top: 7%;
`
const Modal = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 1000;  
    transition: 0.3s;
    @media screen and (min-width: 1600px) {
        width: 1370px; 
        margin: auto;
    }
`


export { ErrorMsg, FixedBackground, Wrapper, RightContainer, ClearBoth, BlueButton,
    InputContainer, CustomLabel, CustomInput, HalfInput, FullInput, Modal }