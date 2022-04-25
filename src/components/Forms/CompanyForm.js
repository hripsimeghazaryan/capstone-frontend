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

function Company({step, handleNext, disabled}) {
    const { handleSubmit, control } = useForm();
    const onSubmit = async (data) => {
        //const response = Requests.sendRequests("/user-account/register", {method: "POST", body: data});
        // if(responde.code == "200") {
        // handleNext(step);
        // }
        alert(data);
        handleNext(step);
    }

    return (
        <Paper className="register-form">
            <Heading title={"Company Information"} divider={true} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-inputs">
                    <Controller
                    name="company-name"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                        className="form-component"
                        disabled={disabled}
                        label="Company Name"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        />
                    )}
                    rules={{ required: 'Company name required' }}
                    />
                    
                    <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                        className="form-component"
                        label="Description"
                        disabled={disabled}
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        />
                        )}
                    />

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Controller
                        name="establishment-date"
                        control={control}
                        defaultValue={null}
                        render={({
                            field: { onChange, value },
                            fieldState: { error, invalid }
                        }) => (
                            <DatePicker
                            label="Establishment Date"
                            disableFuture
                            disabled={disabled}
                            value={value}
                            className="form-component"
                            onChange={(value) =>
                                onChange(moment(value).format("YYYY-MM-DD"))
                            }
                            renderInput={(params) => (
                                <TextField
                                className="form-component"
                                    error={invalid}
                                    helperText={invalid ? error.message : null}
                                    id="establishment-date"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    color="primary"
                                    {...params}
                                />
                            )}
                            />
                        )}
                        />
                    </LocalizationProvider>

                    <Controller
                    name="url"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                        className="form-component"
                        label="Company URL"
                        disabled={disabled}
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
                {!disabled &&
                    <div className="button">
                        <Button type="submit" variant="contained" color="primary">
                            Done
                        </Button>
                    </div> 
                }
            </form>
        </Paper>
    )
}

export default Company;