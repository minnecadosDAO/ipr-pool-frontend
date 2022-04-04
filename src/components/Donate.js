import paypal from '../paypal.png';
import stripe from '../stripe.png';
import venmo from '../venmo.png';
import metamask from '../metamask.jpeg';
import ts from '../ts.jpeg';
import ap from '../ap.png';
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar';

function Donate() {
  return (
    <div className="App">
      <Navbar />
      <h1 style={{textAlign: 'center'}}>Make a Donation</h1>
      <header className="App-header">
        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <img src={paypal} className="App-logo" alt="paypal" />
                <br/>
                <button style={{backgroundColor: '#018505'}} className="btn btn-success">Donate through Paypal</button>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <img src={stripe} className="App-logo" alt="stripe" />
                <br/>
                <button style={{backgroundColor: '#018505'}} className="btn btn-success">Donate through Stripe</button>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <img src={venmo} className="App-logo" alt="venmo" />
                <br/>
                <button style={{backgroundColor: '#018505'}} className="btn btn-success">Donate through Venmo</button>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div class="row">

          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <img src={metamask} className="App-logo" alt="metamask" />
                <br/>
                <button style={{backgroundColor: '#018505'}} className="btn btn-success">Metamask</button>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <img src={ts} className="App-logo" alt="ts" />
                <br/>
                <button style={{backgroundColor: '#018505'}} className="btn btn-success">Terra Station</button>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
              <img src={ap} className="App-logo" alt="ap" />
              <button style={{backgroundColor: '#018505'}} className="btn btn-success">Angel Protocol</button>
              </div>
            </div>
          </div>

        </div>
        <div style={{marginBottom: '50px'}}>

        </div>
        <div className="flex gap-x-8 align-center justify-center mt-8 md:mt-12">

          <a href="https://twitter.com/minnecados" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon height="40" width="40" className='fa svga' icon={faTwitter} />
          </a>

          <a href="https://discord.gg/kqVfW4J8RP" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon height="40" width="40" className='fa svga' icon={faDiscord} />
          </a>

          <a href="https://github.com/minnecadosDAO" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon height="40" width="40" className='fa svga' icon={faGithub} />
          </a>

          <a href="https://medium.com/@minnecados" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon height="40" width="40" className='fa svga' icon={faMedium} />
          </a>

        </div>
      </header>
    </div>
  );
}

export default Donate;
