import { Button } from '@mui/material';

const HeroButton = () => {
    return (
    <Button
        variant='outlined'
        sx={{
            borderRadius: 8,
            background: 'hsl(176, 68%, 64%)',
            textTransform: "capitalize",
            fontFamily:"'Public Sans', sans-serif",
            fontSize: "0.875rem",
            fontWeight: "400",
            whiteSpace: "nowrap",
            color: "secondary.main",
            px: "3rem",
            py: "0.75rem"
        }}
        >
            Get Started
    </Button>
)}

export default HeroButton;