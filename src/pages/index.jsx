import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { Link } from 'react-router';
import me from './img/me.jpeg';
import downArrowWhite from './img/arrow-down-white.svg'
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
            title="obo"
            link="/obo"
            bg="linear-gradient(to right, #00bfff 0%, #ffffff 100%)"
          >
            Helping children with diabilities <br/> develop healthy social skills
          </ProjectCard>
          <ProjectCard
            title="floatie"
            link="/floatie"
            bg="linear-gradient(to right, pink 0%, HotPink 100%)"
          >
            A social stage for musicians<br />
            (24 hour design competition submission)
          </ProjectCard>
          <ProjectCard
            title="Web Design Projects"
            link="/webDesign
            "
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >

          </ProjectCard>



        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About me</Title>
        <AboutHero>

          <AboutSub>
            Currently I live in Savannah Ga, when the sun is up I am a user experience design student at Savannah College of Art and Design (SCAD). Come sundown my passion lies on the web, I love designing and developing websites and mobile apps. This summer I am interning at iCIMS. iCIMS software allows your company to grow through better recruiting while filling your talent pool and onboarding new employees.
          </AboutSub>
        </AboutHero>
        <AboutDesc>


        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
          Say <a style={{color:"pink"}} href="mailto:eflatt18@gmail.com">Hi,</a> check out my
            <a style={{color:"pink"}} href="https://drive.google.com/file/d/1pflOhbwCbNat1gpWGbourQV2aE9x0As4/view?usp=sharing"target="_blank"> Resume</a> or find me on other platforms:{' '}
            <a style={{color:"pink"}} href="https://dribbble.com/ericflatt"target="_blank">Dribbble</a> &{' '}
            <a style={{color:"pink"}} href="https://www.instagram.com/eric_flatt/"target="_blank">Instagram</a>
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
