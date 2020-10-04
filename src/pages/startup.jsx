import React from 'react'
import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import tw from 'tailwind.macro'
// import logoAnimation from './img/startup-video.gif'
import downArrow from './img/arrow-down.svg'


import './landing.css'

const Footer = styled.footer`
  ${tw`text-center text-grey  pin-b p-6 font-sans text-md lg:text-lg`};
`
const ThreeColumns = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 3rem;
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
    <div style={{background:"#f4f4f4",color:'#595959'}} className="App">
      <header className="App-header">

    <div>
    {/* <img style={{width:"90%"}} src={ logoAnimation } alt="" /> */}
    <p style={{textAlign:"left", paddingLeft:"5%", marginTop:"0",fontSize:"14px"}}>Logo animation by Will Burkart</p>
    <a className="downArrow" href="/">
      <img src={ downArrow } className="backArrow" alt="go back" />
      </a>

    </div>

    <div style={{paddingLeft:"5%",textAlign:"left",paddingRight:"5%"}}>
        <h5>Developed the website for StartUp 2020 alongside with <a target="_blank" className="footerObo" href="https://ndrewgood.com/index.html">Andrew Goodridge</a>. StartUp is an annual design sprint with over 200 participants.</h5>
    </div>
    <h5 style={{textAlign:"center"}}>
            <a className="footerObo" target="_blank" href="https://scadstartup.club/">Link to live site</a>
        </h5>
      </header>




<div style={{textAlign:"center",marginTop:"150px"}}>
                <h1>
                  – Thank you
                    </h1>

                      </div>

                      {/*   Made with <a style={{color:"red"}}>&#9829;</a>{' '}
                         , React and other stuff<br/> */}

                      <Footer>
                       Check out my other projects:  <a className="footerObo" href="/floatie"> floatie </a>
                       <a className="footerLine" href="/obo">|</a>
                       <a className="footerObo" href="/comotion"> CoMotion</a><br/>
                      

                          </Footer>

    </div>


  );
}

export default App;
