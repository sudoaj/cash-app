import React from 'react';
import FacultyComponent from '../../../../components/Profile/FacultyProfile/UserView';
import HeaderComponent from '../../../../components/Core/Header';


export default class FacultyView extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeaderComponent/>
                <FacultyComponent/>
            </React.Fragment>
        )
    }
}