import React from 'react'
import styled from 'styled-components'
import withRouter from 'react-router-dom/withRouter'
import { Flex } from 'grid-styled'
import * as Yup from 'yup'
import { Formik } from 'formik'

import { FirstStep } from './first-step'

const Wrapper = styled.div`
  justify-content: center;
`

const Content = styled(Flex)`
  margin: auto;
  width: 60%;
  position: relative;
  @media (max-width: 768px) {
    width: 90%;
  }
`

const BackDropWrapper = styled.div`
  background: linear-gradient(135.82deg, #FEAC5E 0%, #C779D0 52.28%, #4BC0C8 100%);  
  box-shadow: 20px 16px 20px 3px rgba(10, 37, 62, 0.15);
  width: 100%;
  border-radius: 5px;
  padding: 3% 5% 6%;
`
const TabContentLeft = styled.div`
  float: left;
  width: 60%;
`

const TabStepNavDiv = styled.div`
  justify-content: space-between;
  display: flex;
  margin: auto;
  width: 90%;
`

const TabNavRight = TabContentLeft.extend`
  float: right;
  width: 40%;
  box-sizing: border-box;
  padding-top: 20px;
`

const TabStepNav = styled.a`
  display: block;
  float: left;
  height: 35px;
  width: 35px;
  background: ${props =>
    props.active ? props.theme.colors.white : props.theme.colors.white_opacity};
  border: ${props => (props.done ? '1px solid #fff' : 'none')};
  box-shadow: ${props =>
    props.done ? 'none' : '0 5px 8px 0 rgba(10, 37, 62, 0.1)'};
  border-radius: 100%;
  text-align: center;
  cursor: default;
  color: ${props =>
    props.active
        ? '#2949F0'
        : props.done
        ? '#fff'
        : 'rgba(255, 255, 255, 0.54)'};
  transition: 0.3s;
`
const TabStepNavSpan = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 34px;
`

const RoundDiv1 = styled.div`
  height: 230px;
  width: 230px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.white_opacity};
  margin-left: auto;
  margin-right: auto;
  padding: 7%;
  box-sizing: border-box;
`
const RoundDiv2 = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white_opacity};
  padding: 15%;
  border-radius: 100%;
  box-sizing: border-box;
`
const RoundDiv3 = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white_opacity};
  text-align: center;
  border-radius: 100%;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`
const RoundedDivContainer = styled.div`
  margin-top: 15%;
`
const TabTitleContainer = RoundedDivContainer.extend`
  margin-top: 10%;
`

const EachTabTitle = styled.h3`
  opacity: 0.87;
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s;
  &:after {
    content: '';
    display: block;
    width: 30%;
    margin: auto;
    height: 2px;
    background: rgba(255, 255, 255, 0.54);
    margin-top: 15px;
    border-radius: 1px;
  }
`

const EachTabDesc = styled.p`
  opacity: 0.54;
  color: #ffffff;
  font-size: 12px;
  font-weight: 100;
  line-height: 16px;
  text-align: center;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7%;
  letter-spacing: 2px;
`

const TabOuter = styled.div`
  position: relative;
  width: 100%;
  transition: 0.3s;
`

const TabsContainer = styled.div`
  position: absolute;
  width: 92%;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 2px 16px 22px 7px rgba(83, 83, 83, 0.2);
  top: 5%;
  right: 10%;
  padding: 8% 15%;
  transition: 0.3s;
`

const CollegeImageDiv = styled.div`
  margin-bottom: 25px;
`

const hideItem = {
    display: 'none',
}

const CollegeImageLabel = styled.label`
  display: block;
  margin: auto;
  height: 72px;
  width: 72px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 100%;
  text-align: center;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`

const CollegeInputDiv = styled.div`
  width: 100%;
  margin-bottom: 22px;
`
const CustomLabel = styled.label`
  color: #003366;
  opacity: 0.6;
  font-size: 13px;
  display: block;
  margin-bottom: 5px;
