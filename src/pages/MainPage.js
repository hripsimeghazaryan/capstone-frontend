import { React } from "react";
import { Box, Typography, Paper } from '@mui/material';
import { Link } from "react-router-dom";
import Buttons from "../components/Buttons/Buttons";
import Heading from "../components/Heading/Heading";
import './MainPage.css';

function MainPage () {
    return (
        <div 
        className="main" 
        sx={{
            maxWidth: "440px",
            height: "440px",
            padding: "20px",
            boxShadow: 5
        }}>
            <Box className="main-container">
                <Box className="main-content">
                    <div>
                        <Typography className="main-title" variant="h1" component="h2">
                                Welcome to MushRoom
                        </Typography>
                    </div>
                    <div>
                        <Typography 
                        variant="h4"
                        component="h1"
                        style={{
                            textAlign: "center"
                        }}>
                            Here we can give you an opportunity to find
                            a job to corresponding to your skills. 
                        </Typography>
                    </div> 
                    <Box 
                    component="div"
                    className="button"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        minHeight: "80px"
                    }}
                    >
                        <Paper>
                            <Typography 
                            component="subtitle1"
                            >
                                If you don't have an account please register.
                            </Typography> 
                            <Link to="/register" style={{ textDecoration: 'none' }}>
                                <Buttons name={"Register"} />
                            </Link>
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <Buttons name={"Log In"} />
                            </Link>
                        </Paper>
                    </Box>
                </Box>                
            </Box>
        </div>     
    )
}

export default MainPage;