import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import Heading from '../components/Heading/Heading';
import Buttons from '../components/Buttons/Buttons';
import requests from '../utils/requests';
import { useNavigate } from 'react-router-dom';
import './UserTypePage.css';

function UserTypePage() {
    const navigate = useNavigate()
    // Admin send 1 
    // seeker send 0
    const handleAdmin = () => {
        // const response = requests.sendRequest("/user-type", {method: "POST", body: {"user_type": "admin"}})
        // if(response.code === "200") {
            navigate("/admin-register")
        //}
    };
    const handleUser = () => {
        // const response = requests.sendRequest("/user-type", {method: "POST", body: {"user_type": "user"}})
        // if(response.code === "200") {
        //     navigate("/user-register");
        // }
        navigate("/user-register");
    }

    return (
        <Box className="user-type-container">
            <Paper className="user-box">
                <Heading title={"Admin"} />
                <Box className="user-description">
                    A representative of a company, 
                    who is trying to seek employees
                </Box>
                <Buttons name={"Click me"} handleClick={() => handleAdmin()}/>
            </Paper>
            <Paper className="user-box">
                <Heading title={"Seeker"} />
                <Box className="user-description">
                    A person who is looking for a job qualifying to skills
                </Box>
                <Buttons name={"Click me"} handleClick={() => handleUser()}/>
            </Paper>
        </Box>
    )
}

export default UserTypePage;