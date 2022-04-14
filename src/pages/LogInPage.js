import React from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
} from '@mui/material';
import { Link } from "react-router-dom";
import Buttons from '../components/Buttons';

 
function LogInPage() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    return(
        <div style={{ padding: 30 }}>
            <Paper>
                <Grid
                container
                spacing={3}
                direction={'column'}
                justify={'center'}
                alignItems={'center'}
                >
                    <Grid item xs={12}>
                        <TextField label="Username"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" type={'password'}></TextField>
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
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <Buttons name={"Log In"} />
                    </Link>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default LogInPage;