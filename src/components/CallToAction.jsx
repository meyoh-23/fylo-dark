import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react";

const CallToAction = () => {
    const [value, setValue] = useState(' ')
    return (
        <Box 
        bgcolor='primary.main'
        sx={{
            width: {
                    xs: "90vw",
                    md: "60vw",
                },
            borderRadius: "10px",
            position: "absolute",
            justifyContent: "center",
            alignContent: "center",
            zIndex: 1000,
            left: "50%",
            top: "100%",
            transform: "translate(-50%, -50%)",
        }}>
            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2.5,
                maxWidth: "70%",
                mx: "auto",
                py: 2,
            }}
            >
                <Typography variant="h4"
                sx={{
                    color: "secondary.main",
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    fontStyle: "'Raleway', sans-serif",
                    textAlign: "center"
                }}
                >
                    Get early access today
                </Typography>
                <Typography variant="p"
                sx={{
                    textAlign: "center",
                    fontSize: "0.875rem",
                    fontWeight: "400",
                    fontFamily: "'Raleway', sans-serif",
                    color: "secondary.main",
                }}
                >
                    It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
                    questions, our support team would be happy to help you.
                </Typography>
                <Box
                sx={{
                    display: {
                        xs: "column",
                        md: "row",
                    },
                    justifyContent: "space-between",
                    gap: 3,
                    alignContent: "center",
                }}
                >
                    <TextField
                    type="email"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    error = {!value}
                    helperText= {!value ? 'please enter a valid email adress' : " "}
                    placeholder="example@fylo.com"
                    InputProps={{
                        sx:{
                            borderRadius: 8,
                            maxWidth: '450px',
                            bgcolor: "secondary.main",
                            height: 38,
                        }
                    }}
                    />
                        
                    
                    <Button variant="outlined"
                    sx={{
                        textTransform: "capitalize",
                        color: "secondary.main",
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: "400",
                        borderRadius: 8,
                        whiteSpace: "nowrap",
                        px: 2,
                        py: 1,
                        background: "hsl(176, 68%, 64%)",
                        border: "1px solid primary.main",
                        mx: "1rem",
                        cursor: "pointer"
                    }}
                    >
                        get started for free
                    </Button>
                </Box>
            </Box>
    </Box>
)}

export default CallToAction;