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
        py: 4.5,
        zIndex: "90",
    }}
    >
        <Box
        sx={{
            display: "flex",
            flexDirection: {
                xs: "column",
                md: "row",
            },
            justifyContent: "space-between",
            alignItems: "flex-start",
            mt:14,
            gap: 4.5,
            mx: {
                xs: 2,
                md: 4.5,
            },
        }}
        ><Box sx={{
            display: "flex",
            flexDirection: {
                xs: "column",
                md: "row",
            },
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 3.5,
        }}>
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 3,
                }}
                >
                    <Box><img src={logo} alt="logo" style={{maxWidth: "100%", height: "auto"}}/></Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 2.25,
                        alignItems: "flex-start",
                        mx: 2,
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
                    gap: 2,
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
                        sx={{
                            color: "secondary.main",
                            fontFamily: "",
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            textTransform: "capitalize",
                            whiteSpace: "nowrap"
                        }}
                        >About Us
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link 
                        underline="none"
                        sx={{
                            color: "secondary.main",
                            fontFamily: "",
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            textTransform: "capitalize",
                            whiteSpace: "nowrap"
                        }}
                        >About Us
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link 
                        underline="none"
                        sx={{
                            color: "secondary.main",
                            fontFamily: "",
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            textTransform: "capitalize",
                            whiteSpace: "nowrap"
                        }}
                        >About Us
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link 
                        underline="none"
                        sx={{
                            color: "secondary.main",
                            fontFamily: "",
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            textTransform: "capitalize",
                            whiteSpace: "nowrap"
                        }}
                        >About Us
                        </Link>
                    </ListItem>
                </List>
            </Box>
            <Box>
                <List>
                    <ListItem>
                        <Link 
                        underline="none"
                        sx={{
                            color: "secondary.main",
                            fontFamily: "",
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            textTransform: "capitalize",
                            whiteSpace: "nowrap"
                        }}
                        >About Us
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link 
                        underline="none"
                        sx={{
                            color: "secondary.main",
                            fontFamily: "",
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            textTransform: "capitalize",
                            whiteSpace: "nowrap"
                        }}
                        >About Us
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link 
                        underline="none"
                        sx={{
                            color: "secondary.main",
                            fontFamily: "",
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            textTransform: "capitalize",
                            whiteSpace: "nowrap"
                        }}
                        >About Us
                        </Link>
                    </ListItem>
                </List>
            </Box>
            <Box sx={{
                display: "flex",
            }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "secondary.main",
                    gap: 2,
                    maxWidth: '200px',
                    mx: "auto",
                }}>
                    <FacebookOutlinedIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                </Box>
            </Box>
        </Box>
    </Box>
    )
}

export default Footer;