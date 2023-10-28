import { Box, Grid, Link, Typography } from "@mui/material";
import productive from './../assets/images/illustration-stay-productive.png';
import arrow from './../assets/images/icon-arrow.svg';


const StayProductive = () => {
    return (
        <Box 
        variant='section' 
        bgcolor='hsl(218, 28%, 13%)'
        sx={{
            px: {
                xs: 2,
                md: 4,
            },
            py: {
                xs: 3,
                md: 5,
            }
        }}
        >
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img src={productive} alt="productive" style={{maxWidth: "100%", height: "auto"}}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box 
                    sx={{
                        pt: {
                            xs: 2,
                            md: 8,
                        },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        gap: 2,
                        my: 4,
                        pl: {
                            xs: 1,
                            md:4},
                        mx: {
                            xs: 1,
                            md:2.45,}
                    }}
                    >
                        <Typography variant="h4"
                        sx={{
                        maxWidth: {
                            xs: "auto",
                            md: "150px",
                        },
                        color: "secondary.main",
                        fontSize: "0.875rem",
                        fontWeight: "700",
                        fontFamily: "'Raleway', sans-serif",
                    }}
                        >
                            Stay productive, wherever you are
                        </Typography>
                        <Typography variant="p"
                        sx={{
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            fontFamily: "'Raleway', sans-serif",
                            color: "secondary.main",
                        }}
                        >
                            Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
                            storage needs.
                        </Typography>
                        <Typography variant="p"
                        sx={{
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            fontFamily: "'Raleway', sans-serif",
                            color: "secondary.main",
                        }}
                        >
                            Securely share files and folders with friends, family and colleagues for live collaboration. No email 
                            attachments required.
                        </Typography>
                        <Link 
                        href='#fylo'
                        underline="none"
                        sx={{
                            fontSize: "0.875rem",
                            fontWeight: "400",
                            fontFamily: "'Raleway', sans-serif",
                            color: "hsl(176, 68%, 64%)",
                            whiteSpace: "nowrap",
                            borderBottom: "1px hsl(176, 68%, 64%) solid",
                            maxWidth: "160px",
                            pb: '5px',
                        }}>
                            See how Fylo works  <span><img src={arrow} alt="arrow" style={{maxWidth: "100%", height: "auto"}}/></span>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
)}

export default StayProductive;