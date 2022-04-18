import { 
    Typography,
    AppBar,
    Avatar
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar(props) {
    const { isLogged } = props;
    const navigate = useNavigate();

    const logged = true;

    const handleAccount = () => {
        navigate("/user-account");
        //navigate("/admin-account")
    }

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
            {logged && 
                <div style={{marginTop: "4px", marginRight: "4px"}} className="account-avatar">
                    <Avatar className="user-avatar" onClick={() => handleAccount()} src="">H</Avatar>
                </div>
            }            
        </AppBar>
    );
}

export default NavigationBar;