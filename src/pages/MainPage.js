import { React } from "react";
import { Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Buttons from '../components/Buttons/Buttons';
import './MainPage.css';

function MainPage () {
    const navigate = useNavigate()

    const handleRegister = () => navigate("/register");

    const handleLogIn = () => navigate("/login");

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
                    <div className="main-title component-top-margin">
                        <Typography className="main-title" variant="h1" component="h2">
                                Welcome to MushRoom
                        </Typography>
                    </div>
                    <div className="main-description component-top-margin">
                        <Typography 
                        variant="h4"
                        component="h1"
                        style={{
                            textAlign: "center"
                        }}>
                            Here we can give you an opportunity to find
                            <br/>
                            a job corresponding to your skills. 
                        </Typography>
                    </div> 
                    <Box 
                    component="div"
                    className="button component-top-margin"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        minHeight: "80px",
                        marginTop: "25px"
                    }}
                    >
                        <Buttons name={"Register"} handleClick={() => handleRegister()}/>
                        <Buttons name={"Log In"} handleClick={() => handleLogIn()}/>

                    </Box>
                </Box>                
            </Box>
        </div>     
    )
}

export default MainPage;