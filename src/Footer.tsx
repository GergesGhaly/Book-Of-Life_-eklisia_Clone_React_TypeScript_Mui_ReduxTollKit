import { Box } from '@mui/material'
import React from 'react'
import { styled, useTheme } from "@mui/material/styles";
import DrawerHeader from './DrawerHeader';

interface porps {
    open: boolean;
  }

  const drawerWidth =220;

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
    open?: boolean;
  }>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }));
  

const Footer:React.FC<porps> = ({open}) => {
  return (
    <Main  sx={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        textAlign: 'center',
        display: "flex",
      justifyContent: "center",
       height:'200px',
       backgroundColor: "black",
       color: "white",
      
       width:'100%',
       
    }}>
       
   
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
  Mollitia dolorem fugiat ullam, molestiae non ratione 
  quo sapiente perspiciatis nostrum! Ratione voluptate est at
   deserunt vitae mollitia, nemo eligendi perspiciatis a rem c
   onsequatur voluptatem soluta suscipit, inventore cupiditate i
   llo dolorum nam vel. Iure a necessitatibus cum soluta, obcaecati 
      luptatem obcaecati architecto minus?
     

    </Main>
  )
}

export default Footer