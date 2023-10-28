import { Box, CssBaseline, ThemeProvider, createTheme,  } from "@mui/material";
import Hero from "./components/Hero";
import Features from "./components/Features";
import StayProductive from "./components/StayProductive";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";


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
      main: "hsl(217, 28%, 15%)",
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
      <Hero/>
      <Box variant="main" position='relative'>
      <Features/>
      <StayProductive/>
      <Testimonials/>
      <CallToAction/>
      </Box>
    </Box>
    <Footer/>
    </ThemeProvider>
    </>
  );
}

export default App;
