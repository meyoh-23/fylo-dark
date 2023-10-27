import { AppBar, Toolbar } from "@mui/material";
import logo from './../assets/images/logo.svg';

const Navbar = () => {
    return (
    <AppBar elevation={0} sx={{
        py: "1rem",
    }}>
        <Toolbar
        sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-center",
        }}
        >
            <a href="/">
                <img src={logo} alt="fylo dark" style={{
                    maxWidth: "100%",
                    height:" auto",
                }}/>
            </a>
            <ul style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "flex-start",
                gap: "1.25rem",
            }}>
                <li>
                    <a href="/#about" 
                    style={{
                        textDecoration: "none",
                        color: "hsl(0, 0%, 100%)",
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: "400" 
                        }}>
                        Features
                    </a>
                </li>
                <li>
                    <a href="/#about" 
                    style={{
                        textDecoration: "none",
                        color: "hsl(0, 0%, 100%)",
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: "400" 
                        }}>
                        Team
                    </a>
                </li>
                <li>
                    <a href="/#about" 
                    style={{
                        textDecoration: "none",
                        color: "hsl(0, 0%, 100%)",
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: "400",
                        whiteSpace: "nowrap",
                        }}>
                        Sign In
                    </a>
                </li>
            </ul>
        </Toolbar>
    </AppBar>
)}

export default Navbar;