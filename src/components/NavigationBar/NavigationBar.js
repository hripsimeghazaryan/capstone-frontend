import { 
    Typography,
    AppBar,
} from '@mui/material';
import './NavigationBar.css';
import AvatarComp from '../Avatar/Avatar';
import { UserContext } from '../../contexts/user-context';
import { useContext } from 'react';

function NavigationBar() {
    const { userData } = useContext(UserContext);
    
    return(
        <AppBar 
        className="navbar"
        position="fixed" 
        style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#aa00ff", 
            zIndex: 100
        }}>
            <Typography 
            variant="h4" 
            component="div" 
            style={{fontSize: 24, padding: "10px"}}
            >
                MushRoom
            </Typography>
            {userData && 
                <AvatarComp />
            }            
        </AppBar>
    );
}

export default NavigationBar;