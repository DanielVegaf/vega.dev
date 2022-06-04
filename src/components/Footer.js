import React from 'react'
import { 
    FContainer, FLegend, FMedia, FMediaLink } from '../styles/FooterStyles';

import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
    return (
        <FContainer>
            

            <FLegend>
            Puedes seguirme en:
            </FLegend>

            <FMedia>
                <FMediaLink
                    href='https://github.com/DanielVegaf'
                    target='_blank'
                    rel='noreferrer'
                > GitHub<FaGithub />
                </FMediaLink>
                <FMediaLink
                    href='https://www.linkedin.com/in/denilsonvega/'
                    target='_blank'
                    rel='noreferrer'
                >Linkedin<AiFillLinkedin />
                </FMediaLink>
                <FMediaLink
                    href='https://twitter.com/denilson_dvf'
                    target='_blank'
                    rel='noreferrer'
                >Twitter<AiFillTwitterCircle />
                </FMediaLink>
            </FMedia>
        </FContainer>
    )
}

export default Footer