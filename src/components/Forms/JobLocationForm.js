import React from 'react';
import { useForm, Controller } from "react-hook-form";
import {
    TextField,
    Button,
    Paper,
    Divider
} from "@mui/material";
import './Forms.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Heading from '../Heading/Heading';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

function JobLocation({step, handleNext}) {
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm();
    const onSubmit = async (data) => {
        alert(data);
        navigate("/admin-page");
    }

    return (
        <Paper className="register-form">
            <Heading title={"Job Location"} divider={true} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-inputs">
                    <Controller
                    name="company-name"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                        className="form-component"
                        label="Street Address"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        />
                        )}
                    rules={{ required: 'Street address required' }}
                    />

                    <Controller
                    name="city"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                        className="form-component"
                        label="City"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        />
                        )}
                    />

                    <Controller
                    name="country"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                        className="form-component"
                        label="Country"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        />
                        )}
                    />
                </div>
                <Divider />
                <div className="button">
                    <Button type="submit" variant="contained" color="primary">
                        Done
                    </Button>
                </div> 
            </form>
        </Paper>
    )
}

export default JobLocation;