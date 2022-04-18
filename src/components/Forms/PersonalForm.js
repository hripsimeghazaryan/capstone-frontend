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
    Paper, 
    Input
} from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import AddIcon from '@mui/icons-material/Add';
import './Forms.css';
import Buttons from "../Buttons/Buttons";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Heading from "../Heading/Heading";
import moment from 'moment';
// import axios from "axios";

function Personal({step, handleNext, disabled}) {
    const { handleSubmit, control } = useForm();
    const onSubmit = async (data) => {
        //await axios.post("regiter/personal", data);
        alert(JSON.stringify(data));
        handleNext(step);
    }
    
    return (
        <Paper className="register-form">
            <Heading title={"Personal Information"} divider={true} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-inputs">
                    <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                        disabled={disabled}
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
                        disabled={disabled}
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
                        disabled={disabled}
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
                        disabled={disabled}
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

                    <Controller
                    name="phone"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <MuiPhoneNumber
                        disabled={disabled}
                        className="form-component"
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
                            disabled={disabled}
                            className="form-component"
                            label="Date of birth"
                            disableFuture
                            value={value}
                            onChange={(value) =>
                                onChange(moment(value).format("YYYY-MM-DD"))
                            }
                            renderInput={(params) => (
                                <TextField
                                    disabled={disabled}
                                    error={invalid}
                                    className="form-component"
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

                    <div className="form-radio">
                        <FormLabel>Gender</FormLabel>
                        <Controller
                        control={control}
                        name="gender"
                        render={({ field }) => {
                            return (
                                <RadioGroup 
                                disabled={disabled}
                                className="form-component radio-group"
                                {...field}>
                                    <FormControlLabel
                                    disabled={disabled}
                                    value="male"
                                    control={<Radio />}
                                    label="Male"
                                    />
                                    <FormControlLabel
                                    disabled={disabled}
                                    value="female"
                                    control={<Radio />}
                                    label="Female"
                                    />
                                </RadioGroup>
                                );
                            }}
                        rules={{ required: "Gender required" }}
                        />
                    </div>
                    <div className="form-radio">
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
                                    disabled={disabled}
                                    value="yes"
                                    control={<Radio />}
                                    label="Yes"
                                    />
                                    <FormControlLabel
                                    disabled={disabled}
                                    value="no"
                                    control={<Radio />}
                                    label="No"
                                    />
                                </RadioGroup>
                                );
                            }}
                        />
                    </div>
                </div>
                <Divider />
                <Controller
                rules={{required: "Image required"}}
                control={control}
                name="image"
                render={({ field }) => (
                    <input
                    disabled={disabled}
                    onChange={e => {
                        field.onChange(e.target.files);
                    }}
                    // className="form-component"
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    />
                )}
                />
                <Divider />
                {!disabled &&
                    <div className="button">
                        <Button type="submit" variant="contained" color="primary">
                            Done
                        </Button>
                    </div>
                }
            </form>
        </Paper>
    );
} 

export default Personal;
