import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Slider, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { FechData } from "./store/DataSlice";
import { changFontSize } from "./store/FontSizeSlice";
import { FechVers } from "./store/Verses";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  justifyContent: "center",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

interface props {
  handleSettingClose: () => void;
  settingsOpen: boolean;
}

const Settings: React.FC<props> = ({ settingsOpen, handleSettingClose }) => {
  const dispatch = useDispatch<any>();

  const [translation, setTranslation] = React.useState("kjv");
  const [open, setOpen] = React.useState(false);
  const [openDrop, setOpenDrop] = React.useState(false);
  const [FontSize, setFontSize] = React.useState<string>("16px");

  const handleChange = (event: SelectChangeEvent<typeof translation>) => {
    setTranslation(event.target.value);
    // dispatch(FechData({translat:translation}))
  };
  const handleChangeFont = (event: SelectChangeEvent<typeof FontSize>) => {
    setFontSize(event.target.value);
  };

  const HndelSettingig = () => {
    dispatch(changFontSize(FontSize));
    dispatch(FechData({ translat: translation }));

    handleSettingClose();
    //bad workaround for handel fake wating loader :)
    handelDrop();
    setTimeout(() => setOpenDrop(false), 700);
  };
  const handelDrop = () => {
    setOpenDrop(true);
  };
  return (
    <>
      <Container component="main" maxWidth="md" sx={{ maxWidth: "300px" }}>
        <CssBaseline />

        <Dialog
          disableEscapeKeyDown
          open={settingsOpen}
          onClose={handleSettingClose}
        >
          <DialogTitle>Settings</DialogTitle>
          <DialogContent>
            <Box
              component="form"
              sx={{ display: "flex", flexWrap: "wrap", maxWidth: "300px" }}
            >
              <FormControl sx={{ m: 1, width: "100%" }}>
                <Typography sx={{ m: "10px 0" }}>Bible Version</Typography>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  value={translation}
                  onChange={handleChange}
                >
                  <MenuItem value={"kjv"}>King James Version</MenuItem>
                  <MenuItem value={"bbe"}>Bible in Basic English</MenuItem>

                  <MenuItem value={"web"}>World English Bible</MenuItem>
                  <MenuItem value={"webbe"}>
                    World English Bible, British Edition
                  </MenuItem>
                  <MenuItem value={"oeb-us"}>
                    Open English Bible, US Edition
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <Typography sx={{ m: "10px 0" }}>Font Size</Typography>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  onChange={handleChangeFont}
                  value={FontSize}
                >
                  <MenuItem value={"14px"}>Small</MenuItem>
                  <MenuItem value={"16px"}>Medium</MenuItem>
                  <MenuItem value={"18px"}>Large</MenuItem>
                  <MenuItem value={"20px"}>X-Large</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button sx={{ color: "black" }} onClick={handleSettingClose}>
              Cancel
            </Button>
            <Button sx={{ color: "black" }} onClick={HndelSettingig}>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Container>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDrop}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default Settings;
