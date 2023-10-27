import { Box, Grid, Typography } from "@mui/material";
import accessAnywhere from './../assets/images/icon-access-anywhere.svg';
import securityTrust from './../assets/images/icon-security.svg';
import  collaboration from './../assets/images/icon-collaboration.svg';
import storeFile from './../assets/images/icon-any-file.svg';


const Features = () => {
    return (
    <Box 
    bgcolor="hsl(218, 28%, 13%)" 
    variant='section'
    mx='auto'
    >
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mx:'auto',
        }}>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}
                >
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        mx: 'auto',
                        px: {
                            xs: 2.25,
                            md: 3.5,
                        }
                    }}>
                        <Box
                        sx={{
                            py: 2.25,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2,
                            my: 2,
                            maxWidth: "350px",
                        }}
                        >
                            <Box>
                                <img src={accessAnywhere}alt="accessAnywhere" style={{maxWidth: "100%", height: "auto"}}/>
                            </Box>
                            <Typography 
                            variant='h4'
                            sx={{
                                textAlign: "center",
                                justifyContent: "center",
                                color: "secondary.main",
                                ontFamily: "'Raleway', sans-serif",
                            }}
                            >
                                Access your files, anywhere
                            </Typography>
                            <Typography 
                            variant='p'
                            sx={{
                                textAlign: "center",
                                justifyContent: "center",
                                color: "secondary.dark",
                                fontWeight: "400", 
                                fontSize: '0.875rem',
                                fontFamily: "'Raleway', sans-serif",
                            }}
                            >
                                The ability to use a smartphone, tablet, or computer to access your account means your 
                                files follow you everywhere.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        px: {
                            xs: 2.25,
                            md: 3.5,
                        }
                    }}>
                        <Box
                        sx={{
                            py: 2.25,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2,
                            my: 2,
                            maxWidth: "350px",
                        }}
                        >
                            <Box>
                                <img src={securityTrust}alt="securityTrust" style={{maxWidth: "100%", height: "auto"}}/>
                            </Box>
                            <Typography 
                            variant='h4'
                            sx={{
                                textAlign: "center",
                                justifyContent: "center",
                                color: "secondary.main",
                                ontFamily: "'Raleway', sans-serif",
                            }}
                            >
                                Security you can trust
                            </Typography>
                            <Typography 
                            variant='p'
                            sx={{
                                textAlign: "center",
                                justifyContent: "center",
                                color: "secondary.dark",
                                fontWeight: "400", 
                                fontSize: '0.875rem',
                                fontFamily: "'Raleway', sans-serif",
                            }}
                            >
                                2-factor authentication and user-controlled encryption are just a couple of the security 
                                features we allow to help secure your files.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        px: {
                            xs: 2.25,
                            md: 3.5,
                        }
                    }}>
                        <Box
                        sx={{
                            py: 2.25,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2,
                            my: 2,
                            maxWidth: "350px",
                        }}
                        >
                            <Box>
                                <img src={collaboration}alt="collaboration" style={{maxWidth: "100%", height: "auto"}}/>
                            </Box>
                            <Typography 
                            variant='h4'
                            sx={{
                                textAlign: "center",
                                justifyContent: "center",
                                color: "secondary.main",
                                ontFamily: "'Raleway', sans-serif",
                            }}
                            >
                                eal-time collaboration
                            </Typography>
                            <Typography 
                            variant='p'
                            sx={{
                                textAlign: "center",
                                justifyContent: "center",
                                color: "secondary.dark",
                                fontWeight: "400", 
                                fontSize: '0.875rem',
                                fontFamily: "'Raleway', sans-serif",
                            }}
                            >
                                Securely share files and folders with friends, family and colleagues for live collaboration. 
                                No email attachments required.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        px: {
                            xs: 2.25,
                            md: 3.5,
                        }
                    }}>
                        <Box
                        sx={{
                            py: 2.25,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2,
                            my: 2,
                            maxWidth: "350px",
                        }}
                        >
                            <Box>
                                <img src={storeFile}alt="storeFile" style={{maxWidth: "100%", height: "auto"}}/>
                            </Box>
                            <Typography 
                            variant='h4'
                            sx={{
                                textAlign: "center",
                                justifyContent: "center",
                                color: "secondary.main",
                                ontFamily: "'Raleway', sans-serif",
                            }}
                            >
                                Store any type of file
                            </Typography>
                            <Typography 
                            variant='p'
                            sx={{
                                textAlign: "center",
                                justifyContent: "center",
                                color: "secondary.dark",
                                fontWeight: "400", 
                                fontSize: '0.875rem',
                                fontFamily: "'Raleway', sans-serif",
                            }}
                            >
                                Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
                                file types to be securely stored and shared.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
)}

export default Features;