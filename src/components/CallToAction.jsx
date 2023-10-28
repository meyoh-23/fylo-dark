import { Box, Typography } from "@mui/material"

const CallToAction = () => {
    return (
        <Box sx={{
            width: {
                    xs: "90vw",
                    md: "60vw",
                },
            background: 'hsl(198, 60%, 50%)',
            borderRadius: "10px",
            position: "absolute",
            justifyContent: "center",
            alignContent: "center",
            zIndex: 1000,
            left: "50%",
            top: "100%",
            transform: "translate(-50%, -50%)",
        }}>
            <Typography>
                It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
                questions, our support team would be happy to help you.
            </Typography>
    </Box>
)}

export default CallToAction;