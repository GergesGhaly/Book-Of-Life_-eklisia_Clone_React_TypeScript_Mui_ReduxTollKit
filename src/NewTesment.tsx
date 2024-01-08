import { TabPanel } from '@mui/lab'
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, List, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const NewTesment:React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
const handleChange =
  (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
const [chapter,SetChapter]=useState('')
    const [data,setData]=React.useState(
        [
          {
            id:1,
            name:"john",
            sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    
          },
          {
            id:2,
            name:"mathew",
            sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
    
          },
          {
            id:3,
            name:"luk",
            sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22,23,24]
    
          },
          {
            id:4,
            name:"mark",
            sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
          },
          {
            id:5,
            name:"acts",
            sfr:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
          },
          {
            id:6,
            name:"Romans",
            sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
          },
          {
            id:7,
            name:"1 Corinthians",
            sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
          },
          {
            id:8,
            name:"2 Corinthians",
            sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
          },
          {
            id:9,
            name:"Galatians",
            sfr:[1, 2, 3, 4, 5, 6]
          },
          {
            id:10,
            name:"Ephesians",
            sfr: [1, 2, 3, 4, 5, 6]
          },
          {
            id:11,
            name:"Philippians",
            sfr: [1, 2, 3, 4]
          },
          {
            id:12,
            name:"Colossians",
            sfr: [1, 2, 3, 4]
          },
           {
            id:13,
            name:"1 Thessalonians",
            sfr: [1, 2, 3, 4,5]
          }, 
          {
            id:14,
            name:"2 Thessalonians",
            sfr: [1, 2, 3]
          },
          {
            id:15,
            name:"1 Timothy",
            sfr: [1, 2, 3,4,5,6]
          },
          {
            id:16,
            name:"2 Timothy",
            sfr: [1, 2, 3,4]
          },
          {
            id:17,
            name:"Titus",
            sfr: [1, 2,3]
          },
          {
            id:18,
            name:"Philemon",
            sfr: [1]
          },

          {
            id:19,
            name:"Hebrews",
            sfr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
          },
          {
            id:20,
            name:"James",
            sfr: [1,2,3,4,5]
          },
          {
            id:22,
            name:"1 Peter",
            sfr: [1,2,3,4,5]
          },
          {
            id:23,
            name:"2 Peter",
            sfr: [1,2,3]
          },
          {
            id:24,
            name:"1 John",
            sfr: [1,2,3,4,5]
          },
          {
            id:25,
            name:"2 John",
            sfr: [1]
          },
          {
            id:26,
            name:"3 John",
            sfr: [1]
          },
          {
            id:27,
            name:"Jude",
            sfr: [1]
          },
          {
            id:28,
            name:"Revelation ",
            sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
          },

        ]
      )

      // console.log('chapter',chapter);
  return (
    <Box>
    <TabPanel value="1" sx={{padding:1.5}}>
    <List >
      {
     data.map((item)=>(
      
      <Accordion 
      onClick={()=>SetChapter(item.name)}
       key={item.id}>
      <AccordionSummary

        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{item.name}</Typography>
      

      </AccordionSummary>
      <AccordionDetails sx={{display:'flex', flexWrap:'wrap'}}>
        {
          item.sfr?.map((item)=>(
            <Box sx={{margin:'3px'}}>
              <Link to={`${chapter}/${item}`}>
              {/* onClick={()=>setChapterNum(item)} */}
              <Avatar  sx={{ width: 27, height: 27 ,bgcolor: '#494444',cursor:'pointer' }}>
              
                <Typography variant="body2" >{item}</Typography>

                </Avatar>
                </Link>
        
        </Box>
          ))
        }
      </AccordionDetails>
  </Accordion>
  
     ))
      }        
      </List>
    </TabPanel>
  
    </Box>
  
  )
}

export default NewTesment