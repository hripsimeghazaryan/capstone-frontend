import { useForm, Controller } from "react-hook-form";
import * as React from "react";
import {
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    Divider,
    FormLabel,
    Paper
} from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";

import './Forms.css';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import Heading from "./Heading/Heading";

import moment from 'moment';

function Register({step, handleNext}) {
    const { handleSubmit, control } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        handleNext(step);
    }
    
    return (
        <Paper className="register-form" style={{padding: "20px"}}>
            <Heading title={"Personal Information"} divider={true} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                    className="form-component"
                    label="First Name"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    />
                    )}
                rules={{ required: 'First name required' }}
                />

                <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                    className="form-component"
                    label="Last Name"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    />
                    )}
                rules={{ required: 'Last name required' }}
                />

                <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                    className="form-component"
                    label="Email"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    type="email"
                    />
                    )}
                rules={{ required: 'Email required' }}
                />

                <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                    className="form-component"
                    label="Password"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    type="password"
                    />
                    )}
                rules={{ required: 'Email required' }}
                />

                <FormLabel>Gender</FormLabel>
                <Controller
                control={control}
                name="gender"
                render={({ field }) => {
                    return (
                        <RadioGroup 
                        className="form-component radio-group"
                        {...field}>
                            <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                            />
                            <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                            />
                        </RadioGroup>
                        );
                    }}
                rules={{ required: "Gender required" }}
                />

                <Controller
                name="phone"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <MuiPhoneNumber
                    variant='outlined'
                    label="Phone Number"
                    name="phone"
                    value={value}
                    defaultCountry="am"
                    data-cy="user-phone"
                    onChange={onChange}
                    />
                )}
                rules={{ required: 'Phone number required' }}
                />
                
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Controller
                    name="dateOfBirth"
                    control={control}
                    defaultValue={null}
                    render={({
                        field: { onChange, value },
                        fieldState: { error, invalid }
                    }) => (
                        <DatePicker
                        label="Date of birth"
                        disableFuture
                        value={value}
                        onChange={(value) =>
                            onChange(moment(value).format("YYYY-MM-DD"))
                        }
                        renderInput={(params) => (
                            <TextField
                                error={invalid}
                                helperText={invalid ? error.message : null}
                                id="dateOfBirth"
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                color="primary"
                                autoComplete="bday"
                                {...params}
                            />
                            )
                        }
                        />
                    )}
                    rules={{ required: "Birth date required" }}
                    />
                </LocalizationProvider>

                <FormLabel>Active Worker</FormLabel>
                <Controller
                rules={{ required: "Status required" }}
                control={control}
                name="status"
                render={({ field }) => {
                    return (
                        <RadioGroup 
                        className="form-component radio-group"
                        {...field}>
                            <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="Yes"
                            />
                            <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="No"
                            />
                        </RadioGroup>
                        );
                    }}
                />
                <Divider />
                <div className="button">
                    <Button type="submit" variant="contained" color="primary">
                        Next
                    </Button>
                </div>
            </form>
        </Paper>
    );
} 

export default Register;
