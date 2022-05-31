import React from 'react'
import {
    Curriculum,
    CVLink
} from '../styles/HomeStyles'
import Pdf from '../assets/CV-DenilsonVega.pdf'

const Home = () => {
    return (
        <div>
            <div>
                <h3>Denilson Vega</h3>
                <p>I’m a developer from Costa Rica who is mainly interested in web technologies.</p>
            </div>

            <Curriculum>
                <CVLink target='_blank' href={Pdf}>
                    Download CV
                </CVLink>
            </Curriculum>

            <div>
                <p>You can follow me on
                    <div
                        href='https://github.com/DanielVegaf'
                        target='_blank'
                        rel='noreferrer'
                    > GitHub 
                    </div>, Also on
                    <div
                        href='https://github.com/DanielVegaf'
                        target='_blank'
                        rel='noreferrer'
                    > Linkedin 
                    </div> and my
                    <div
                        href='https://github.com/DanielVegaf'
                        target='_blank'
                        rel='noreferrer'
                    > Email
                    </div>
                </p>
            </div>
        </div>
    )
}

export default Home