import React from 'react'
import { NavBarContainer } from '../../styles/navbar/navbar'


const NavBar = props => {
    const { gridArea } = props

    return (
        <NavBarContainer
            color={'white'}
            background={'pink'}
            gridArea={gridArea}
        >
            {/* add childern from schema here {childeren} */}
        </NavBarContainer>
    )
}

export default NavBar