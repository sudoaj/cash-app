import React from 'react';
import CreateCourse from '../../components/CreateCourse';
import HeaderComponent from '../../components/Core/Header'

export default class CreateCourseView extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeaderComponent/>
                <CreateCourse/>
            </React.Fragment>
        )
    }
}