import { Box, Typography } from "@mui/material"

const CallToAction = () => {
    return (
        <Box sx={{
            position: "relative",
            bgcolor: "hsl(218, 28%, 13%)",
            justifyContent: "center",
            alignContent: "center",
        }}>
            <Box
            sx={{
                maxWidth: {
                    xs: "90%",
                    md: "60%",
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                position: "abolute",
                mx: 'auto',
                top: '-50%',
                gap: 3,
                background: 'hsl(198, 60%, 50%)',
                borderRadius: "5px",
            }}
            >
                <Typography>
                    Get early access today
                </Typography>
                <Typography>
                    It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
                    questions, our support team would be happy to help you.
                </Typography>
                <Box>
                    cotaines the  buttons/ forms
                </Box>
            </Box>
        </Box>
)}

export default CallToAction;