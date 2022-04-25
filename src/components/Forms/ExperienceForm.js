import { useForm, Controller } from "react-hook-form";
import  { useNavigate } from 'react-router-dom';
import * as React from "react";
import {
    Paper,
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    Divider,
    FormLabel
} from "@mui/material";
import Heading from "../Heading/Heading";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import './Forms.css';
import requests from "../../utils/requests";

function Experience({disabled}) {
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm();
    const onSubmit = async (data) => {
        const response = await requests.sendRequest("experience-detail/experience", {method: "POST", body: data});
        if(response.user_accoumt_id) {
            navigate("/user-page");
        }
    }

    return (
        <Paper className="register-form">
            <Heading title={"Experience"} divider={true} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-inputs">
                    <FormLabel>Working Status</FormLabel>
                    <Controller
                    rules={{ required: true }}
                    control={control}
                    name="is_current_job"
                    render={({ field }) => {
                        return (
                            <RadioGroup 
                            className="form-component radio-group"
                            {...field}>
                                <FormControlLabel
                                disabled={disabled}
                                value="working"
                                control={<Radio />}
                                label="Working"
                                />
                                <FormControlLabel
                                disabled={disabled}
                                value="unemployed"
                                control={<Radio />}
                                label="Unemployed"
                                />
                            </RadioGroup>
                            );
                        }}
                    />

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Controller
                        name="start_date"
                        control={control}
                        defaultValue={null}
                        render={({
                            field: { onChange, value },
                            fieldState: { error, invalid }
                        }) => (
                            <DatePicker
                            className="form-component"
                            disabled={disabled}
                            label="Starting Date"
                            disableFuture
                            value={value}
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
                        name="end_date"
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

                    <Controller
                    name="job_title"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                        className="form-component"
                        disabled={disabled}
                        label="Job Title"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        type="text"
                        />
                        )}
                    />
                    <Controller
                    name="company_name"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                        className="form-component"
                        label="Company Name"
                        disabled={disabled}
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        type="text"
                        />
                        )}
                    />

                    <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                        className="form-component"
                        label="Job Description"
                        disabled={disabled}
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        type="text"
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
    );
} 

export default Experience;
