import React, { useState, useContext } from 'react';
import {
    Avatar,
    Typography,
    Popover,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../contexts/user-context";
import { removeToken } from '../../utils/tokens';
import requests from '../../utils/requests';
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

    const logout = () => {
        localStorage.clear();
        requests.setAuthToken("");
        setUserData(null);
        removeToken();
        handleClose()
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