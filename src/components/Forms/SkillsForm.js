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
import requests from "../../utils/requests";

function Skills({step, handleNext, disabled}) {
    const [indexes, setIndexes] = React.useState([]);
    const [counter, setCounter] = React.useState(1);

    const skills = ["Adaptability", "Attention to detail", "Communication", "Customer service",
"Decision making", "Multitasking", "Problem solving", "Time management", "Data analysis", "Multilingualism",
"Project management", "Research skills", "Software proficiency", "Writing and editing"];

    const { control, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const response = await requests.sendRequest("seeker-skill-set", {method: "POST", body: data});
        if(response.user_accoumt_id) {
            handleNext(step);
        }
        handleNext(step);
    };

    const addSkill = () => {
        setIndexes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);   
    }

    return (
        <Paper className="register-form skills">
            <Heading title={"Skills"} divider={true} />
            {!disabled && <Buttons name={[<AddIcon />, "AddSkill"]} handleClick={addSkill} />}
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    {indexes.map(index => {
                        return (
                            <Controller
                            key={index}
                            name={`skill${index}`}
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                disabled={disabled}
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

export default Skills;