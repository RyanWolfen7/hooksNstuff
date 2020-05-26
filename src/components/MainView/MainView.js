import React from 'react'
import { withRouter } from 'react-router-dom'
import { AppContainer } from '../../styles/containers/containers'
import NavBar from '../NavBar/NavBar'

const MainView = props => {
    return (
        <AppContainer>
            <NavBar/>
        </AppContainer>
    )
}

export default withRouter(MainView)