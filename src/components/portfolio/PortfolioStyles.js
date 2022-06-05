import styled from 'styled-components'

export const GridContainer = styled.div``
export const GridTitle = styled.div`
    width: 80%;
    font-size: 1.5rem;
    margin: 0 auto;
    text-align: justify;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    gap: 40px;
    margin-top: 50px;
    justify-content: center;

    @media (max-width: 848px) {
        grid-template-columns: 100%;
        grid-template-columns: repeat(auto-fill, 350px);
    }
    @media (max-width: 740px) {
        grid-template-columns: 100%;
    }
    @media (max-width: 670px) {
        grid-template-columns: 100%;
    }
`

export const Card = styled.div`
    box-sizing: border-box;
    width: 350px;
    height: 100%;
    font-size: 1.5rem;
    list-style: none;
    color: black;
    padding: 20px;
    background-color: #b2bec3;
    ${props => props.first && `background-color: #fab1a0`};
    ${props => props.second && `background-color: #0984e3`};
    ${props => props.third && `background-color: #55efc4`};
    ${props => props.fourth && `background-color: #a29bfe`};

    @media (max-width: 848px) {
        width: 100%;
    }
    @media (max-width: 670px) {
        width: 100%;
        display: flex;
        padding: 50px;
    }
`

export const CardMain = styled.div``
export const CardTitle = styled.div``
export const CardContentText = styled.div``

export const CardText = styled.p`
    text-align: justify;
`

export const CardContentLinks = styled.div`
    margin-bottom: 30px;
`

export const CardLink = styled.a`
    background-color: black;
    color: white;
    text-decoration: none;
    margin-right: 10px;
    padding: 10px;
    font-size: 1rem;
    transition: .2s ease-in-out;
    &:hover{
        border-radius: 5px;
        transition: .2s ease-in-out;
        box-shadow: 3px 3px black;
    }
`
