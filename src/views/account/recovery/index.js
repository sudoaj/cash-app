import React from 'react';
import OnboardingHeader from '../../../components/Core/Header/onboarding-header'
import PasswordRecovery from '../../../components/Account/PasswordRecovery';

import {Wrapper} from "../../../components/Core/reusable-styles";

export default class PasswordRecoveryView extends React.Component {
    render() {
        return(
            <Wrapper style={{minHeight: window.innerHeight + 'px'}}>
                <OnboardingHeader/>
                <PasswordRecovery/>
            </Wrapper>
        )
    }
}