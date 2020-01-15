import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import downArrowWhite from './img/arrow-down-white.svg'
import flux from './img/fluxFIX.png'
import './floatie.css'
import './main.css'



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




const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};

`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hey! <br /> I'm Eric.
        </BigTitle>
        <Subtitle>I'm a User Experience Design student studying at Savannah College of Art and Design.
        </Subtitle>

          <img style={{margin:"auto",display:"block",position:"absolute",left:"0",right:"0",bottom:"0",content:"keep"}} src={ downArrowWhite } className="downArrowWhite bounce" alt="scroll down" />

          <div className="keepScrolling">keep scrolling to view my projects and learn more about me</div>

      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
        <ProjectCard
            title="Bond"
            link="/bond
            "
            bg="linear-gradient(to right, #D26E5F 0%, #ffffff 100%)"
          >
            <h2>Creating genuine relationships between different generations</h2>
          </ProjectCard>

          <ProjectCard
            title="obo"
            link="/obo"
            bg="linear-gradient(to right, #00bfff 0%, #ffffff 100%)"
          >
            
            <h2>Helping children with disabilities <br/> develop healthy social skills</h2>
          </ProjectCard>

          <ProjectCard
            title="Google x SCADpro"
            link="/google"
            bg="linear-gradient(to right, #0f9d58 0%, #ffffff 100%)"
          >
            <h2>The future of online advertising</h2>
          </ProjectCard>

          <ProjectCard
            title="floatie"
            link="/floatie"
            bg="linear-gradient(to right, pink 0%, HotPink 100%)"
          >
           <h2>A social stage for musicians<br />
            (24 hour design competition entry) </h2> 
          </ProjectCard>
       



        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About me</Title>
        <AboutHero>
        
          <AboutDesc style={{textAlign:"left", marginLeft:"25px"}}>
          I'm a User Experience Design student at the Savannah College of Art and Design in Savannah, GA. My passion for responsive web design and development as well as mobile app design means you can always find me in front of my computer. Music has been a huge part of my life for as long as I can remember, so I always make sure to catch my favorite bands live, such as Cage the Elephant, Slipknot, Tool and Arctic Monkeys. This past summer, I had the opportunity to join iCIMS as a UX Design Intern, and I'm looking forward to tackling the next challenge that comes my way. 
          </AboutDesc>
        </AboutHero>
        <AboutDesc>
    

        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
          Say <a style={{color:"pink"}} href="mailto:eflatt18@gmail.com">Hi,</a> check out my
            <a style={{color:"pink"}} href="https://drive.google.com/file/d/1l61pqSADWsvSMep6_2WfdyUGQQWi2WwE/view?usp=sharing"target="_blank"> Resume</a> or find me on other platforms:{' '}
            <a style={{color:"pink"}} href="https://www.instagram.com/eric_flatt/"target="_blank">Instagram</a> &{' '}
            <a style={{color:"pink"}} href="https://dribbble.com/ericflatt"target="_blank">Dribbble</a>
          </ContactText>
        </Inner>

        {/*<Footer>
        Made with <a style={{color:"red"}}>&#9829;</a>{' '}
         , React and other stuff
        </Footer>*/}
        
      </Contact>
    </Parallax>
  </>
)

export default Index