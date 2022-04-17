import React from 'react'
import "./LandingPage.css";

import { Container,Row,Col,Button } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <div className='main'>

   <Container>
       <Row>
           <div className="intro-text">
               <div>
                    <h1 className='title text-center'>Welcome to CoolNotePad</h1>
                    <p className='sub-title text-center'> One place for all notes</p>
               </div>

                <div className="button-container">
                    <a href="/login">
                        <Button size="lg" className='landingButton'> Login </Button>
                    </a>
                    <a href="/register">
                        <Button size="lg" className='landingButton' variant='outline-primary'> Register</Button>
                    </a>
                </div>



           </div>
       </Row>
   </Container>

    </div>
  )
}

export default LandingPage