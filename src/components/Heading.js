import { React } from 'react';
import { Typography } from '@mui/material';

function Heading({title}) {
    return (
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
    )
}

export default Heading;