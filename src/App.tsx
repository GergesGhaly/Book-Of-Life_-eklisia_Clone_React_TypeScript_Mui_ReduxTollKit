import React, { useEffect, useState } from 'react';
import './App.css';
import SideBar from './SideBar';
import Nav from './Nav';
import Chapter from "./Chapter";
import Footer from './Footer';
import Login from './Login';
import Settings from './Settings';
import About from './About';
import axios from 'axios'

function App() {

// 
  const [open, setOpen] = React.useState<boolean>(true);
  const [loginopen, setLoginopen] = React.useState<boolean>(false);
  const [settingsOpen, settingsSetOpen] = React.useState<boolean>(false);
  const [AboutOpen, AboutSetOpen] = React.useState<boolean>(false);

  // handel login modal
  const handleOpen = () => setLoginopen(true);
  const handleClose = () => setLoginopen(false);

  // handel login modal
  
  const handlesettingsOpen = () => settingsSetOpen(true);
  const handleSettingClose = () => settingsSetOpen(false);
  
  // handel About modal
  const handleAboutOpen = () => AboutSetOpen(true);
  const handleAboutClose = () => AboutSetOpen(false);

  return (
    <div className="App">
      <Nav handleAboutOpen={handleAboutOpen}  handlesettingsOpen={handlesettingsOpen} handleOpen={handleOpen} open={open} setOpen={setOpen} setLoginopen={setLoginopen}/>
      <SideBar open={open} setOpen={setOpen}/>
      <Login handleClose={handleClose} loginopen={loginopen} setLoginopen={setLoginopen}/>
      <Settings handleSettingClose={handleSettingClose} settingsOpen={settingsOpen} />
      <About handleAboutClose={handleAboutClose} AboutOpen={AboutOpen} />
    </div>
  );
}

export default App;
