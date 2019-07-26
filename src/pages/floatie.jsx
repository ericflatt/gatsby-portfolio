import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { Link } from 'react-router';
import floatieLogo from './img/floatieLogo.png'
import downArrow from './img/arrow-down.svg'
import bg from './img/floatieBG.png'
import './floatie.css'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

const Footer = styled.footer`
  ${tw`text-center text-grey  pin-b p-6 font-sans text-md lg:text-lg`};
`


function App() {
  return (
    <div className="Floatie">
      <header className="App-header">
        <img src={ floatieLogo } className="floatieLogo" alt="logo" />
        <h1>
        floatie
          </h1>
        <p>
        a social stage for musicians
          </p>
        <img src={ downArrow } className="downArrow bounce" alt="scroll down" />
      </header>

    <div className="floatieContent">
        <h1>
          Problem
            </h1>
        <p className="floatieP">
        ______ <br className="dividerLine" />
          12% of Americans will suffer from a social anxiety disorder in their lifetime. Social anxiety disorder causes an irrational fear of unfamiliar people and situations resulting in, social isolation.
            </p>
        </div>

        <div className="floatieContent">
            <h1>
              Playing music creates
                </h1>
            <p className="floatieP">
            ______ <br className="dividerLine" />
              Purpose <br />
              Wellness <br />
              Inspiration <br />
              Social Bonding <br />
              Belongingness <br />
              Emotional Warmth <br />
              Conncection <br />
                </p>
            </div>

        <div className="floatieContent">
            <h1>
              Our Idea
                </h1>
            <p className="floatieP">
            ______ <br className="dividerLine" />
              A social stage for local musicians to create new social connections through playing music together.
                </p>
            </div>

            <Footer>
            Made with <a style={{color:"red"}}>&#9829;</a>{' '}
             , React and other stuff<br/>

             Check out my other projects:  <a className="footerObo" href="/obo"> Obo </a>
             <a className="footerLine" href="/">|</a>
             <a className="footerObo" href="/webDesign"> Web Design</a><br/>
             <a className="orGo" href="/floatie">or go </a>
             <a className="footerObo" href="/">home</a>


                </Footer>


    </div>
  );
}

export default App;
