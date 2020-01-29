import React from 'react';
import FacultyThirdComponent from '../../../../components/Profile/FacultyProfile/ThirdPartyView';
import HeaderComponent from '../../../../components/Core/Header';


export default class FacultyThirdView extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeaderComponent/>
                <FacultyThirdComponent/>
            </React.Fragment>
        )
    }
}