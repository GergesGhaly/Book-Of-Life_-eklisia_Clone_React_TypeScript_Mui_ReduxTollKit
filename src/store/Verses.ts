import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

    

export const FechVers= createAsyncThunk("vers/Fechvers", async (vers:string) => {


  const data = await fetch(`https://bible-api.com/${vers}?verse_numbers=true`)
  const res = await data.json();
  return res;

});
interface text {
  
  book_id: string,
  book_name: string,
  chapter: number,
  verse:number,
  text: string
  
}

interface Idata{
reference: string,
verses:text[], 
text: string,
translation_id:string,
translation_name: string,
translation_note: string,
  }
  

const initialState:Idata={
  reference: '',
  verses: [],
  text: '',
  translation_id: '',
  translation_name: '',
  translation_note: ''
}


  const VersSlice = createSlice({
    name: 'vers',
    initialState,
    reducers: {
      // fill in primary logic here
    },
    extraReducers: (builder) => {

        builder.addCase(FechVers.fulfilled, (state, action) => {
           
            return state = action.payload;
            
          });
          },
  })
  
  
  
// Action creators are generated for each case reducer function
export const {} = VersSlice.actions;

export default VersSlice.reducer;

