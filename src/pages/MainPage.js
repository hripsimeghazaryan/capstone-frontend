import { React } from "react";
import { Paper, Box, Button } from '@mui/material';
import { Link } from "react-router-dom";
import Buttons from "../components/Buttons";
import Register from "../components/RegisterPage";

function MainPage () {
    return (
        <Paper>
            <div className="info">
                <span className="info-text">
                    <h2>
                    Here should be our logo and information about
                    the web site :)
                    </h2>
                </span>
            </div>
            <Box 
            component="div"
            className="button"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: "80px"
            }}
            >
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <Buttons name={"Register"} />
                </Link>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Buttons name={"Log In"} />
                </Link>
            </Box>
        </Paper>     
    )
}

export default MainPage;