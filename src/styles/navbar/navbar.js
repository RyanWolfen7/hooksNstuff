import styled from 'styled-components'

// can make default values global styling or inherit from parent
// global -> defalut || global -> parent -> default

export const NavBarContainer = styled.div`
    display: grid;
    color: ${props => props.color ? props.color : 'black'}; 
    background: ${props => props.background ? props.background : 'white'}
` 