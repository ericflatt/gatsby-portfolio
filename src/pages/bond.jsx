import React from 'react'
import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import tw from 'tailwind.macro'
import bondLogo from './img/bondLogo.svg'
import bondCircles from './img/bondCircles.svg'
import downArrow from './img/arrow-down.svg'
import getTogether from './img/getTogether.png'
import scrapbook from './img/scrapbook.png'
import community from './img/community.png'
import elderlyUI from './img/elderlyUI.svg'
import elderlyUITwo from './img/elderlyUI-2.svg'
import tutorial from './img/tut.svg'
import access from './img/access.svg'

import './landing.css'

const Footer = styled.footer`
  ${tw`text-center text-grey  pin-b p-6 font-sans text-md lg:text-lg`};
`
const ThreeColumns = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
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

      <a className="downArrow" href="/">
      <img src={ downArrow } className="backArrow" alt="go back" />
      </a>

        <img style={{width:"15%"}} src={ bondLogo } className="oboLogo" alt="logo" />
       <h5>Creating genuine relationships between <span style={{color:'#d26e5f'}}>different generations</span></h5>
        <img src={ downArrow } className="downArrow bounce" alt="scroll down" />
      </header>

      <div style={{display:'block',margin:'auto', width:'90%',textAlign:'center'}}>
        <Fade>
          <h1 style={{marginTop:'200px',display:'block',margin:'auto',paddingTop:'200px'}}>A person turns 65 every <span style={{color:'#d26e5f'}}>eight seconds</span></h1>
          <h1 style={{marginTop:'150px'}}>By 2030, around <span style={{color:'#d26e5f'}}>19% of people</span> in the US will be over 65
          </h1>
          <h1 style={{marginTop:'150px'}}>That is about the <span style={{color:'#d26e5f'}}> same number of people</span> in the US who own an iPhone today
          </h1>
        </Fade>
      </div>

<div style={{width:'90%',display:'block',margin:'auto',textAlign:'center'}}>
  <Fade>
  <h1 style={{display:'block',margin:'auto',marginTop:'200px'}}>Due to the challenges that come from aging, elders are <span style={{color:'#d26e5f'}}>unable to stay active and be social.</span> This can have a negative impact on their health and living situation.</h1>
  </Fade>
</div>

<div>
<img style={{width:"15%", paddingTop:'200px',display:'block',margin:'auto'}} src={ bondCircles } className="oboLogo" alt="logo" />
</div>

<div style={{display:'block',margin:'auto', width:'90%',paddingTop:'100px'}}>
  <h2 style={{marginTop:'0px'}}>
  Bond is a platform that creates and maintains genuine relationships between different generations through sharing skills and stories. With Bond, seniors will get a chance to Connect, Share and Grow. This will give seniors more opportunities to socialize while learning from each other.
  </h2>
</div>
     
<ThreeColumns style={{lineHeight:"1.4",marginTop:'100px'}} className="textPadding">
              <div>
                <img style={{width:"100%"}}src={ community } className="homeScreen" alt="home screen"/>
                <h3>Community Events</h3>
                <p>
                Seniors can gather together as larger groups. Community centers can also organize events and recruit suitable volunteers for the events
                    </p>
                  </div>

                  <div>
                    <img style={{width:"100%"}}src={ getTogether } className="homeScreen" alt="home screen"/>
                    <h3>Get Togethers</h3>
                    <p>
                    Explore different Get Toegethers based on interests and also create one to share skills and stories with other people
                        </p>
                      </div>

                      <div>
                        <img style={{width:"100%"}}src={ scrapbook } className="homeScreen" alt="home screen"/>
                        <h3>Scrapbooks</h3>
                        <p>
                        Allows people to record moments throughout the events and share it with each other. Everyone can join to put together scrapbooks                            
                        </p>
                          </div>
                </ThreeColumns>

<ThreeColumns style={{lineHeight:"1.4",marginTop:'100px'}} className="textPadding">
              <div>
                <h1 style={{textAlign:'center',color:'#d26e5f'}}>Connect</h1>
                <h3 style={{textAlign:'center'}}>
                People can experience bonding as a group to form a connection
                    </h3>
                  </div>

                      <div>
                        <h1 style={{textAlign:'center',color:'#d26e5f'}}>Grow</h1>
                        <h3 style={{textAlign:'center'}}>
                        People get a chance to share their passion with other people and make a positive impact
                        </h3>
                          </div>
                
                <div>
                    <h1 style={{textAlign:'center',color:'#d26e5f'}}>Share</h1>
                    <h3 style={{textAlign:'center'}}>
                    Providing an inclusive learning environment of different skills and activities
                        </h3>
                      </div>
</ThreeColumns>

<div style={{width:'90%',display:'block',margin:'auto',paddingTop:'100px',color:'#d26e5f',fontSize:'21px'}}>
  <h1 >An elderly friendly Interface</h1>
</div>

<div>
<img style={{width:"90%",marginTop:'50px',display:'block',margin:'auto'}}src={ elderlyUI } />
</div>

<div>
<img style={{width:"90%",marginTop:'50px',display:'block',margin:'auto'}}src={ elderlyUITwo } />
</div>

<div style={{width:'90%',display:'block',margin:'auto',paddingTop:'100px',color:'#d26e5f'}}>
  <h1 style={{zIndex:'999'}}>Tutorials</h1>
</div>

<div>
<img style={{width:"90%",marginTop:'0px',display:'block',margin:'auto'}}src={ tutorial } />
</div>

<div>
<img style={{width:"90%",marginTop:'0px',display:'block',margin:'auto'}}src={ access } />
</div>


    </div>


  );
}

export default App;
