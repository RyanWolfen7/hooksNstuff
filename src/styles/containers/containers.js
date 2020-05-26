import styled from 'styled-components'
import { gridRepeat } from '../../helpers/styles'

export const AppContainer = styled.div`
    display: grid;
    grid-template-columns: ${props => { return gridRepeat(5, props.col) }};
    grid-template-rows: ${props => { return gridRepeat(10, props.row)}};
    align-content: stretch;
    margin: 0 5vw 0;
    height: 100vh;
`