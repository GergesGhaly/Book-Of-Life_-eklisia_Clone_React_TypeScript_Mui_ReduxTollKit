import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DrawerHeader from "./DrawerHeader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { FechVers } from "./store/Verses";

const Reading: React.FC = () => {
  const { FontSlice } = useSelector((state: RootState) => state);

  const [randomVers, setRandomVers] = useState([
    "Isaiah54:10",
    "Romans8:35",
    "1 John4:7",
    "john3:16",
    "john4:11",
    "john10:12",
  ]);

  var index = Math.floor(Math.random() * randomVers.length);

  const { VersSlice } = useSelector((state: RootState) => state);
  console.log("VersSlice", VersSlice);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    // random()
    dispatch(FechVers(randomVers[index]));
  }, [dispatch]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        textAlign: "start",
        flexDirection: "column",
      }}
    >
      <DrawerHeader />
      <Typography
        sx={{ paddingBottom: "20px", textAlign: "start" }}
        variant="h4"
      >
        {VersSlice.reference}
      </Typography>
      <Typography sx={{ fontSize: FontSlice }} variant="h5">
        {VersSlice.text}
      </Typography>
    </Box>
  );
};

export default Reading;
