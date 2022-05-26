import React from 'react'
import Footer from './Footer'
import { ImHtmlFive } from 'react-icons/im';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiStyledcomponents } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';

import { AStack, AstackItem, AStackContent } from '../styles/AboutStyles'

const About = () => {
  return (
    <div>
      <div>
        <h2>Denilson Vega.</h2>
        <p>Hello, I am Denilson Vega frontend developer, thank you for visiting my website.</p>
      </div>

      <div>
        <h3>¿Quien soy yo?</h3>
        <p>I am a Frontend developer, I currently study on my own,
          specifically in JavaScript technologies, React Js, Vue Js, I
          like to work as a team, form a good working group to
          better develop our projects.
          <br></br>
          <br></br>
          Passionate about the world of technology development
          and its entire ecosystem, I am excited to be able to enter
          fully and be able to evolve my skills more in this great
          environment.
        </p>
      </div>

      <AStack>
        <h3>My Stack</h3>
        <p>Here are some of the technologies I use:</p>
        <AstackItem title='HTML'>
          <AStackContent>  
            <span><ImHtmlFive /></span>
            <p>Html</p>
          </AStackContent>
        </AstackItem>
        <AstackItem title='Css'>
          <AStackContent>  
            <span><SiCss3 /></span>
            <p>Css</p>
          </AStackContent>
        </AstackItem>
        <AstackItem title='Javascript'>
          <AStackContent>  
            <span><SiJavascript /></span>
            <p>JavaScript</p>
          </AStackContent>
        </AstackItem>
        <AstackItem title='React Js'>
          <AStackContent>  
            <span><FaReact /></span>
            <p>React</p>
          </AStackContent>
        </AstackItem>
        <AstackItem title='Styled-components'>
          <AStackContent>  
            <span><SiStyledcomponents /></span>
            <p>Styled-components</p>
          </AStackContent>
        </AstackItem>
        <AstackItem title='Github'>
          <AStackContent>  
            <span><FaGitAlt /></span>
            <p>GitHub</p>
          </AStackContent>
        </AstackItem>
      </AStack>

      <Footer />

    </div>
  )
}

export default About