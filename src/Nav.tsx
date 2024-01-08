import React, { MouseEventHandler, useState } from 'react'

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Button, Menu, MenuItem, Tooltip } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { Link } from "react-router-dom"
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

  const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
interface porps{
  handleOpen:()=>void;
  handleAboutOpen:()=>void;
  handlesettingsOpen:()=>void;
  setLoginopen:React.Dispatch<React.SetStateAction<boolean>>;
    setOpen:React.Dispatch<React.SetStateAction<boolean>>;
    open:boolean;
}
const Nav:React.FC<porps> = ({handleAboutOpen,open,setOpen,setLoginopen,handleOpen,handlesettingsOpen}) => {

  const [loged,setLoged]=useState<boolean>(false);

    const handleDrawerOpen = () => {
        setOpen(!open);
      };

     const pages=[
      {name:'BIBLE',path:'/'} ,
      {name:'Random verse',path:'reading'},
       {name:'A message of hope',path:'auth'}
      ]

    const settings = ["Profile", "Account", "Dashboard", "Logout"];
    

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
    <AppBar className='header' sx={{bgcolor:'white',boxShadow:'none'} } >
    <Toolbar >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
       
      >
        <MenuIcon sx={{color:'black'}} />
      </IconButton>
      {/* //logo */}
      <Box sx={{width:'150px',padding:'0 5px'}}>
    <Typography variant="body1" color="initial" fontWeight={545}>
      Book Of Life
    </Typography>

      </Box>
     {/* menu */}
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page,id) => (
              <Link to={page.path}  key={id}>
                
                <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                 {page.name}
              </Button>
               </Link>
            ))}
          </Box>
{/* menu in mobile */}
<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, zIndex:888888}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MoreVertIcon  sx={{color:'black'}}/>
            </IconButton>
            <Menu
            
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none",zIndex:88888 },
              }}
            >
              {pages.map((page,id) => (
                   
                   <Link to={page.path} key={id}>
                <MenuItem  onClick={handleCloseNavMenu}>
              {page.name}
                  
                </MenuItem>
              </Link>
              ))}
            </Menu>
          </Box>

          <Box sx={{display:"flex",justifyContent:'space-around',gap:'10px',alignItems:'center'}}>
<Typography sx={{cursor:'pointer'}} onClick={handleOpen} variant="body1" color="initial">Login</Typography>
<Tooltip  title="setting" >
            <SettingsSuggestIcon fontSize='medium' onClick={handlesettingsOpen} sx={{color:'black',zIndex:999999999}}/>
            </Tooltip>

          <Tooltip  title="About" >
            <QuestionMarkIcon fontSize={'small'} onClick={handleAboutOpen} sx={{color:'black',zIndex:999999999}}/>
            </Tooltip>

            </Box>


    </Toolbar>
  </AppBar>

  )
}

export default Nav