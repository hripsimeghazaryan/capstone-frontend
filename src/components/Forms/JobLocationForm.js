import React from 'react';
import { useForm, Controller } from "react-hook-form";
import {
    TextField,
    Button,
    Paper,
    Divider
} from "@mui/material";
import './Forms.css';

import Heading from '../Heading/Heading';

import { useNavigate } from 'react-router-dom';

function JobLocation({step, handleNext}) {
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm();
    const onSubmit = async (data) => {
        alert(data);
        handleNext(step);
    }

    return (
        <Paper className="register-form">
            <Heading title={"Job Location"} divider={true} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-inputs">
                    <Controller
                    name="street_address"
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