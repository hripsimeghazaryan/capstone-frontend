import { 
    Typography,
    AppBar,
    Avatar
} from '@mui/material';
import './NavigationBar.css';

function NavigationBar(props) {
    const { isLogged } = props;

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
            <Typography variant="h4" component="div" style={{fontSize: 24, padding: "10px"}}>
                MushRoom
            </Typography>
            {isLogged && 
                <Avatar>H</Avatar>
            }            
        </AppBar>
    );
}

export default NavigationBar;