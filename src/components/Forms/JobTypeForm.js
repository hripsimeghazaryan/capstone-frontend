import React from 'react';
import { useForm, Controller } from "react-hook-form";
import AddIcon from '@mui/icons-material/Add';
import { 
    Paper,
    Divider,
    TextField, 
    MenuItem
} from '@mui/material';
import Heading from "../Heading/Heading";
import Buttons from '../Buttons/Buttons';
import './Forms.css';
import { UserFormContext } from '../../contexts/user-form-data';
import { useContext } from 'react';
import requests from "../../utils/requests";

const types = ["Full-Time", "Part-Time", "Internship"];

function JobType({step, handleNext}) {
    const { control, handleSubmit } = useForm();
    const { userFormData, setUserFormData } = useContext(UserFormContext);

    const onSubmit = async (data) => {
      const response = await requests.sendRequest("job-type", {method: "POST", body: data});
      if(response.job_type_id) {
        setUserFormData({
          ...userFormData,
          type_id: response.job_type_id
        });
        handleNext(step);
      }
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
                <Buttons type={"submit"} name={"Done"} />
            </form>
        </Paper>
    )
}

export default JobType;