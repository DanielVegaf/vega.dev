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
} from './HomeStyles'
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

                {/* <Curriculum>
                <CVLink target='_blank' href={Pdf}>
                    Download CV
                </CVLink>
            </Curriculum> */}
                <DescriptionLinks>
                    <Curriculum>
                        <CVLink
                            primary
                            href={Pdf}
                            target="_blank"
                            rel='noreferrer'
                        >
                            Descarga mi cv
                        </CVLink>
                        <CVLink
                            href="/"
                            target="_blank"
                            rel='noreferrer'
                        >
                            Hablemos
                        </CVLink>
                    </Curriculum>
                </DescriptionLinks>
            </Main>
        </Container>
    )
}

export default Home