`
const CustomInput = styled.input`
  box-shadow: 0 0 10px 2px rgba(83, 83, 83, 0.02);
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 8px 10px;
  color: #003366;
  font-size: 14px;
  width: 100%;
  outline: none;
  border: none;
  transition: 0.3s;
  box-sizing: border-box;
  &:focus {
    box-shadow: 0 0 10px 2px rgba(83, 83, 83, 0.1);
  }
  &::placeholder {
    color: #003366;
    opacity: 0.6;
    font-size: 13px;
  }
`

const CollegeHalfInputDiv = styled.div`
  float: left;
  width: 47%;
  margin-bottom: 22px;
`

const halfInputDivStyle = {
    marginRight: '6%',
}

const SocialLinksContainer = styled.div``

const SocialInputDiv = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px 2px rgba(83, 83, 83, 0.02);
  border-radius: 4px;
  padding: 6px;
  width: 100%;
  margin-bottom: 22px;
  box-sizing: border-box;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 10px 2px rgba(83, 83, 83, 0.1);
  }
`
const InvisibleInput = styled.input`
  border: none;
  background: ${({ theme }) => theme.colors.white};
  color: #003366;
  font-size: 12px;
  outline: none;
  width 85%;
  border-left: 1px solid rgba(102, 102, 102, 0.1);
  margin-left: 2%;
  padding-left: 5%;
  box-sizing: border-box;
  &::placeholder {
    color: #003366;
    opacity: 0.6;
    font-size: 13px;
  }
`
const lastSocialInputStyle = {
    marginBottom: '0px',
}

const TabOneNext = styled.button`
  width: 100%;
  padding: 10px 0;
  color: ${({ theme }) => theme.colors.white};
  background: linear-gradient(0.49deg,#2949F0 0%,#29B8E4 100%);
  border-radius: 4px;
  border: none;
  box-shadow: 1px 8px 10px 2px rgba(10, 37, 62, 0.2);
  margin-top: 20px;
  cursor: pointer;
  letter-spacing: 2px;
  font-weight: 200;
  font-size: 13px;
`

const iconColorFB = {
    color: '#3B5998',
}
const iconColorTWT = {
    color: '#00C6FF',
}

const iconColorGP = {
    color: '#dd4b39',
}
const clearDiv = {
    clear: 'both',
}

//Tab Two

const TabHeading = styled.h3`
  color: rgba(0, 51, 102, 0.87);
  margin-bottom 30px;
  font-weight: 400;
`
const TabDesc = styled.p`
  font-size: 12px;
  color: #003366;
  line-height: 18px;
  opacity: 0.4;
`
const otherTabP = {
    color: '#003366',
    opacity: '0.7',
    fontSize: '13px',
    fontWeight: '400',
    letterSpacing: '1px',
    lineHeight: '23px',
}
const FileDropzone = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 2px dashed #ddd;
  padding: 20% 0;
  text-align: center;
  border-radius: 5px;
`
const DropzoneLabel = styled.label`
  padding: 5%;
  border: 7px solid #dfe2ee;
  border-radius: 100%;
  color: rgba(125, 169, 241, 1);
  cursor: pointer;
  display: inline-block;
`
const TabButtonContainer = styled.div`
  float: right;
  text-align: right;
  margin-top: 10px;
