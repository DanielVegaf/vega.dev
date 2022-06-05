import React from 'react'
import { ImHtmlFive } from 'react-icons/im';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiStyledcomponents } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';

import {
  AboutContent,
  TitlesH2,
  ALengend,
  APresentation,
  ALegendTitle,
  ALegendP,
  AStack,
  ASkillContent,
  AstackItem,
  AStackContent,
  AStackIcon,
  AStackText
} from './AboutStyles'

import Footer from '../Footer'

const About = () => {
  return (
    <AboutContent>
      <ALengend>
        <ALegendTitle>Denilson Vega.</ALegendTitle>
        <ALegendP>Hello, I am Denilson Vega frontend developer, thank you for visiting my website.</ALegendP>
      </ALengend>

      <APresentation>
        <TitlesH2>¿Quien soy yo?</TitlesH2>
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
      </APresentation>

      <AStack>
        <div>
          <TitlesH2>My Stack</TitlesH2>
          <p>Here are some of the technologies I use:</p>
        </div>
        <ASkillContent>

          <AstackItem title='HTML'>
            <AStackContent>
              <AStackIcon>
                <ImHtmlFive />
              </AStackIcon>
              <AStackText>
                Html
              </AStackText>
            </AStackContent>
          </AstackItem>

          <AstackItem title='Css'>
            <AStackContent>
              <AStackIcon>
                <SiCss3 />
              </AStackIcon>
              <AStackText>
                Css
              </AStackText>
            </AStackContent>
          </AstackItem>

          <AstackItem title='Javascript'>
            <AStackContent>
              <AStackIcon>
                <SiJavascript />
              </AStackIcon>
              <AStackText>
                JavaScript
              </AStackText>
            </AStackContent>
          </AstackItem>

          <AstackItem title='React Js'>
            <AStackContent>
              <AStackIcon>
                <FaReact />
              </AStackIcon>
              <AStackText>
                React
              </AStackText>
            </AStackContent>
          </AstackItem>

          <AstackItem title='Styled-components'>
            <AStackContent>
              <AStackIcon>
                <SiStyledcomponents />
              </AStackIcon>
              <AStackText>
                Styled-components
              </AStackText>
            </AStackContent>
          </AstackItem>

          <AstackItem title='Github'>
            <AStackContent>
              <AStackIcon>
                <FaGitAlt />
              </AStackIcon>
              <AStackText>
                GitHub
              </AStackText>
            </AStackContent>
          </AstackItem>

        </ASkillContent>
      </AStack>

      <Footer />
    </AboutContent>
  )
}

export default About