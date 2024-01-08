import React, { useEffect } from 'react'
import { Box, Tooltip, Typography } from '@mui/material'
// import DrawerHeader from './DrawerHeader';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/store';
import {FechData} from './store/DataSlice'
import { start } from 'repl';
import DrawerHeader from './DrawerHeader';
import { useParams } from 'react-router-dom';


interface Ichapter{
  "book_id": string,
"book_name": string,
"chapter": number,
"verse": number,
"text": string

}


interface props{
  chapter:Ichapter[];
  chapterNum:number;
  chapterName:string;
}


const Chapter:React.FC<props>= () => {
  const {FontSlice}=useSelector((state: RootState)=>state)
  const {gospel}=useParams()||'jhon';
  const {chaptere}=useParams()||'1'


  const {DataSlice} = useSelector((state: RootState) =>state)
  const dispatch = useDispatch<any>()

  useEffect(()=>{
  
    dispatch(FechData({name:gospel,chapterNum:chaptere}))
    
  },[dispatch,gospel,chaptere])

  console.log('chapterr',DataSlice)

  return (
  <Box sx={{display:'flex',justifyContent:"start",flexDirection:"column",alignItems:'start',textAlign:'start'}}>
          <DrawerHeader />
              
                <Typography  variant='h4' sx={{marginBottom:'10px'}}>
                  {DataSlice?.reference}
              </Typography>
              
{
  DataSlice?.verses?.map(vers=>(
    <Box  sx={{display:'flex',alignItems:'center'}}>
      <Typography sx={{margin:'0 10px 0 0',fontSize:FontSlice}}>{vers.verse}</Typography>
    <Typography  variant='h6' sx={{margin:'5px 0',fontSize:FontSlice}}>
    {vers.text}
</Typography>
    </Box>

  ))
}
  </Box>
  )
}

export default Chapter