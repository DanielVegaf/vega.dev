import React from 'react'
import {
    Container,
    Main,
    Description,
    DescriptionTitle,
    DescriptionRoll,
    DescriptionLinks,
    Curriculum,
    CVLink
} from './Home.styled'
import Portfolio from '../portfolio/Portfolio'
import Footer from '../footer/Footer'
import Pdf from '../../assets/CV-DenilsonVega.pdf'

const Home = () => {
    return (
        <Container>
            <Main>
                <Description>
                    <DescriptionTitle>
                        <h3>Denilson Vega</h3>
                    </DescriptionTitle>
                    <DescriptionRoll>
                        <p>Frontend developer</p>
                    </DescriptionRoll>
                </Description>

                <DescriptionLinks>
                    <Curriculum>
                        <CVLink
                            primary
                            href={Pdf}
                            download="Curriculum Denilson Vega"
                            rel='noreferrer'
                        >
                            Descarga mi cv
                        </CVLink>
                        <CVLink
                            href="mailto:denilson.dvf@gmial.com"
                            target="_blank"
                            rel='noreferrer'
                        >
                            Hablemos
                        </CVLink>
                    </Curriculum>
                </DescriptionLinks>
            </Main>

            <Portfolio />
            <Footer />
        </Container>
    )
}

export default Home