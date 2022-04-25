import React, { useContext, useEffect, useState } from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper
} from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import Buttons from '../components/Buttons/Buttons';
import Heading from '../components/Heading/Heading';
import './LogInPage.css';
import requests from '../utils/requests';
import { UserContext } from '../contexts/user-context'
import { id } from 'date-fns/locale';

 
function LogInPage() {
    const [checked, setChecked] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { userData, setUserData } = useContext()

    const handleEmailChange = (event) => setEmail(event.target.value);
    
    const handlePassChange = (event) => setPassword(event.target.value);

    const handleChange = (event) => setChecked(event.target.checked);

    const handleLogIn = async () => {
        const response = await requests.sendRequest("login", {method: "POST", body: {email, password}})
        if(response.status === "200") {
            setUserData(response.data);
            if(userData.user_type_id === "admin") navigate("/user-account");

            navigate("/admin-account");
        }
    }

    return(
        <Paper 
        className="login-form"
        sx={{ 
            minWidth: "256px",
            padding: "30px",
            boxShadow: 5
        }}>
            <Heading title={"Log In"} divider={true}/>
            <Grid
            container
            spacing={3}
            direction={'column'}
            justify={'center'}
            alignItems={'center'}
            >
                <Grid item xs={12}>
                    <TextField 
                    type="email"
                    label="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    ></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    label="Password" 
                    type={'password'}
                    value={password}
                    onChange={handlePassChange}
                    required
                    ></TextField>
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                    control={
                        <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        label={'Keep me logged in'}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    }
                    label="Keep me logged in"
                    />
                </Grid>
                <Grid item xs={12} className="button">
                <Link to="/user-page" style={{ textDecoration: 'none' }}>
                    <Buttons name={"Log In"} />
                </Link>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default LogInPage;