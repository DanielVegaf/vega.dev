import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const Main = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Description = styled.div`
    text-align: center;
    transition: .2 ease-in-out;
    @media screen and (max-width: 960px) {
        padding: 0 20px;
        transition: .2 ease-in-out;
    }
    @media screen and (max-width: 500px) {
        font-size: 2rem;
        transition: .2 ease-in-out;
    }
`;

export const DescriptionTitle = styled.div`
    font-size: 60px;
    transition: .2 ease-in-out;
    @media screen and (max-width: 960px) {
        text-align: justify;
        transition: .2 ease-in-out;
    }
    @media screen and (max-width: 500px) {
        text-align: justify;
        transition: .2 ease-in-out;
    }
`;

export const DescriptionRoll = styled.div`
   font-size: 40px;
   margin-top: -60px;
   transition: .2 ease-in-out;
   @media screen and (max-width: 960px) {
        text-align: justify;
        transition: .2 ease-in-out;
    }
   @media screen and (max-width: 500px) {
        text-align: justify;
        transition: .2 ease-in-out;
    }
`;

export const DescriptionLinks = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    transition: .2 ease-in-out;
    @media screen and (max-width: 960px) {
        justify-content: start;
        transition: .2 ease-in-out;
    }
   @media screen and (max-width: 500px) {
        justify-content: start;
        transition: .2 ease-in-out;
    }
`;

export const Curriculum = styled.div`
    margin: 0 20px 0 0;
`;

export const CVLink = styled.a`
    text-decoration: none;
    border: 2px solid black;
    color: black;
    padding: 10px;
    margin: 10px;
    transition: .2s ease-in-out;
    font-weight: ${props => props.primary ? "200" : "600"};
    background: ${props => props.primary ? "black" : "white"};
    color: ${props => props.primary ? "white" : "black"};

    &:hover{
        transition: .2s ease-in-out;
        border-radius: 5px;
        box-shadow: 3px 3px black;
    }
`;