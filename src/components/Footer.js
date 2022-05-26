import React from 'react'
import { FContainer, FNavegation, FLink, FLinkicon, FMedia, FMediaLink } from '../styles/FooterStyles';
import { BsArrowBarRight } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
    return (
        <FContainer>
            <FNavegation>
                <FLink
                    to="/">Home
                    <FLinkicon>
                        <BsArrowBarRight />
                    </FLinkicon>
                </FLink>

                <FLink
                    to="/portfolio">Portfolio
                    <FLinkicon>
                        <BsArrowBarRight />
                    </FLinkicon>
                </FLink>
                
                <FLink
                    to="/about">About
                    <FLinkicon>
                        <BsArrowBarRight />
                    </FLinkicon>
                </FLink>
            </FNavegation>

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