import { useForm, Controller } from "react-hook-form";
import  { useNavigate } from 'react-router-dom';
import * as React from "react";
import {
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    Divider,
    Typography,
    FormLabel
} from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import moment from 'moment';

function Register(props) {
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm();
    const onSubmit = (data) => {
        console.log(control);
        alert(JSON.stringify(data));
        navigate("/education");
    }
    const [value, setValue] = React.useState(null);

    return (
        <div className="register-form">
            <Typography 
            variant="h4" 
            component="div" 
            style={{
                fontSize: 24, 
                padding: "10px",
                color: "rgba(0, 0, 0, 0.5)"
            }}>
                Personal information
            </Typography>

            <Divider />
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

                <FormLabel>Gender</FormLabel>
                <Controller
                rules={{ required: true }}
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
                    />
                </LocalizationProvider>

                <FormLabel>Active Worker</FormLabel>
                <Controller
                rules={{ required: true }}
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
        </div>
    );
} 

export default Register;
