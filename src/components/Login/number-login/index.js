import React from 'react';
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter';
import PhoneInput from "react-phone-input-auto-format";




import { Wrapper, ClearBoth } from '../../Core/reusable-styles/index';

const LoginContainer = styled.section`

    height: 100vh;
    width: 100%;
    background-color: blue;
    overflow: hidden;
`
const LoginInputContainer = styled.div `
margin:0 auto;
margin-top: 300px;
width: 100%;
text-align:center;


`
const InputNumberLogin = styled.input `
type:number
min:5
max: 10
display:block;
margin: 0 auto;
border-color: blue;
border-radius: 15px;
text-align:center
width: 400px
height: 50px
color: blue
font-size: 30px;
letter-spacing: 2px;
padding: 10px
`
const LoginText = styled.p `
font-size: 60px
color: white;

`
const spanStyle = {
    color: 'grey',
  };
class CollegeDashboardComponent extends React.Component {
    _handleKeyDown = (e) =>{
        if (e.key === 'Enter') {
          console.log('do validate');
        }
      }
    
    constructor(props) {
        super(props);

        this.state = {value: ''};
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
           this.setState({value: e.target.value})
           
        }
     }
    componentDidMount() {
        this.setState({modalActive: true});
    }

    render() {
        return (

                <LoginContainer>
                    <LoginInputContainer>
                        <LoginText>Log<span style={spanStyle}>i</span>n</LoginText> 
                        <br></br>
                    <PhoneInput 
                    type='tel'
                    style={{outline: 'none'}} 
                    placeholder="(404) 123-7890" 
                    onKeyDown={this._handleKeyDown} 
                    value={this.state.value}  
                    maxLength="11"
                    inputComponent={InputNumberLogin}
                    ></PhoneInput>
                    </LoginInputContainer>
                </LoginContainer>

        )
    }
    
    
}

export default withRouter(CollegeDashboardComponent);
