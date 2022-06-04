import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const Main = styled.div`
    width: 100%;
    height: 100%;
`;

export const Description = styled.div`
    padding: 0 20px;
`;

export const DescriptionTitle = styled.div`
    font-size: 60px;
    text-align: justify;
`;

export const DescriptionRoll = styled.div`
   font-size: 40px;
   margin-top: -60px;
`;

export const DescriptionLinks = styled.div`
    display: flex;
    padding: 10px;
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
    font-weight: ${props => props.primary ? "200" : "600"};
    background: ${props => props.primary ? "black" : "white"};
    color: ${props => props.primary ? "white" : "black"};
`;