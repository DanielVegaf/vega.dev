import React from 'react'
import {
    ContainerHome,
    InfoHome,
    Img,
    ImgContainer,
    Curriculum,
    CVLink,
    LinkContact
} from '../styles/HomeStyles'
import Image from '../assets/profile.png'
import Pdf from '../assets/CV-DenilsonVega.pdf'

const Home = () => {
    return (
        <ContainerHome>
            <InfoHome>
                <ImgContainer>
                    <Img src={Image} alt='profile' title='Denilson Vega' />
                </ImgContainer>
                <h3>Denilson Vega</h3>
                <p>I’m a developer from Costa Rica who is mainly interested in web technologies.</p>
            </InfoHome>

            <Curriculum>
                <CVLink download="CV-DenilsonVega" href={Pdf}>
                    Download CV
                </CVLink>
            </Curriculum>

            <LinkContact>
                <p>You can follow me on
                    <a
                        href='https://github.com/DanielVegaf'
                        target='_blank'
                        rel='noreferrer'
                    > GitHub
                    </a>
                    , Also on
                    <a
                        href='https://github.com/DanielVegaf'
                        target='_blank'
                        rel='noreferrer'
                    > Linkedin
                    </a>
                    and my
                    <a
                        href='https://github.com/DanielVegaf'
                        target='_blank'
                        rel='noreferrer'
                    > Email
                    </a>
                </p>
            </LinkContact>
        </ContainerHome>
    )
}

export default Home