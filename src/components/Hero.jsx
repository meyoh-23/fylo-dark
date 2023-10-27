import { Box, Typography } from "@mui/material";
import Navbar from "./Navbar";
import HeroDesktopBackground from './../assets/images/bg-curvy-desktop.svg';
import HeroMobileBackground from './../assets/images/bg-curvy-mobile.svg';
import intoIllustration from './../assets/images/illustration-intro.png';
import HeroButton from "../assets/HeroButton";


const Hero = () => {
    return (
    <Box variant="header">
        <Navbar/>
        <Box sx={{
            display: "flex",
            flexDirection: "column", 
            justifyContent: "center",
            alignItems: "center",
            mt: {
                xs: "3rem",
                md: "6rem",
            },
            pt: "3rem",
            backgroundImage: {
                xs: `url(${HeroMobileBackground})`,
                sm: `url(${HeroDesktopBackground})`
            }, 
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            height: {
                xs: "auto",
                md:'150vh'
            },
            width: "100vw",
            gap: 2,
        }}>
            <Box sx={{
                my: 1,
            }}>
                <img src={intoIllustration} alt=""  style={{maxWidth: "100%", height: "auto"}}/>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "450px",
                gap: 3,
            }}>
                <Typography variant="h4"
                sx={{
                    color: "secondary.main",
                    fontWeight: "700",
                    fontFamily: "'Raleway', sans-serif",
                    textAlign: "center",
                    justifyContent: "center",
                }}>
                    All your files in one secure location, accessible anywhere.
                </Typography>
                <Typography variant="p"
                sx={{
                    color: "secondary.dark",
                    fontFamily: "'Raleway', sans-serif",
                    textAlign: "center",
                    justifyContent: "center",
                    fontWeight: "400",
                    fontSize: "0.875rem",
                }}
                >
                    Fylo stores all your most important files in one secure location. Access them wherever 
                    you need, share and collaborate with friends family, and co-workers.
                </Typography>
            </Box>
            <Box>
                <HeroButton/>
            </Box>
        </Box>
    </Box>
)}

export default Hero;