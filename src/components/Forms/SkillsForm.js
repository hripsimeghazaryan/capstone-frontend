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
import { UserContext } from '../../contexts/user-context';
import { useContext } from 'react';

function Skills({step, handleNext, disabled, handleEnable}) {
    const [indexes, setIndexes] = React.useState([]);
    const [counter, setCounter] = React.useState(1);
    const { userFormData, setUserFormData } = useContext(UserFormContext);
    const { userData } = useContext(UserContext);
    const { control, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(userData);
        setUserFormData({
            ...userFormData,
            skill_set: {
                url: "seeker-skill-set",
                data: {
                    skills: data,
                    user_id: userData.user_id
                }
            }
        });
        (disabled !== undefined) ?  handleEnable() : handleNext(step)
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
                            key={`skill${index}`}
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
                {!disabled ?
                    <Buttons name={"Done"} type={"submit"} />
                    :
                    <Buttons name={"Edit"} type={"button"} handleClick={handleEnable} />
                }
            </form>
        </Paper>
    )
}

export default Skills;