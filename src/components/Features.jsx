import { Box, Grid } from "@mui/material";


const Features = () => {
  return (
    <Box bgcolor="hsl(218, 28%, 13%)">
        <Box sx={{
            justifyContent: "center",
            alignItems: "center",
            px: {
                xs: 1.5,
                md: 6,
            }
        }}>
            <Grid container >
                <Grid item xs={12} md={6}>box 1</Grid>
                <Grid item xs={12} md={6}>box 1</Grid>
                <Grid item xs={12} md={6}>box 1</Grid>
                <Grid item xs={12} md={6}>box 1</Grid>
            </Grid>
        </Box>
    </Box>
  )
}

export default Features;