import logo from '../logo.png';
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar';

function Donate() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button style={{backgroundColor: '#018505'}} className="btn btn-success">Donate through Paypal</button>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button style={{backgroundColor: '#018505'}} className="btn btn-success">Donate through Stripe</button>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button style={{backgroundColor: '#018505'}} className="btn btn-success">Donate through Venmo</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button style={{backgroundColor: '#018505'}} className="btn btn-success">Metamask</button>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button style={{backgroundColor: '#018505'}} className="btn btn-success">Terra Station</button>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button style={{backgroundColor: '#018505'}} className="btn btn-success">Donate</button>
              </div>
            </div>
          </div>
        </div>
        <div style={{marginBottom: '200px'}}>

        </div>
        <div className="footer flex gap-x-8 align-center justify-center mt-8 md:mt-12">

          <a href="https://twitter.com/minnecados" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon height="40" width="40" className='fa svga' icon={faTwitter} />
          </a>

          <a href="https://discord.gg/kqVfW4J8RP" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon height="40" width="40" className='fa svga' icon={faDiscord} />
          </a>

          <a href="https://github.com/minnecadosDAO" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon height="40" width="40" className='fa svga' icon={faGithub} />
          </a>

        </div>
      </header>
    </div>
  );
}

export default Donate;
