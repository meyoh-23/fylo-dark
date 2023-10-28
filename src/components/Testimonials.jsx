import { Avatar, Box, Typography } from "@mui/material";
import testimonials from './../assets/data';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import CallToAction from "./CallToAction";


const Testimonials = () => {
    return (
    <Box
    variant='section'
    sx={{
        display: "flex",
        flexDirection: {
            xs: "column",
            md: "row",
        },
        justifyContent: "space-evenly",
        gap: 3,
        alignItems: "center",
        bgcolor:"hsl(218, 28%, 13%)",
        px: {
            xs: 2,
            md: 9
        },
        pt: 2.5,
        position: "relative",
        zIndex: "90",
    }}
    >
        <Box 
        variant="span"
        sx={{
            position: "absolute",
            left: {
                xs: "15px",
                md: "70px",
            },
            top: "0",
            color: "hsl(176, 68%, 64%)"
        }}
        >
            <FormatQuoteRoundedIcon/>
        </Box>
        
        {
            testimonials.map((item) => {
                const {name, role, testimony, avatar, id} = item;
                return <Box key={id} 
                sx={{
                    display: "flex",
                    flexDirection: 'column',
                    gap: 2.5,
                    px: 2,
                    pt: 5,
                    pb: 2,
                    background: "hsl(219, 30%, 18%)",
                    borderRadius: "5px",
                    mb: 10,
                }}
                >
                    <Typography
                    sx={{
                        color: "secondary.main",
                        fontWeight: "400",
                        fontStyle: "'Raleway', sans-serif",
                        fontSize: "0.875rem",
                    }}
                    >{testimony}</Typography>
                    <Box
                    sx={{
                        display: "flex",
                        gap: 3,
                    }}
                    >
                        <Avatar src={avatar} alt={name}/>
                        <Box>
                            <Typography
                            sx={{
                                color: "secondary.main",
                                fontWeight: "700",
                                fontStyle: "'Raleway', sans-serif",
                                fontSize: "0.875rem",
                            }}
                            >
                                {name}
                            </Typography>
                            <Typography
                            sx={{
                                color: "secondary.main",
                                fontWeight: "400",
                                fontStyle: "'Open Sans', sans-serif",
                                fontSize: "0.875rem",
                            }}
                            >
                                {role}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            })
        }
        <CallToAction/>
    </Box>
)}

export default Testimonials;