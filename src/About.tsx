import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Slider, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

  // TODO remove, this demo shouldn't need to reset the theme.
  const defaultTheme = createTheme();
  

//   
  interface props{
    handleAboutClose:()=>void;
    AboutOpen:boolean ;
  }

const About:React.FC <props>= ({AboutOpen,handleAboutClose}) => {
   
  const {FontSlice}=useSelector((state: RootState)=>state)

  return (
      <Container >
        <CssBaseline />


          <Dialog disableEscapeKeyDown open={AboutOpen} onClose={handleAboutClose}>
        <DialogTitle>About</DialogTitle>
        <DialogContent >
          <Box >
<Typography variant="body1" color="initial" sx={{fontSize:FontSlice}}>
    Hi, My Name Is Gerges Ghaly, Someone who worked on this website and received his blessing.
    The UI is cloned from <a target='_blank' href="https://eklisia.wael.co.uk/home">eklisia.weal.co</a>,
    And Api From <a target='_blank' href="https://bible-api.com/">bible-api.com</a>,
    Techniques that I used : React Typescript Mui ReduxTollkit .
    The work would not have been completed without the help of Maryam Ghaly
</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button sx={{color:'black'}} onClick={handleAboutClose}>Ok</Button>
        </DialogActions>
      </Dialog>

       
      </Container>
  );
}
  


export default About