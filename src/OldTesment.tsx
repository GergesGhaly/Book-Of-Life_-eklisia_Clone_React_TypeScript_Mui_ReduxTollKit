
import { TabPanel } from '@mui/lab'
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, List, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

// interface Idata{
//     id:number;
//     name:string;
//     sfr:string[]
 

// }
// interface Props {
// data:Idata[]
// }





const OldTesment:React.FC= () => {

  const [data,setData]=useState(
    [
      {
        id:1,
        name:"Genesis",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
  
      },
      {
        id:2,
        name:"Exodus",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,29,30,31,32,33,34,35,36,37,38,39,40]
  
      },
      {
        id:3,
        name:"Leviticus",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
  
      },
      {
        id:4,
        name:"Numbers",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,29,30,31,32,33,34,35,36]
      },
      {
        id:5,
        name:"Deuteronomy",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,29,30,31,32,33,34]
      },
      {
        id:6,
        name:"Joshua",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
      },
      {
        id:7,
        name:"Judges",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
      },
      {
        id:8,
        name:"Ruth",
        sfr:[1, 2, 3, 4]
      },
      {
        id:9,
        name:"1 Samuel",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,29,30,31]
      },
      {
        id:10,
        name:"2 Samuel",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
      },
      {
        id:11,
        name:"1 Kings",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
      },
      {
        id:12,
        name:"2 Kings",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
      },
       {
        id:13,
        name:"1 Chronicles",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,29]
      }, 
      {
        id:14,
        name:"2 Chronicles",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,29,30,31,32,33,34,35,36]
      },
      {
        id:15,
        name:"Ezra",
        sfr:[1, 2, 3,4,5,6,7,8,9,10]
      },
      {
        id:16,
        name:"Nehemiah",
        sfr:[1, 2, 3,4,5,6,7,8,9,10,11,12,13]
      },
      {
        id:17,
        name:"Esther",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
      },
      {
        id:18,
        name:"Job",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,29,30,31,32,33,34,35,36,37,38,39,40,41,42]
      },
  
      {
        id:19,
        name:"Psalms",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,100,101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150,151]
      },
      {
        id:20,
        name:"Ecclesiastes",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      },
      {
        id:22,
        name:"Song of Songs",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8]
      },
      {
        id:23,
        name:"Isaiah",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66]
      },
      {
        id:24,
        name:"Jeremiah",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52]
      },
      {
        id:25,
        name:"Lamentations",
        sfr:[1, 2, 3, 4, 5]
      },
      {
        id:26,
        name:"Ezekiel",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]
      },
      {
        id:27,
        name:"Daniel",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
      },
      {
        id:28,
        name:"Hosea",
        sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
      },
      {
        id:29,
        name:"Joel",
        sfr:[1, 2, 3]
      },

    
    {
      id:30,
      name:"Amos",
      sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    {
      id:31,
      name:"Obadiah",
      sfr:[1]
    },
    {
      id:32,
      name:"Jonah",
      sfr:[1, 2, 3, 4]
    },
    {
      id:33,
      name:"Micah",
      sfr:[1, 2, 3, 4, 5, 6, 7]
    },
    {
      id:34,
      name:"Nahum",
      sfr:[1, 2, 3]
    },
    {
      id:35,
      name:"Habakkuk",
      sfr:[1, 2, 3]
    },
    {
      id:36,
      name:"Zephaniah",
      sfr:[1, 2, 3]
    },
    {
      id:37,
      name:"Haggai",
      sfr:[1, 2]
    },
    {
      id:38,
      name:"Zechariah",
      sfr:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    },
    {
      id:39,
      name:"Malachi",
      sfr:[1, 2, 3, 4]
    },


  ]
  )
  
  const [chapter,SetChapter]=useState('')

  return (
    <Box>
    <TabPanel value="2" sx={{padding:1.5}}>
    <List>
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
        <Typography >{item.name}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{display:'flex', flexWrap:'wrap'}}>
        {
          item.sfr?.map((item,id)=>(
            <Box key={id} sx={{margin:'3px'}}>
               <Link to={`${chapter}/${item}`}>
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

export default OldTesment