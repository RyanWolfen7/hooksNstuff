import React from 'react'
import { withRouter } from 'react-router-dom'
import { AppContainer } from '../../styles/containers/containers'
import NavBar from '../NavBar/NavBar'

const MainView = props => {
    return (
        <AppContainer col={6} row={8}>
            {/* Add components to this component here*/}
            <NavBar/>
        </AppContainer>
    )
}

export default withRouter(MainView)