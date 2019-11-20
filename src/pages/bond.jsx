import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import bondLogo from './img/bondLogo.svg'
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

        <img style={{width:"15%"}} src={ bondLogo } className="oboLogo" alt="logo" />
        <p className="bondP">   
        Bond is a platform that creates and maintains genuine relationships bewtween different generations through sharing skills and stories. With Bond, seniors will get a chance to connect, share and grow. This will give them more opportunities to soicialize while learning from each other.
        
        <br/>
        <br/>
        While I work on making the full case study check out <a style={{color:"#D26E5F"}}
         href="https://drive.google.com/file/d/1sUWekJRWAu_55Bt8YQtgwVClF6WAGYjz/view?usp=sharing" target="_blank">process book</a>
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
                       Check out my other projects:  <a className="footerObo" href="/obo"> Obo </a>
                       <a className="footerLine" href="/floatie">|</a>
                       <a className="footerObo" href="/google"> Google</a><br/>
                      

                          </Footer>


    </div>


  );
}

export default App;
