import { Box, CssBaseline, ThemeProvider, createTheme,  } from "@mui/material";

import Navbar from "./components/Navbar";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    }
  },
  palette: {
    primary: {
      main: "hsl(218, 28%, 13%)",
    },
    secondary: {
      main: "hsl(0, 0%, 100%)"
    },
    neutral: {
      main: "hsl(216, 53%, 9%)"
    },
  }
})

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Box bgcolor='primary.main'>
      <Navbar/>
    </Box>
    </ThemeProvider>
    </>
  );
}

export default App;
