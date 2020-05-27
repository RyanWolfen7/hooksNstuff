import React from 'react'
import { NavBarContainer } from '../../styles/navbar/navbar'


const NavBar = props => {
    const styles = props.styles
    const { gridArea, color, background } = styles || props

    return (
        <NavBarContainer
            color={color}
            background={background}
            gridArea={gridArea}
        >
            {/* add childern from schema here {childeren} */}
        </NavBarContainer>
    )
}

export default NavBar