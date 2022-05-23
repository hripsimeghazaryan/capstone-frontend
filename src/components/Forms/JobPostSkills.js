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
import skills from "../../constants/skills.json";
import { UserFormContext } from '../../contexts/user-form-data';
import { useContext } from 'react';
import requests from '../../utils/requests';
import { useNavigate } from 'react-router-dom';

function JobSkills() {
    const [indexes, setIndexes] = React.useState([]);
    const [counter, setCounter] = React.useState(1);
    const { userFormData, setUserFormData } = useContext(UserFormContext);
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const bodyData = {
            skills: data,
            job_id: localStorage.getItem("job_id")
        }
        const response = await requests.sendRequest("job-post-skills-set", {method: "POST", body: bodyData});
        if(response.status === "OK") {
            navigate("/admin-page")
        }
    };

    const addSkill = () => {
        setIndexes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);   
    }

    return (
        <Paper className="register-form skills">
            <Heading title={"Required Skills"} divider={true} />
            <Buttons name={[<AddIcon />, "Add Skill"]} handleClick={addSkill} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    {indexes.map(index => {
                        return (
                            <Controller
                            key={index}
                            name={`${index}`}
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                select
                                className="form-component"
                                label="Skill"
                                variant="outlined"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                >
                                    {skills.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                )}
                            />
                        )
                    })}
                <Divider />
                <Buttons type={"submit"} name={"Done"} />
            </form>
        </Paper>
    )
}

export default JobSkills;