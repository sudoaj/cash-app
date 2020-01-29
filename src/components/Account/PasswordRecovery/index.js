import React from 'react'
import styled from 'styled-components'
import ReactCodeInput from 'react-code-input'
import withRouter from 'react-router-dom/withRouter'
import * as Yup from 'yup'
import { Flex } from 'grid-styled'
import { Formik } from 'formik'


const BaseCard = styled.div`
  box-shadow: 20px 16px 20px 3px rgba(10, 37, 62, 0.15);
  border-radius: 4px;
  
`

const TextInput = styled.input`
  box-sizing: border-box;
  padding: 14px;
  border-radius: 4px;
  margin: 5px 0;
  width: 100%;
  border: 0px;
  color: ${({ theme }) => theme.colors.light_grey};
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  box-shadow: 0 0 10px 2px rgba(83, 83, 83, 0.1);
  background-color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: 0;
    box-shadow: 0 0 10px 2px rgba(196, 221, 233, 0.5);
  }
  &::-moz-placeholder {
    color: ${({ theme }) => theme.colors.light_grey};
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.light_grey};
  }
  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.light_grey};
  }
`

const Button = styled.button`
  background: linear-gradient(3.59deg, #29b8e4 0%, #4cc075 100%);
  border-radius: 4px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.white};
  height: 40px;
  padding: 1px;
  text-transform: uppercase;
  min-width: 120px;
  z-index: 2;
  box-shadow: 1px 8px 10px 2px rgba(10, 37, 62, 0.1);
  border: none;
  cursor: pointer;
`

const StrokedButton = styled.div`
  border-radius: 4px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.white};
  height: 40px;
  padding: 1px;
  text-transform: uppercase;
  z-index: 2;
  background: linear-gradient(0.49deg,#2949F0 0%,#29B8E4 100%);
  padding: 1px;
  border-radius: 5px;
  width: 120px;
  border: none;
  cursor: pointer;
`

const Content = styled(Flex)`
  width: 60%;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    width: 80%;
  }
`

const Wrapper = styled.div`
  justify-content: center
  padding-top: 60px;
`

const Column = styled(Flex)`
  flex-direction: column;
`

const ColumnCentered = Column.extend`
  align-items: center;
  margin-right: 20px;
  margin-top: 20px
  font-size: 12px;
  cursor: pointer;
`

const Row = styled(Flex)``

const ColumnStart = Column.extend`
  align-items: flex-start;
  width: calc(100% - 130px);
`

const BaseExtended = BaseCard.extend`
  align-items: flex-start;
  padding: 10px 60px;
  min-height: 280px;
  width: 100%;
  position: inherit;
  box-sizing: border-box;
  padding: 10px 10%;
`

const BackdropWrapper = BaseExtended.extend`
  background: linear-gradient(90.74deg, #FEAC5E 0%, #C779D0 52.28%, #4BC0C8 100%);
  margin-left: -5%;
`

const BackdropWrapperSuccess = BaseExtended.extend`
  display: flex;
  padding: 40px 10%;
  background: linear-gradient(90.74deg, #FEAC5E 0%, #C779D0 52.28%, #4BC0C8 100%);
`

const SuccessContentWrapper = styled.div`
  margin-left: 10px;
  margin-top: 10px;
`

const ActionCard = BaseExtended.extend`
  position: absolute;
  left: 5%;
  top: 30%;
  box-sizing: border-box;
  background-color: rgb(248, 242, 249);
  padding: 80px 50px 0px 50px;
`

// const SecurityIcon = styled.i`
//   border-radius: 50%;
//   background-color: rgba(255,255,255,.2)};
//   min-width: 42px;
//   min-height: 42px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: ${({ theme }) => theme.colors.white};
// `

const Title = styled(Flex)`
  align-items: center;
  position: relative;
`

const TitleText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: lighter;
  margin-left: 0px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const SuccessTitleText = TitleText.extend`
  margin-top: 0;
  margin-left: 0;
`

const BottomRow = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
`

const ActionButtonsDiv = styled(Flex)`
  justify-content: flex-end;
`

const InputLabel = styled.label`
  font-size: 12px;
  color: rgb(123, 147, 172);
  margin: 0;
  margin-bottom: 5px;
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.tn};
  color: ${({ theme }) => theme.colors.white};
  text-align left;
  padding: 10px 0;
`

const CancelText = styled.span`
  align-items: center;
  background: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: background .5s ease;
  width: 100%;
  color: #2949F0;
`

const NextButton = Button.extend`
  margin-left: 10px;
  background: linear-gradient(0.49deg,#2949F0 0%,#29B8E4 100%);
`

const BtnFinal = Button.extend`
  width: 60%;
  font-size: 14px;
  background: transparent;
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.white};
  margin-left: 0;
  padding: 13px 0;
