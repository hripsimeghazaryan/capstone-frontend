import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Heading from '../Heading/Heading';
import moment from 'moment';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import { Paper, TextField } from '@mui/material';

function JobActivity() {
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        navigate("/admin-page");
    }
    return (
        <Paper className="register-form">
            <Heading title={"Application Deadline"} divider={true} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Controller
                    name="apply_date"
                    control={control}
                    defaultValue={null}
                    render={({
                        field: { onChange, value },
                        fieldState: { error, invalid }
                    }) => (
                        <DatePicker
                        className="form-component"
                        label="Deadline"
                        disableFuture
                        value={value}
                        onChange={(value) =>
                            onChange(moment(value).format("YYYY-MM-DD"))
                        }
                        renderInput={(params) => (
                            <TextField
                                error={invalid}
                                className="form-component"
                                helperText={invalid ? error.message : null}
                                id="apply_date"
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
                    rules={{ required: "Due date required" }}
                    />
                </LocalizationProvider>
            </form>
        </Paper>
    )
}

export default JobActivity;