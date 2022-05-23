import React, { useContext, useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import Buttons from '../components/Buttons/Buttons';
import Heading from '../components/Heading/Heading';
import './LogInPage.css';
import requests from '../utils/requests';
import { UserContext } from '../contexts/user-context';
import { setToken, tokenDecoder, hasToken, getToken } from '../utils/tokens';

function LogInPage() {
    const [checked, setChecked] = useState(true);
    const [loginError, setLoginError] = useState(false);
    const { handleSubmit, control } = useForm();
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserContext);

    const handleChange = (event) => setChecked(event.target.checked);

    const onSubmit = async (data) => {
        const response = await requests.login(data);
        if(response.accessToken) {
            const { accessToken } = response;
            const decodedToken = tokenDecoder(accessToken);
            setLoginError(false)
            setToken(accessToken)
            requests.setAuthToken(accessToken)
            setUserData(decodedToken)
            if(decodedToken.role === 1) {
                navigate("/admin-page")
            }
            if(decodedToken.role === 2) {
                navigate("/seeker-page")
            }
        } 
        setLoginError(true);
    }

    return (
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
            marginTop={'10px'}
            >
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <Grid item xs={12}>
                    <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                        sx={{marginBottom: "16px"}}
                        label="Email"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        type="email"
                        error={loginError}
                        />
                        )}
                    rules={{ required: 'Email required' }}
                    />
                </Grid>
                <Grid item xs={12}>
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                        sx={{marginBottom: "16px"}}
                        label="Password"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        type="password"
                        error={loginError}
                        />
                        )}
                    rules={{ required: 'Password required' }}
                    />
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
                    <Buttons name={"Log In"} type={"submit"} />
                </Grid>
                </form>
            </Grid>
        </Paper>
    )
}

export default LogInPage;