`

const GradientText = styled.p`
  background: linear-gradient(0.49deg,#2949F0 0%,#29B8E4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-weight: bold;
`

const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  font-style: italic;
`

const HiddenInput = styled.input`
  display: none;
`

const RadioIcon = styled.i`
  color: ${props =>
    props.disabled ? props.theme.colors.grey : props.theme.colors.white};
  background: ${props =>
    props.disabled
        ? props.theme.colors.white
        : `linear-gradient(0.49deg,#2949F0 0%,#29B8E4 100%)`};
  box-shadow: ${props =>
    props.disabled ? 'none' : '0 4px 12px 0 rgba(0, 0, 0, 0.1)'};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 28px;
`

const RoundedDiv = styled.div`
  position: absolute;
  border-radius: 50%;
  top: 50%;
  right: 50%;
`

const RoundedDiv1 = RoundedDiv.extend`
  width: 130px;
  height: 130px;
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-50%);
  right: 10%;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

const RoundedDiv2 = RoundedDiv.extend`
  width: 110px;
  height: 110px;
  background-color: rgba(255, 255, 255, 0.1);
  transform: translate(50%, -50%);
  z-index: 1;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const RoundedDiv3 = RoundedDiv.extend`
  width: 90px;
  height: 90px;
  background-color: rgba(255, 255, 255, 0.1);
  transform: translate(50%, -50%);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`

const CustomCodeInput = styled(ReactCodeInput)`
  margin-left: -4px;
`

const CustomHR = styled.hr`
  background-color: ${({ theme }) => theme.colors.white};
  width: 10%;
  height: 2px;
  border: 0;
  opacity: 0.3;
  margin-left: 0;
`

const inputStyleReactCode = {
    outline: 'none',
    fontFamily: 'monospace',
    borderRadius: '6px',
    border: 'none',
    boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.1)',
    margin: '4px',
    paddingLeft: '8px',
    width: '36px',
    height: '42px',
    fontSize: '32px',
    boxSizing: 'border-box',
    color: '#13406e',
    backgroundColor: 'white',
}

const stage = [
    { title: 'Reset your password' },
    { title: 'Forgot Password?' },
    { title: 'Enter Security Code' },
    { title: 'Choose a new password' },
]

const CustomLabel = props => {
    return (
        <ColumnCentered>
            <RadioIcon className={props.icon} disabled={!props.checked} />
            <InputLabel>{props.label}</InputLabel>
            {props.children}
        </ColumnCentered>
    )
}

const StepOne = props => (
    <Column>
        <InputLabel>
            How do you want to get the code to reset your password?
        </InputLabel>
        <Formik
            initialValues={{ method: 'mobile' }}
            onSubmit={props.handleSubmit}
            render={({
                         values,
                         handleSubmit,
                         handleChange,
                         errors,
                         setFieldValue,
                     }) => (
                <React.Fragment>
                    <Row>
                        <label>
                            <CustomLabel
                                label={'Mobile'}
                                icon="fa fa-mobile-alt"
                                checked={values.method === 'mobile'}
                                onClick={() => console.log('?')}
                            >
                                <HiddenInput
                                    type="radio"
                                    value="mobile"
                                    checked={values.method === 'mobile'}
                                    name="method"
                                    onChange={handleChange}
                                />
                            </CustomLabel>
                        </label>
                        <label>
                            <CustomLabel
                                label={'Email'}
                                icon="far fa-envelope"
                                checked={values.method === 'email'}
                                onClick={() => setFieldValue('method', 'email')}
                            >
                                <HiddenInput
                                    type="radio"
                                    value="email"
                                    checked={values.method === 'email'}
                                    name="method"
                                    onChange={handleChange}
                                />
                            </CustomLabel>
                        </label>
                    </Row>
                    <ActionButtonsDiv>
                        <StrokedButton onClick={() => props.handleOnCancel(false, '')}>
                            <CancelText>CANCEL</CancelText>
                        </StrokedButton>
                        <NextButton onClick={handleSubmit} type="submit">NEXT</NextButton>
                    </ActionButtonsDiv>
                </React.Fragment>
            )}
        />
    </Column>
)

const StepTwo = props => (
    <Column>
        <InputLabel>Please enter your e-mail or phone number</InputLabel>
        <Formik
            initialValues={{ email: '' }}
            onSubmit={props.handleSubmit}
            validationSchema={Yup.object().shape({
                email: Yup.string().required(),
            })}
            render={({ values, handleSubmit, handleChange, errors }) => (
                <React.Fragment>
                    <TextInput
                        value={values.email}
                        onChange={handleChange}
                        name="email"
                    />
                    <ErrorMsg>{errors.email}</ErrorMsg>
                    <ActionButtonsDiv>
                        <StrokedButton onClick={() => props.handleOnCancel(false, '')}>
                            <CancelText>CANCEL</CancelText>
                        </StrokedButton>
                        <NextButton onClick={handleSubmit} type="submit">NEXT</NextButton>
                    </ActionButtonsDiv>
                </React.Fragment>
            )}
        />
    </Column>
)

const StepThree = props => (
    <Column>
        <InputLabel>
            Enter the security code We've sent to your e-mail "{props.email}"
        </InputLabel>
        <Formik
            initialValues={{ code: '' }}
            onSubmit={props.handleSubmit}
            validationSchema={Yup.object().shape({
                code: Yup.string()
                    .min(4)
                    .required(),
            })}
            render={({
                         values,
                         handleSubmit,
                         handleChange,
                         errors,
                         setFieldValue,
                     }) => (
                <React.Fragment>
                    <CustomCodeInput
                        inputStyle={inputStyleReactCode}
                        value={values.code}
                        onChange={a => setFieldValue('code', a)}
                        name="code"
                        fields={4}
                    />
                    <ErrorMsg>{errors.code}</ErrorMsg>
                    <BottomRow>
                        <GradientText>RESEND CODE</GradientText>
                        <ActionButtonsDiv>
                            <StrokedButton onClick={() => props.handleOnCancel(false, '')}>
                                <CancelText>CANCEL</CancelText>
                            </StrokedButton>
                            <NextButton onClick={handleSubmit} type="submit">NEXT</NextButton>
                        </ActionButtonsDiv>
                    </BottomRow>
                </React.Fragment>
            )}
        />
    </Column>
)

const StepFour = props => (
    <React.Fragment>
        <InputLabel>Enter new password</InputLabel>
        <Formik
            initialValues={{ password: '' }}
            onSubmit={props.handleSubmit}
            validationSchema={Yup.object().shape({
                password: Yup.string()
                    .min(6)
                    .matches(
                        /[a-zA-Z]+[^a-zA-Z\s]+/,
                        'at least 1 number or special char (@,!,#, etc).',
                    )
                    .required(),
            })}
            render={({ values, handleSubmit, handleChange, errors }) => (
                <React.Fragment>
                    <TextInput
                        value={values.password}
                        onChange={handleChange}
                        name="password"
                    />
                    <InputLabel>
                        At least six characters, Contains a Symbol or a number (@, #, $, %,
                        etc.)
                    </InputLabel>
                    <ErrorMsg>{errors.password}</ErrorMsg>
                    <ActionButtonsDiv>
                        <StrokedButton onClick={() => props.handleOnCancel(false, '')}>
                            <CancelText>SKIP</CancelText>
                        </StrokedButton>
                        <NextButton onClick={handleSubmit} type="submit">NEXT</NextButton>
                    </ActionButtonsDiv>
                </React.Fragment>
            )}
        />
    </React.Fragment>
)

const Logo = () => (
    <RoundedDiv1>
        <RoundedDiv2>
            <RoundedDiv3>Logo</RoundedDiv3>
        </RoundedDiv2>
    </RoundedDiv1>
)

class PasswordRecovery extends React.Component {
    state = {
        step: 0,
        success: false,
    }

    handleSubmit = values => {
        let step = this.state.step
        if (step === 3) {
            this.setState({ success: true })
        }
        step = step + 1
        this.setState({ step })
    }

    getStep = () => {
        let step
        switch (this.state.step) {
            case 0:
                step = (
                    <StepOne
                        handleSubmit={this.handleSubmit}
                        handleOnCancel={this.props.handleOnCancel}
                    />
                )
                break
            case 1:
                step = (
                    <StepTwo
                        handleSubmit={this.handleSubmit}
                        handleOnCancel={this.props.handleOnCancel}
                    />
                )
                break
            case 2:
                step = (
                    <StepThree
                        handleSubmit={this.handleSubmit}
                        handleOnCancel={this.props.handleOnCancel}
                        email={'john@gmail.com'}
                    />
                )
                break
            case 3:
                step = (
                    <StepFour
                        handleSubmit={this.handleSubmit}
                        handleOnCancel={this.props.handleOnCancel}
                    />
                )
                break
            default:
                step = <StepOne handleSubmit={this.handleSubmit}
                                handleOnCancel={this.props.handleOnCancel}
                />
                break
        }
        return step
    }

    handleOnCancel = () => {
        this.props.history.push('/')
    }

    finish = () => {
        this.props.history.push('/feed')
    }

    render() {
        const { success, step } = this.state

        return (
            <Wrapper>
                {success ? (
                    <Content>
                        <BackdropWrapperSuccess>
                            <SuccessContentWrapper>
                                <SuccessTitleText>Password Changed</SuccessTitleText>
                                <CustomHR />
                                <Row>
                                    <ColumnStart>
                                        <Description>
                                            We have successfully changed your password. You can log in
                                            with your email and new password.
                                        </Description>
                                        <BtnFinal>
                                            <GradientText onClick={this.finish}>GO TO UNIVERSITY.SOCIAL</GradientText>
                                        </BtnFinal>
                                    </ColumnStart>
                                    <Logo />
                                </Row>
                            </SuccessContentWrapper>
                        </BackdropWrapperSuccess>
                    </Content>
                ) : (
                    <Content>
                        <BackdropWrapper>
                            <Title>
                                <TitleText>{stage[step].title}</TitleText>
                            </Title>
                        </BackdropWrapper>
                        <ActionCard>{this.getStep()}</ActionCard>
                    </Content>
                )}
            </Wrapper>
        )
    }
}

export default withRouter(PasswordRecovery)
//PasswordRecovery