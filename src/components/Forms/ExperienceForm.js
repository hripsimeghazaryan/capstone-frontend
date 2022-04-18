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

function Experience({disabled}) {
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm();
    const onSubmit = async (data) => {
        alert(data);
        navigate("/home");
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
                    name="working-status"
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

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Controller
                        name="starting-date"
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
                        name="ending-date"
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
                    name="job-title"
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
                    name="job-description"
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
