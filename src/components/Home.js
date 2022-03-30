import logo from '../logo.png';
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div style={{marginBottom: '200px'}}>
          <img src={logo} className="App-logo" alt="logo" />
          <br/><br/>
          <a href='https://minnecados.gitbook.io/minnecados-protocol/'>
            <button style={{backgroundColor: '#018505'}} className="btn btn-success">Lite Paper</button>
          </a>
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

          <a href="https://medium.com/@minnecados" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon height="40" width="40" className='fa svga' icon={faMedium} />
          </a>

        </div>
      </header>
    </div>
  );
}

export default Home;
