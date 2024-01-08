import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface text {
  book_id: string;
  book_name: string;
  chapter: number;
  verse: number;
  text: string;
}

interface Idata {
  reference: string;
  verses: text[];
  text: string;
  translation_id: string;
  translation_name: string;
  translation_note: string;
}

export const FechData = createAsyncThunk(
  "Data/FechData",
  async ({
    name = "john",
    chapterNum = "1",
    translat = "kjv",
  }: {
    name?: string;
    chapterNum?: string;
    translat?: string;
  }) => {
    const data = await fetch(
      `https://bible-api.com/${name}+${chapterNum}?translation=${translat}`
    );
    const res = await data.json();
    return res;
  }
);

const initialState: Idata = {
  reference: "",
  verses: [],
  text: "",
  translation_id: "",
  translation_name: "",
  translation_note: "",
};

const DataSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder.addCase(FechData.fulfilled, (state, action) => {
      console.log("payload" + state);
      return (state = action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = DataSlice.actions;

export default DataSlice.reducer;
