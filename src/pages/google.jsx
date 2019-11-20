import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import googleLogo from './img/googleLogo.svg'
import downArrow from './img/arrow-down.svg'

import './landing.css'

const Footer = styled.footer`
  ${tw`text-center text-grey  pin-b p-6 font-sans text-md lg:text-lg`};
`




function App() {
  return (
    <div style={{background:"white"}} className="App">
      <header className="App-header">

      <a className="downArrow" href="/">
      <img src={ downArrow } className="backArrow" alt="go back" />
      </a>

        <img style={{width:"15%"}} src={ googleLogo } className="oboLogo" alt="logo" />
        <p className="googleP" style={{width:"70%",fontSize:"18px",marginTop:"50px"}}>   
        This past fall quarter I was a <span style={{fontWeight:"900"}}>UX Designer and Web Developer</span> for a SCADpro collaboration with Google to research and develop digital advertising concepts, creating an innovative and effective campaign that includes new formats for different surfaces informed by future market trends.

        <br/>
        <br/>
        <span style={{fontStyle:"italic", fontSize:"14px"}}>work is under nda</span>
          </p>
        <img src={ downArrow } className="downArrow bounce" alt="scroll down" />
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
                       <a className="footerLine" href="/floatie">|</a>
                       <a className="footerObo" href="/obo"> Obo</a><br/>
                      

                          </Footer>


    </div>


  );
}

export default App;
