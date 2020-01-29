import React from 'react'
import styled from 'styled-components'
import ReactCodeInput from 'react-code-input'
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
  min-width: 100px;
  z-index: 2;
  box-shadow: 1px 8px 10px 2px rgba(10, 37, 62, 0.2);
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
  width: 100px;
  border: none;
  box-shadow: 1px 8px 10px 2px rgba(10, 37, 62, 0.2);
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
const ActionCard = BaseExtended.extend`
  position: absolute;
  left: 5%;
  top: 30%;
  box-sizing: border-box;
  background-color: rgb(248, 242, 249);
  padding: 80px 50px 30px 50px;
`

const Title = styled(Flex)`
  align-items: center;
  position: relative;
`

const TitleText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 300;
  margin-left: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
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

const CustomCodeInput = styled(ReactCodeInput)`
  margin-left: -4px;
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
    { title: 'College e-mail' },
    { title: 'Enter Security Code' }
]

const StepOne = props => (
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
                        <StrokedButton onClick={props.handleOnCancel}>
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
                            <StrokedButton onClick={props.handleOnCancel}>
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

export class FirstStep extends React.Component {
    state = {
        step: 0,
        success: false,
    }

    handleSubmit = values => {
        let step = this.state.step
        if (step === 1) {
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
                        handleOnCancel={() => this.props.handleOnCancel(false, '')}
                    />
                )
                break
            case 1:
                step = (
                    <StepTwo
                        handleSubmit={this.props.handleFirstStep}
                        handleOnCancel={() => this.props.handleOnCancel(false, '')}
                        email={'john@gmail.com'}
                    />
                )
                break
            default:
                step = <StepOne handleSubmit={this.handleSubmit}
                                handleOnCancel={() => this.props.handleOnCancel(false, '')}/>
                break
        }
        return step
    }

    handleOnCancel = () => {
        this.props.history.push('/')
    }


    render() {
        const { step } = this.state

        return (
            <Wrapper>
                <Content>
                    <BackdropWrapper>
                        <Title>
                            <TitleText>{stage[step].title}</TitleText>
                        </Title>
                    </BackdropWrapper>
                    <ActionCard>{this.getStep()}</ActionCard>
                </Content>
            </Wrapper>
        )
    }
}
