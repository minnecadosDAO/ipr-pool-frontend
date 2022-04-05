//import useState hook to create menu collapse state
import React from "react";

//import react pro sidebar components
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
import { Link } from 'react-router-dom'

//import icons from react icons
import { FaList, FaRegHeart, FaTwitter, FaGithub, FaDiscord, FaSwimmingPool } from "react-icons/fa";
import { FiFileText, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { GiFarmer, GiFurBoot } from "react-icons/gi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import logo from './FAVICON.png';

let bootstrap = false;
let stake = false;
let perpetual = false;
let faq = false;

function getPath() {
  const pathname = window.location.pathname //returns the current url minus the domain name
  if(pathname === '/'){
    bootstrap = true;
    stake = false;
    perpetual = false;
    faq = false;
  } else if(pathname === '/faq'){
    faq = true;
    bootstrap = false;
    stake = false;
    perpetual = false;
  }
}

const Header = () => {
  getPath();


  return (
    <>
      <div id="header">
        <ProSidebar>
          <SidebarHeader>
            <div className="logotext">
              <img src={logo} style={{height: '90%', width: '90%'}} className="App-logo" alt="logo" />
            </div>

          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={bootstrap} icon={<GiFurBoot />}>
                <Link style={{color: 'black'}} to='/'>IPR Pool</Link>
              </MenuItem>
              <MenuItem active={faq} icon={<FiFileText />}>
                <Link style={{color: 'black'}} to='/faq'>FAQ</Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>
                <a style={{color: 'black'}} href='https://minnecados.gitbook.io/minnecados-protocol/'>Docs</a>
              </MenuItem>
              <MenuItem icon={<FaDiscord />}>
                <a style={{color: 'black'}} href="https://discord.gg/kqVfW4J8RP">Discord</a>
              </MenuItem>
              <MenuItem icon={<FaTwitter />}>
                <a style={{color: 'black'}} href="https://twitter.com/minnecados">Twitter</a>
              </MenuItem>
              <MenuItem icon={<FaGithub />}>
                <a style={{color: 'black'}} href="https://github.com/minnecadosDAO">Github</a>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
