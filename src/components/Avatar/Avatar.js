import React, { useState } from 'react';
import {
    Avatar,
    Typography,
    Popover,
    Divider
} from '@mui/material'

function AvatarComp(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                H
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
                <Typography sx={{ p: 1 }}>Account Information</Typography>
                <Divider />
                <Typography sx={{ p: 1 }}>Log Out</Typography>
            </Popover>
        </div>
    )
}

export default AvatarComp;