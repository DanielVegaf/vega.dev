import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 330px);
    gap: 40px;
    padding: 20px;
    justify-content: center;

    @media (max-width: 848px) {
        grid-template-columns: 100%;
    }
    @media (max-width: 670px) {
        grid-template-columns: 100%;
    }
`

export const Card = styled.div`
    width: 330px;
    height: 345px;
    background-color: blueviolet;
    /* border-radius: 10px; */
    font-size: 1.5rem;
    list-style: none;
    text-align: center;
    color: #ecf0f1;

    @media (max-width: 848px) {
        width: 100%;
        background-color: red;
    }
    @media (max-width: 670px) {
        width: 100%;
        background-color: gray;
    }
`
