import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import google from "./img/google.png";
import { Typography } from "@mui/material";
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
  maxWidth: 400,
  minWidth: 350,

  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

interface props {
  handleClose: () => void;
  loginopen: boolean;
  setLoginopen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<props> = ({ loginopen, setLoginopen, handleClose }) => {
  const [message, setMessage] = React.useState(false);
  const HandelMessage = () => {
    setMessage(true);
    
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={loginopen}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={loginopen}>
        <Box sx={style}>
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "130px", padding: "0 5px", mb: 5 }}>
                  <Typography variant="body1" color="initial" fontWeight={545}>
                    Book Of Life
                  </Typography>
                </Box>

                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    sx={{ mt: 1, display: "flex", justifyContent: "start" }}
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    onClick={HandelMessage}
                    fullWidth
                    sx={{
                      mt: 2,
                      mb: 2,
                      padding: 1.5,
                      bgcolor: "#795548",
                      color: "white",

                      ":hover": {
                        bgcolor: "#85594a", // theme.palette.primary.main
                        color: "white",
                      },
                    }}
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={HandelMessage}
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 1,
                      padding: 1.7,
                      bgcolor: "#1877F2",
                      ":hover": {
                        bgcolor: "#2e85f8", // theme.palette.primary.main
                        color: "white",
                      },
                    }}
                  >
                    <FacebookIcon sx={{ marginRight: "10px" }} /> Sign In with
                    Facebook
                  </Button>
                  <Button
                    onClick={HandelMessage}
                    fullWidth
                    sx={{
                      mt: 0,
                      mb: 2,
                      padding: 1.7,
                      bgcolor: "#e7e7e7",
                      border: "5px solid balck",
                      color: "black",

                      ":hover": {
                        bgcolor: "#f1eded", // theme.palette.primary.main
                        color: "black",
                      },
                    }}
                  >
                    <GoogleIcon
                      sx={{ marginRight: "25px", color: "#434343" }}
                    />{" "}
                    Sign In with Google
                  </Button>
                </Box>
                {message && <p style={{ color: "red" }}>under development</p>}
              </Box>
            </Container>
          </ThemeProvider>
        </Box>
      </Fade>
    </Modal>
  );
};

export default Login;
