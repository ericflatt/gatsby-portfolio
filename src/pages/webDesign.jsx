import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { Link } from 'react-router';
import floatieLogo from './img/floatieLogo.png'
import downArrow from './img/arrow-down.svg'
import './webDesign.css'
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
    <div className="webDesign">
      <header className="App-header">
        <h1>
        Web Design / Development
          </h1>
        <p style={{lineHeight:"1.4"}}>
        Check out these cool projects I worked on<br/>
        (This page isn't fully done yet)
          </p>
          <img src={ downArrow } className="downArrow bounce" alt="scroll down" />
      </header>

      <div style={{textAlign:"left"}} className="textPadding sectionTop">
      <h1>Development</h1>
      <h3>SCAD StartUp</h3>
      <a className="webDesignLink" target="_blank" href="https://scadstartup.club">Live Link</a>
          </div>


            <Footer>
            Made with <a style={{color:"red"}}>&#9829;</a>{' '}
             , React and other stuff<br/>

             Check out my other projects:  <a className="footerObo" href="/obo"> Obo </a>
             <a className="footerLine" href="/">|</a>
             <a className="footerObo" href="/floatie"> floatie</a><br/>
             <a className="orGo" href="/">or go </a>
             <a className="footerObo" href="/">home</a>


                </Footer>


    </div>
  );
}

export default App;
