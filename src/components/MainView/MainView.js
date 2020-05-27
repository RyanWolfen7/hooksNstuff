import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { AppContainer } from '../../styles/containers/containers'
import NavBar from '../NavBar/NavBar'

const MainViewTheme = {
    primary: 'red',
    secondary: 'white'
}

const MainView = props => {
    const [navStyles, setNavStyles] = useState({ gridArea: { row: null, column: null, rowSpan: null, colSpan: null}, color: MainViewTheme.secondary, background: MainViewTheme.primary })

    return (
        <AppContainer col={6} row={8}>
            {/* Add components to this component here*/}
            <NavBar styles={navStyles}/>
            
        </AppContainer>
    )
}

export default withRouter(MainView)