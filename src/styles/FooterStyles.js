import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FContainer = styled.footer`
    height: 100px;
    margin: 50px 0;
    display: flex;
    justify-content: space-between;
    /* background-color: red; */
`

export const FNavegation = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
    /* background-color: aqua; */
    padding: 5px;
`

export const FLink = styled(Link)`
    display: inline-flex;
    text-decoration: none;
    color: #333;
    font-weight: 700;
`

export const FLinkicon = styled.span`
    display: inline-flex;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    color: gray;

    &:hover{
        color: blue;
    }
`

export const FMedia = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* background-color: greenyellow; */
    padding: 5px;
`

export const FMediaLink = styled.a`
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
`

