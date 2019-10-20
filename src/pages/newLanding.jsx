import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import downArrowWhite from './img/arrow-down-white.svg'
import './floatie.css'
import './main.css'
import './landing.css'



// Components
import ProjectCard from '../components/ProjectCard'
import { Title, BigTitle, Subtitle } from '../elements/Titles'





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



const Index = () => (
  <>
   <section className="landingPage landingWrapper">
       <div className="landingWrapper">
           <h1>hello</h1>
       </div>
   </section>
  </>
)

export default Index