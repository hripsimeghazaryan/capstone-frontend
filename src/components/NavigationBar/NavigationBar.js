import { 
    Typography,
    AppBar,
    Avatar
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './NavigationBar.css';
import AvatarComp from '../Avatar/Avatar'

function NavigationBar(props) {
    const navigate = useNavigate();

    const logged = true;

    const handleAccount = () => {
        //if useData => useData.user_type === "admin" => /admin-account
        //else go to /user-account
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
                <AvatarComp />
            }            
        </AppBar>
    );
}

export default NavigationBar;