import React from 'react'
import styled from 'styled-components'
import withRouter from 'react-router-dom/withRouter'

const HeaderContainer = styled.section`
  margin: auto;
  width: 65%;
  padding: 1.5% 0% 2% 0%;

  @media (max-width: 768px) {
    width: 95%;
    padding: 1.5% 0% 2% 0%;
  }
`
const LogoContainer = styled.div`
  float: left;
  width: auto;
`
const ContactContainer = styled.div`
  float: right;
  margin-top: 2%;
`
const clearBoth = {
    clear: 'both',
}
const iconMargin = {
    float: 'left',
}

const HelpContainer = styled.div`
  float: right;
`
const PhoneContainer = styled.div`
  float: right;
`
const ContactText = styled.span`
  color: #003366;
  font-size: 13px;
  float: left;
  margin-top: 4px;
  margin-left: 5px;
`

class OnboardingHeader extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <LogoContainer>
                    <img src={require('../../../../assets/university_Logo.png')} alt="Logo" />
                </LogoContainer>
                <ContactContainer>
                    <HelpContainer>
                        <img
                            src={require('../../../../assets/Help_icon.png')}
                            style={iconMargin}
                            alt="help"
                        />
                        <ContactText>help@codigoworld.com</ContactText>
                    </HelpContainer>
                    <PhoneContainer style={{ marginRight: '20px' }}>
                        <img
                            src={require('../../../../assets/Phone_icon.png')}
                            style={iconMargin}
                            alt="call"
                        />
                        <ContactText>(080) - 2345678</ContactText>
                    </PhoneContainer>
                    <div style={clearBoth} />
                </ContactContainer>
                <div style={clearBoth} />
            </HeaderContainer>
        )
    }
}

export default withRouter(OnboardingHeader)
