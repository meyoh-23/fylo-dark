import { Box, Link, List, ListItem, Typography } from "@mui/material";
import logo from './../assets/images/logo.svg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
    return (
    <Box variant='footer' bgcolor='neutral.main'
    sx={{
        pt: 24,
        pb: 5,
        zIndex: "90",
        px: {
            xs: 2.25,
            md: 5,
        }
    }}
    >
        <Box
        sx={{
            mb: 3,
        }}
        >
            <img src={logo} alt="logo" style={{maxWidth: "100%", height: "auto"}}/>
        </Box>
        <Box
        sx={{
            display: "flex",
            flexDirection: {
                xs: "column",
                md: "row",
            },
            justifyContent: "space-around",
            alignItems: "flex-start",
            gap: 2.25,
        }}
        >
            <Box sx={{
            display: "flex",
            flexDirection: {
                xs: "column",
                md: "row",
            },
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 4,
        }}>
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                }}
                >
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 2
                    }}>
                        <Box color='secondary.main'>
                            <LocationOnIcon/>
                        </Box>
                        <Typography variant="p"
                        sx={{
                            color: "secondary.main",
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            maxWidth: "270px",
                        }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua
                        </Typography>
                    </Box>
                </Box>
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    color: "secondary.main"
                }}
                >
                    <span> <PhoneInTalkIcon/> +1-543-123-4567</span>
                    <span> <MailOutlineIcon/> example@fylo.com</span>
                </Box>
            </Box>
            <Box>
                <List>
                    <ListItem>
                        <Link 
                        underline="none"
                        href='#about-us'
                        sx={{
                            color: "secondary.main",
                            fontFamily: "",
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            textTransform: "capitalize",
                            whiteSpace: "nowrap",
                            "&:hover": {
                                fontWeight: "700",
                            }
                        }}
                        >About Us
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link 
                        underline="none"
                        href='#jobs'
                        sx={{
                            color: "secondary.main",
                            fontFamily: "",
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            textTransform: "capitalize",
                            whiteSpace: "nowrap",
                            "&:hover": {
                                fontWeight: "700",
                            }
                        }}
                        > Jobs
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link 
                        underline="none"
                        href='#press'
                        sx={{
                            color: "secondary.main",
                            fontFamily: "",
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            textTransform: "capitalize",
                            whiteSpace: "nowrap",
                            "&:hover": {
                                fontWeight: "700",
                            }
                        }}
                        >Press
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link 
                        underline="none"
                        href='#blog'
                        sx={{
                            color: "secondary.main",
                            fontFamily: "",
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            textTransform: "capitalize",
                            whiteSpace: "nowrap",
                            "&:hover": {
                                fontWeight: "700",
                            }
                        }}
                        >Blog
                        </Link>
                    </ListItem>
                </List>
            </Box>
            <Box>
                <List>
                    <ListItem>
                        <Link 
                        underline="none"
                        href='#Contact Us'
                        sx={{
                            color: "secondary.main",
                            fontFamily: "",
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            textTransform: "capitalize",
                            whiteSpace: "nowrap",
                            "&:hover": {
                                fontWeight: "700",
                            }
                        }}
                        >Contact Us
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link 
                        underline="none"
                        href='#Terms'
                        sx={{
                            color: "secondary.main",
                            fontFamily: "",
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            textTransform: "capitalize",
                            whiteSpace: "nowrap",
                            "&:hover": {
                                fontWeight: "700",
                            }
                        }}
                        >Terms
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link 
                        underline="none"
                        href='#Privacy'
                        sx={{
                            color: "secondary.main",
                            fontFamily: "",
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            textTransform: "capitalize",
                            whiteSpace: "nowrap",
                            "&:hover": {
                                fontWeight: "700",
                            }
                        }}
                        >Privacy
                        </Link>
                    </ListItem>
                </List>
            </Box>
            <Box sx={{
                display: "grid",
                placeContent: "center",
            }}>
                <Box 
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    mx: "auto",
                }}>
                    <Link href='#facebook-account' color='secondary.main'>
                        <FacebookOutlinedIcon/>
                        </Link>
                        <Link href='#x-app-account' color='secondary.main'>
                            <TwitterIcon/>
                        </Link>
                        <Link href='#instagram-account' color='secondary.main'>
                            <InstagramIcon/>
                    </Link>
                </Box>
            </Box>
        </Box>
    </Box>
    )
}

export default Footer;