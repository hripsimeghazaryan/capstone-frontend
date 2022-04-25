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
import requests from "../../utils/requests";

function Education({step, handleNext, disabled}) {
    const { handleSubmit, control } = useForm();
    const onSubmit = async (data) => {
        const response = await requests.sendRequest("education-detail/education", {method: "POST", body: data});
        if(response.user_accoumt_id) {
            handleNext(step);
        }
    }

    return (
        <Paper className="register-form">
            <Heading title={"Education"} divider={true} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-inputs">
                    <Controller
                    name="certification_degree_name"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                        className="form-component"
                        disabled={disabled}
                        label="Degree"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        />
                        )}
                    rules={{ required: 'Education required' }}
                    />

                    <Controller
                    name="major"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                        className="form-component"
                        disabled={disabled}
                        label="Major"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        />
                        )}
                    />

                    <Controller
                    name="university_name"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                        className="form-component"
                        disabled={disabled}
                        label="University"
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
                        name="starting_date"
                        control={control}
                        defaultValue={null}
                        render={({
                            field: { onChange, value },
                            fieldState: { error, invalid }
                        }) => (
                            <DatePicker
                            label="Starting Date"
                            disabled={disabled}
                            disableFuture
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
                                id="starting-date"
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
                        <Controller
                        name="completion_date"
                        control={control}
                        defaultValue={null}
                        render={({
                            field: { onChange, value },
                            fieldState: { error, invalid }
                        }) => (
                            <DatePicker
                            label="Ending Date"
                            disabled={disabled}
                            disableFuture
                            className="form-component"
                            value={value}
                            onChange={(value) =>
                                onChange(moment(value).format("YYYY-MM-DD"))
                            }
                            renderInput={(params) => (
                                <TextField
                                className="form-component"
                                error={invalid}
                                helperText={invalid ? error.message : null}
                                id="ending-date"
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

export default Education;