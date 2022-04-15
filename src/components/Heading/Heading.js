import { React } from 'react';
import { Typography, Divider, Box } from '@mui/material';
import './Heading.css';

function Heading({title, divider}) {
    return (
        <Box className="header">
            <Typography 
            variant="h4"
            component="div" 
            style={{
                fontSize: 24, 
                padding: "10px",
                color: "rgba(0, 0, 0, 0.5)"
            }}>
                {title}
            </Typography>
            {divider && <Divider className="header-divider" />}
        </Box>        
    )
}

export default Heading;