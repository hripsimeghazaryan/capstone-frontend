import { React } from 'react';
import { Button } from '@mui/material';
import './Buttons.css';

function Buttons({ handleClick, name }) {
    return (
            <div className="button">
                <Button 
                onClick={handleClick} 
                variant="contained" 
                color="primary">
                        {name}
                </Button>
            </div>
    )
}

export default Buttons;