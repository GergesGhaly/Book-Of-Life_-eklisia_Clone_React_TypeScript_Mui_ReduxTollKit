import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import {Tab} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import NewTesment from "./NewTesment";
import OldTesment from "./OldTesment";
import Chapter from "./Chapter";
import Reading from "./Reading";
import Auth from "./Auth";
import { Routes, Route } from "react-router-dom" 
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from './store/store'



const drawerWidth = 220;

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

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface porps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}


const SideBar: React.FC<porps> = ({ open, setOpen }) => {
  const theme = useTheme();

  const [value, setValue] = React.useState("1");


const count = useSelector((state: RootState) => state.DataSlice)
const dispatch = useDispatch()




interface Ichapter{
"book_id": string,
"book_name": string,
"chapter": number,
"verse": number,
"text": string

}

const [chapter,setChapter]=React.useState<Ichapter[]>([])


const [chapterNum,setChapterNum]=React.useState(1)
const [chapterName,setChapterName]=React.useState('john')

//routing system 

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  return (
    <Box className='menu' sx={{ display: "flex" ,zIndex:1}}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader> </DrawerHeader>
       
          <Box sx={{width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box
                sx={{
                  width: "100%",
                  borderBottom: 1,
                  borderColor: "divider",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <TabList

                  variant="fullWidth"
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="NEW TESTEMNET " value="1" />
                  <Tab label="OLD TESTEMNET" value="2" />
                </TabList>
              </Box>

            
              <NewTesment />
              <OldTesment />
            </TabContext>
          </Box>

       
      </Drawer>

      <Main  className="main" open={open}>
      <Routes>
         <Route path='/' element={ <Chapter chapter={chapter} chapterNum={chapterNum} chapterName={chapterName}/>} />
         <Route path='/:gospel/:chaptere' element={ <Chapter chapter={chapter} chapterNum={chapterNum} chapterName={chapterName}/>} />
         <Route path='/auth' element={ <Auth/>} />
         <Route path='/reading' element={ <Reading/>} />
      </Routes>
      </Main>

    </Box>
  );
};

export default SideBar;
