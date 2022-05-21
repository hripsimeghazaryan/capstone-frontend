import React from 'react';
import { Paper, Box } from '@mui/material';
import Heading from '../components/Heading/Heading';
import Buttons from '../components/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/user-context';
import { useContext } from 'react';
import './UserTypePage.css';

function UserTypePage() {
    const navigate = useNavigate()
    const { setUserData } = useContext(UserContext);

    const handleAdmin = async () => {
        setUserData({
            user_type: 1
        })
        navigate("/admin-register");
    }

    const handleUser = async () => {
        setUserData({
            user_type: 2
        })
        navigate("/seeker-register");
    }

    return (
        <Box className="user-type-container">
            <Paper className="user-box">
                <Heading title={"Admin"} divider={true} />
                <Box className="user-description">
                    A representative of a company, 
                    who is trying to seek employees
                </Box>
                <Buttons name={"Click me"} handleClick={() => handleAdmin()}/>
            </Paper>
            <Paper className="user-box">
                <Heading title={"Seeker"} divider={true} />
                <Box className="user-description">
                    A person who is looking for a 
                    job qualifying to skills
                </Box>
                <Buttons name={"Click me"} handleClick={() => handleUser()}/>
            </Paper>
        </Box>
    )
}

export default UserTypePage;