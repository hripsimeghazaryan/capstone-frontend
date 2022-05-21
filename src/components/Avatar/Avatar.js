import React, { useState, useContext } from 'react';
import {
    Avatar,
    Typography,
    Popover,
    Divider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../contexts/user-context";
import './Avatar.css';

function AvatarComp({ avatar }) {
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserContext);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    // const handleJobPage = () => {
    //     handleClose()
    //     if(userData.user_type === 1) {
    //         navigate("/admin-page")
    //     } else if (userData.user_type === 2) {
    //         navigate("/seeker-page")
    //     }
    // }

    // const handleAccountPage = () => {
    //     handleClose()
    //     if(userData.user_type === 1) {
    //         navigate("/admin-account")
    //     } else if (userData.user_type === 2) {
    //         navigate("/seeker-account")
    //     }
    // }

    const logout = () => {
        localStorage.clear();
        setUserData(null);
        navigate("/");
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div style={{marginTop: "4px", marginRight: "4px"}} className="account-avatar">
            <Avatar 
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            className="user-avatar" 
            onClick={handleOpen} 
            src="">
                X
            </Avatar>
            <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            >
                {/* <Typography 
                onClick={handleJobPage}
                className="popover-button" 
                sx={{ p: 1 }}
                >
                    Job List
                </Typography>

                <Divider />

                <Typography 
                onClick={handleAccountPage}
                className="popover-button" 
                sx={{ p: 1 }}
                >
                    Account Information
                </Typography>

                <Divider /> */}
                
                <Typography 
                className="popover-button" 
                sx={{ p: 1 }}
                onClick={logout}
                >
                    Log Out
                </Typography>
            </Popover>
        </div>
    )
}

export default AvatarComp;