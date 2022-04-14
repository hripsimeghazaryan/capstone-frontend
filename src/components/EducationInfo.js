import React from 'react';
import { useForm, Controller } from "react-hook-form";
import  { useNavigate } from 'react-router-dom';

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


import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import moment from 'moment';


function EducationInfo(props) {
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        navigate("/home");
    }

    return (
        <div className="register-form">
            {/* <Typography 
            variant="h4" 
            component="div" 
            style={{
                fontSize: 24, 
                padding: "10px",
                color: "rgba(0, 0, 0, 0.5)"
            }}>
                Education
            </Typography>

            <Divider />
            <form className="form" onSubmit={handleSubmit(onSubmit)}> */}
            <Controller
            name="education"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                className="form-component"
                label="Degree"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                />
                )}
            rules={{ required: 'Degree required' }}
            />

            <Controller
            name="major"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                className="form-component"
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
            name="university"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                className="form-component"
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
                    name="starting-date"
                    control={control}
                    defaultValue={null}
                    render={({
                        field: { onChange, value },
                        fieldState: { error, invalid }
                    }) => (
                        <DatePicker
                        label="Starting Date"
                        disableFuture
                        value={value}
                        onChange={(value) =>
                            onChange(moment(value).format("YYYY-MM-DD"))
                        }
                        renderInput={(params) => (
                            <TextField
                                error={invalid}
                                helperText={invalid ? error.message : null}
                                id="starting-date"
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                color="primary"
                                {...params}
                            />
                            )
                        }
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
                        disableFuture
                        value={value}
                        onChange={(value) =>
                            onChange(moment(value).format("YYYY-MM-DD"))
                        }
                        renderInput={(params) => (
                            <TextField
                                error={invalid}
                                helperText={invalid ? error.message : null}
                                id="ending-date"
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                color="primary"
                                {...params}
                            />
                            )
                        }
                        />
                    )}
                    />
                </LocalizationProvider>
                {/* <div className="button">
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </div> */}
            {/* </form> */}
        </div>
    )
}

export default EducationInfo;