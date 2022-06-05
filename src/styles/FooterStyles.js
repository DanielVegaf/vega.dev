import styled from 'styled-components'

export const FContainer = styled.footer`
    width: 100%;
    height: 10px;
    margin-top: 100px;
    padding: 20px;
    box-sizing: border-box;
`

export const FLegend = styled.div`
    text-align: center;
`

export const FMedia = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    padding-bottom: 20px;
`

export const FMediaLink = styled.a`
    display: inline-flex;
    align-items: center;
    margin: 10px;
    text-decoration: none;
    color: black;
    transition: .2 ease-in-out;

    &:hover {
        transition: .2 ease-in-out;
        font-weight: 900;
    }
`

