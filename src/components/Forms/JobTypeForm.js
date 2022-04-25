import React from 'react';
import { useForm, Controller } from "react-hook-form";
import AddIcon from '@mui/icons-material/Add';
import { 
    Paper,
    Button,
    Divider,
    TextField, 
    MenuItem
} from '@mui/material';
import Heading from "../Heading/Heading";
import Buttons from '../Buttons/Buttons';
import './Forms.css';

const types = ["Full-Time", "Part-Time", "Internship"];

function JobType({step, handleNext, disabled}) {
    const { control, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        alert(data);
        handleNext(step);
    };

    return (
        <Paper className="register-form skills">
            <Heading title={"Job Type"} divider={true} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                    name="job_type"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                        className="form-component"
                        select
                        label="Job Type"
                        value={value}
                        onChange={onChange}
                      >
                        {types.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}
                    rules={{ required: 'Job type required' }}
                    />
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

export default JobType;