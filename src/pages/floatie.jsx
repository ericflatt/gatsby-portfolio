import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { Link } from 'react-router';
import floatieLogo from './img/floatieLogo.png'
import downArrow from './img/arrow-down.svg'
import bg from './img/floatieBG.png'
import floatieHome from './img/home-floatie.png'
import floatieFilter from './img/filter-floatie.png'
import floatiePool from './img/pool-floatie.png'
import floatieInPool from './img/in-pool-floatie.png'
import floatieMap from './img/map-floatie.png'
import floatieMapView from './img/map-view-floatie.png'
import floatieProfile from './img/profile-floatie.png'
import floatieProfileTwo from './img/profile-two-floatie.png'


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
const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const SingleWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const ThreeColumns = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

function App() {
  return (

    <div className="Floatie">
      <header className="App-header">

        <a className="downArrow" href="/">
        <img src={ downArrow } className="backArrow" alt="go back" />
        </a>

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
            <h1 style={{paddingRight:"10px"}}>
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


            <SingleWrapper style={{marginTop:"200px"}}>
            <div>
            <img src={ floatieHome } className="floatieImg" alt="floatie home"/>
            <h2>
            floatie home screen
              </h2>
            <h5>
            The app's landing page.
              </h5>
                </div>
            </SingleWrapper>

            <ThreeColumns style={{marginTop:"150px"}}>
            <div>
            <img src={ floatieMap } className="floatieImgTwo" alt="floatie home"/>
            <h5 className="floatieParagraph">
              The map is where you see other people in your area who want to potentially meet up and play together.
                </h5>
            </div>
            <div>
            <img src={ floatieMapView } className="floatieImgTwo" alt="floatie home"/>
            <h5 className="floatieParagraph">
              When you click on a floatie an abbreviated profile pops up giving you quick, general information about that specific individual.
                </h5>
            </div>
            <div>
            <img src={ floatieProfile } className="floatieImgTwo" alt="floatie home"/>
            <h5 className="floatieParagraph">
              Click again and it takes you that person's profile page. Here you can see their bio, how far away they are, and also listen to some of their music.
                </h5>
            </div>
            </ThreeColumns>

            <ThreeColumns style={{marginTop:"150px",marginBottom:"150px"}}>
            <div>
            <img src={ floatieFilter } className="floatieImgTwo" alt="floatie home"/>
            <h5 className="floatieParagraph">
              Here you can filter by genres to find people who are interested in playing similar music as you are.
                </h5>
            </div>
            <div>
            <img src={ floatiePool } className="floatieImgTwo" alt="floatie home"/>
            <h5 className="floatieParagraph">
              Public pools are spread throughout poplular, public areas in your city. Public pools are where anyone can show up and start jamming with each other.
                </h5>
            </div>
            <div>
            <img src={ floatieInPool } className="floatieImgTwo" alt="floatie home"/>
            <h5 className="floatieParagraph">
              There are also private pools you can be invited to. When a user finds you on the map they can invite you to their pool if they think you are interested in playing similar music.
                </h5>
            </div>
            </ThreeColumns>

            <div style={{textAlign:"center",marginTop:"150px"}}>
              <h1>
                – Thank you
                  </h1>

                    </div>


            {/*   Made with <a style={{color:"red"}}>&#9829;</a>{' '}
               , React and other stuff<br/> */}

            <Footer>
             Check out my other projects:  <a className="footerObo" href="/obo"> Obo </a>
             <a className="footerLine" href="/">|</a>
             <a className="footerObo" href="/webDesign"> Web Design</a><br/>
             



                </Footer>


    </div>
  );
}

export default App;