`
const TabNextButtons = styled.button`
  padding: 10px 20px;
  background: linear-gradient(0.49deg,#2949F0 0%,#29B8E4 100%);
  border-radius: 4px;
  border: none;
  box-shadow: 1px 8px 10px 2px rgba(10, 37, 62, 0.2);
  letter-spacing: 2px;
  font-weight: 200;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  cursor: pointer;
`
const TabPrevWrapper = styled.div`
  background: linear-gradient(0.49deg,#2949F0 0%,#29B8E4 100%);
  padding: 1px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 8px 10px 2px rgba(10, 37, 62, 0.2);
  margin-right: 10px;
  display: inline-block;
`

const TabPrevButtons = styled.button`
  padding: 9px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  border: none;
  letter-spacing: 2px;
  font-weight: 200;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.dark_grey_blue};
  outline: none;
  cursor: pointer;
`

const AddAdminWrapper = styled.div`
  margin-top: 15%;
  margin-bottom: 25%;
`
const FinalTabHeading = styled.h2`
  color: rgba(0, 51, 102, 0.87);
  text-align: center;
  font-weight: lighter;
`
const UserReadyImage = styled.img`
  text-align: center;
  display: block;
  margin: 40px auto;
`
const SetActivityWrapper = styled.section`
  margin-bottom: 20px;
`
const EachActivity = styled.a`
  text-decoration: none;
  transition: 0.3s;
  list-style-type: none;
  margin-bottom: 20px;
  display: block;
  cursor: pointer;
`

const ActivityImgBg = styled.i`
  height: 55px;
  width: 55px;
  box-shadow: 1px 8px 10px 2px rgba(10, 37, 62, 0.2);
  transition: 0.3s;
  border-radius: 100%;
  text-align: center;
  display: inline-block;
  transition: 0.3s;
  background: ${props =>
    props.active
        ? 'linear-gradient(0.49deg,#2949F0 0%,#29B8E4 100%)'
        : '#fff'};
`
const activityImgStyle = {
    marginTop: '15px',
}

const ActivityText = styled.span`
	opacity: 0.5;
	color: #003366;
	font-size: 14px;
	font-weight: 400;
	margin-left 10px;
`

const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  font-style: italic;
  margin-bottom: 0px;
  margin-top: 5px;
`

const Oval = props => (
    <RoundDiv1 className="zoomIn animated">
        <RoundDiv2>
            <RoundDiv3>
                <img src={props.image} alt="Logo" style={{ transition: '0.3s' }} />
            </RoundDiv3>
        </RoundDiv2>
    </RoundDiv1>
)


const TabOne = props => (
    <TabsContainer style={{ display: props.visibility }}>
        <Formik
            initialValues={{
                logo: null,
                name: '',
                location: '',
                phone: '',
                email: '',
                facebookLink: '',
                twitterLink: '',
                gPlusLink: '',
            }}
            onSubmit={(values, { setErrors }) => {
                props.handleSubmit(values)
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().required('company name is required'),
                location: Yup.string().required('company location is required'),
                phone: Yup.string()
                    .max(10, 'number must be 10 characters')
                    .matches(/^\d{10}$/, 'the number is not valid')
                    .required('Contact number is required'),
                email: Yup.string()
                    .email()
                    .required(),
            })}
            render={({ values, handleSubmit, handleChange, errors, touched }) => (
                <React.Fragment>
                    <CollegeImageDiv>
                        <input
                            type="file"
                            name="logo"
                            style={hideItem}
                            id="college-image"
                            onChange={props.handleFileChange}/>
                        <CollegeImageLabel
                            htmlFor="college-image"
                            style={{ backgroundImage: `url(${props.imageChange})` }}>
                            <img
                                src={require('../../../assets/Shape.png')}
                                alt="Logo"
                                style={{ visibility: props.imageChange ? 'hidden' : 'visible' }}/>
                        </CollegeImageLabel>
                    </CollegeImageDiv>

                    <React.Fragment>
                        <CollegeInputDiv>
                            <CustomInput
                                name="name"
                                placeholder="Company Name"
                                onChange={handleChange}
                                value={values.name}
                            />
                            {touched.name &&
                            errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
                        </CollegeInputDiv>

                        <CollegeInputDiv>
                            <CustomInput
                                name="location"
                                placeholder="Location"
                                onChange={handleChange}
                                value={values.location}
                            />
                            {touched.location &&
                            errors.location && <ErrorMsg>{errors.location}</ErrorMsg>}
                        </CollegeInputDiv>

                        <React.Fragment>
                            <CollegeHalfInputDiv style={halfInputDivStyle}>
                                <CustomInput
                                    name="phone"
                                    placeholder="Contact number"
                                    onChange={handleChange}
                                    value={values.phone}
                                    type="tel"
                                />
                                {touched.phone &&
                                errors.phone && <ErrorMsg>{errors.phone}</ErrorMsg>}
                            </CollegeHalfInputDiv>
                            <CollegeHalfInputDiv>
                                <CustomInput
                                    name="email"
                                    placeholder="email"
                                    onChange={handleChange}
                                    value={values.email}
                                />
                                {touched.email &&
                                errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
                            </CollegeHalfInputDiv>
                            <div style={clearDiv} />
                        </React.Fragment>

                        <React.Fragment>
                            <SocialLinksContainer>
                                <CustomLabel>Social Links</CustomLabel>
                                <SocialInputDiv>
                                    <i className="fab fa-facebook-square" style={iconColorFB} />
                                    <InvisibleInput
                                        className="ivv"
                                        placeholder="Enter URL"
                                        name="facebookLink"
                                        onChange={handleChange}
                                        value={values.facebookLink}
                                    />
                                </SocialInputDiv>

                                <SocialInputDiv>
                                    <i className="fab fa-twitter-square" style={iconColorTWT} />
                                    <InvisibleInput
                                        placeholder="Enter URL"
                                        name="twitterLink"
                                        onChange={handleChange}
                                        value={values.twitterLink}
                                    />
                                </SocialInputDiv>

                                <SocialInputDiv style={lastSocialInputStyle}>
                                    <i className="fab fa-google-plus" style={iconColorGP} />
                                    <InvisibleInput
                                        placeholder="Enter URL"
                                        name="gPlusLink"
                                        onChange={handleChange}
                                        value={values.gPlusLink}
                                    />
                                </SocialInputDiv>
                            </SocialLinksContainer>
                        </React.Fragment>

                        <React.Fragment>
                            <TabOneNext onClick={handleSubmit} type="submit">
                                NEXT
                            </TabOneNext>
                        </React.Fragment>
                    </React.Fragment>
                </React.Fragment>
            )}
        />
    </TabsContainer>
)

const TabTwo = props => (
    <TabsContainer style={{ display: props.visibility }}>
        <TabHeading>Upload Company Members</TabHeading>
        <TabDesc>
            Please upload your company member details. Please download template to
            know the uploading format
        </TabDesc>
        <FileDropzone>
            <input type="file" id="csv-file" style={hideItem} name="collegeCsv" />
            <DropzoneLabel htmlFor="csv-file">
                <img
                    src={require('../../../assets/Fill-1.png')}
                    alt="upload"
                    style={{ width: '50px', height: '50px' }}
                />
            </DropzoneLabel>
            <TabDesc>Upload csv file</TabDesc>
        </FileDropzone>
        <TabDesc style={{ cursor: 'pointer' }}>
            <img src={require('../../../assets/Group-csv.png')} alt="download" />
            &nbsp; Download csv template
        </TabDesc>
        <TabButtonContainer>
            <TabPrevWrapper>
                <TabPrevButtons onClick={props.handlePrev}>PREVIOUS</TabPrevButtons>
            </TabPrevWrapper>
            <TabNextButtons onClick={props.handleSubmit}>NEXT</TabNextButtons>
        </TabButtonContainer>
    </TabsContainer>
)

const TabThree = props => (
    <TabsContainer style={{ display: props.visibility }}>
        <TabHeading>Set Admin Profile</TabHeading>
        <TabDesc style={otherTabP}>
            Create a new password of your choice to<br /> enter the portal
        </TabDesc>

        <Formik
            initialValues={{
                password: '',
                confirmPassword: '',
            }}
            onSubmit={props.handleSubmit}
            validationSchema={Yup.object().shape({
                password: Yup.string()
                    .min(6)
                    .matches(
                        /[a-zA-Z]+[^a-zA-Z\s]+/,
                        'at least 1 number or special char (@,!,#, etc).',
                    )
                    .required('Password is required'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
                    .required('Confirming password is required'),
            })}
            render={({ values, handleSubmit, handleChange, touched, errors }) => (
                <div>
                    <AddAdminWrapper>
                        <React.Fragment>
                            <CollegeInputDiv>
                                <CustomInput
                                    name="password"
                                    placeholder="New Password"
                                    onChange={handleChange}
                                    value={values.password}
                                    type="password"
                                />
                                {touched.password &&
                                errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
                            </CollegeInputDiv>
                            <CollegeInputDiv>
                                <CustomInput
                                    name="confirmPassword"
                                    placeholder="Re-Type Password"
                                    onChange={handleChange}
                                    value={values.confirmPassword}
                                    type="password"
                                />
                                {touched.confirmPassword &&
                                errors.confirmPassword && (
                                    <ErrorMsg>{errors.confirmPassword}</ErrorMsg>
                                )}
                            </CollegeInputDiv>
                        </React.Fragment>
                        <TabDesc>
                            Password should at least contain six characters, Contains a Symbol
                            or a number (@, #, $, %, etc.)
                        </TabDesc>
                    </AddAdminWrapper>
                    <TabButtonContainer>
                        <TabPrevWrapper>
                            <TabPrevButtons onClick={props.handlePrev}>
                                PREVIOUS
                            </TabPrevButtons>
                        </TabPrevWrapper>
                        <TabNextButtons onClick={handleSubmit}>NEXT</TabNextButtons>
                    </TabButtonContainer>
                </div>
            )}
        />
    </TabsContainer>
)

const TabFour = props => (
    <TabsContainer style={{ display: props.visibility }}>
        <FinalTabHeading>You Are ready</FinalTabHeading>
        <UserReadyImage src={require('../../../assets/user.png')} />
        <SetActivityWrapper>
            <TabHeading>Set Activity</TabHeading>
            <EachActivity onClick={() => props.chooseActivity('hide')}>
                <ActivityImgBg active={props.updateActivity === false}>
                    <img
                        src={require('../../../assets/Group.png')}
                        style={activityImgStyle}
                        alt="Hide"
                    />
                </ActivityImgBg>
                <ActivityText>Hide Company Activity</ActivityText>
            </EachActivity>
            <EachActivity onClick={() => props.chooseActivity('show')}>
                <ActivityImgBg active={props.updateActivity}>
                    <img
                        src={require('../../../assets/Fill-2.png')}
                        style={activityImgStyle}
                        alt="show"
                    />
                </ActivityImgBg>
                <ActivityText>Get company live on platform</ActivityText>
            </EachActivity>
        </SetActivityWrapper>
        <TabButtonContainer>
            <TabPrevWrapper>
                <TabPrevButtons onClick={props.handlePrev}>PREVIOUS</TabPrevButtons>
            </TabPrevWrapper>
            <TabNextButtons onClick={props.handleSubmit}>NEXT</TabNextButtons>
        </TabButtonContainer>
    </TabsContainer>
)

class CreateCompany extends React.Component {
    stage = [
        {
            title: '',
            image: '',
        },
        {
            title: 'COMPANY PROFILE',
            image: require('../../../assets/board1.png'),
        },
        {
            title: 'INVITE MEMBERS',
            image: require('../../../assets/board2.png'),
        },
        {
            title: 'SECURE ADMIN PROFILE',
            image: require('../../../assets/board3.png'),
        },
        {
            title: 'SET ACTIVITY',
            image: require('../../../assets/board5.png'),
        },
    ]

    constructor(props) {
        super(props)
        this.state = {
            tabStep: 1,
            success: {
                tabOne: false,
                tabTwo: false,
                tabThree: false,
                tabFour: false,
            },
            college: {},
            adminPassword: '',
            collegeImage: null,
            collegeActivity: false,
            submitted: false,
            completeFirstStep: false
        }
    }

    handleSubmit = values => {
        let tab = this.state.tabStep
        switch (tab) {
            case 1:
                tab++
                this.setState({ tabStep: tab })
                this.setState({
                    success: {
                        tabOne: true,
                        tabTwo: false,
                        tabThree: false,
                        tabFour: false,
                    },
                })
                this.setState({ college: { ...values } })
                break
            case 2:
                tab++
                this.setState({ tabStep: tab })
                this.setState({
                    success: {
                        tabOne: true,
                        tabTwo: true,
                        tabThree: false,
                        tabFour: false,
                    },
                })
                break
            case 3:
                tab++
                this.setState({ tabStep: tab })
                this.setState({
                    success: {
                        tabOne: true,
                        tabTwo: true,
                        tabThree: true,
                        tabFour: false,
                    },
                })
                this.setState({ adminPassword: values.password })
                break
            default:
                this.props.history.push('/')
                this.setState({ submitted: true })
                break
        }
    }

    handlePrev = values => {
        let tab = this.state.tabStep
        tab--
        this.setState({ tabStep: tab })
    }

    handleFileChange = event => {
        let file = URL.createObjectURL(event.target.files[0])
        this.setState({ collegeImage: file })
    }

    handleActivity = activity => {
        if (activity === 'hide') this.setState({ collegeActivity: false })
        else this.setState({ collegeActivity: true })
    }

    handleFirstStep = () => {
        this.setState({completeFirstStep: true})
    }

    render() {
        return (
            <Wrapper>
                { this.state.completeFirstStep ? (
                    <Content>
                        <BackDropWrapper className="fadeIn animated">
                            <TabContentLeft>
                                <TabOuter className="slideInLeft animated">
                                    <TabOne
                                        handleSubmit={this.handleSubmit}
                                        visibility={this.state.tabStep === 1 ? 'block' : 'none'}
                                        handleFileChange={this.handleFileChange}
                                        imageChange={this.state.collegeImage}
                                    />
                                    <TabTwo
                                        handleSubmit={this.handleSubmit}
                                        handlePrev={this.handlePrev}
                                        visibility={this.state.tabStep === 2 ? 'block' : 'none'}
                                    />

                                    <TabThree
                                        handleSubmit={this.handleSubmit}
                                        handlePrev={this.handlePrev}
                                        visibility={this.state.tabStep === 3 ? 'block' : 'none'}
                                    />
                                    <TabFour
                                        handleSubmit={this.handleSubmit}
                                        handlePrev={this.handlePrev}
                                        visibility={this.state.tabStep === 4 ? 'block' : 'none'}
                                        chooseActivity={this.handleActivity}
                                        updateActivity={this.state.collegeActivity}
                                    />
                                </TabOuter>
                            </TabContentLeft>
                            <TabNavRight className="fadeInUp animated">
                                <TabStepNavDiv>
                                    <TabStepNav
                                        tab="one"
                                        active={this.state.tabStep === 1}
                                        done={this.state.success.tabOne === true}
                                    >
                                        <TabStepNavSpan>1</TabStepNavSpan>
                                    </TabStepNav>
                                    <TabStepNav
                                        tab="two"
                                        active={this.state.tabStep === 2}
                                        done={this.state.success.tabTwo}
                                    >
                                        <TabStepNavSpan>2</TabStepNavSpan>
                                    </TabStepNav>
                                    <TabStepNav
                                        tab="three"
                                        active={this.state.tabStep === 3}
                                        done={this.state.success.tabThree}
                                    >
                                        <TabStepNavSpan>3</TabStepNavSpan>
                                    </TabStepNav>
                                    <TabStepNav
                                        tab="four"
                                        active={this.state.tabStep === 4}
                                        done={this.state.success.tabFour}
                                    >
                                        <TabStepNavSpan>4</TabStepNavSpan>
                                    </TabStepNav>
                                </TabStepNavDiv>
                                <RoundedDivContainer>
                                    <Oval image={this.stage[this.state.tabStep].image} />
                                </RoundedDivContainer>
                                <TabTitleContainer>
                                    <EachTabTitle>
                                        {this.stage[this.state.tabStep].title}
                                    </EachTabTitle>
                                    <EachTabDesc>
                                        Tell us about your company and build your online presence
                                    </EachTabDesc>
                                </TabTitleContainer>
                            </TabNavRight>
                        </BackDropWrapper>
                    </Content>
                ) : (
                    <FirstStep handleFirstStep={this.handleFirstStep} handleOnCancel={this.props.handleOnCancel}/>
                ) }
            </Wrapper>
        )
    }
}

export default withRouter(CreateCompany)
