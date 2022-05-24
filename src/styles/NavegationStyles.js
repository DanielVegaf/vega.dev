import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledHeader = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
    /* background-color: red; */
`

export const LinkTitle = styled(Link)`
    color: #2e4acd;
    text-decoration: none;
`

export const Title = styled.h1`
    font-size: 2rem;
`

export const HeaderLinks = styled.div`
    padding: 1rem;
    margin-left: 1.875rem;
    margin-right: -1.875rem;
`

export const Links = styled(Link)`
    color: #000;
    margin: 0 5px;
    text-decoration: none;
    transition: .2s ease-in-out;

    &:hover{
        color: #2e4acd;
    }
`