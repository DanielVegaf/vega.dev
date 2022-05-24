import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledHeader = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* background-color: red; */
`

export const Title = styled.h1`
    font-size: 1.1em;
    color: red;
`

export const HeaderLinks = styled.div`
    padding: 2px;
    border: 1px solid red;
`

export const Links = styled(Link)`
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
`