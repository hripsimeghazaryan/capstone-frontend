import React from 'react';
import { useForm, Controller } from "react-hook-form";
import AddIcon from '@mui/icons-material/Add';
import { 
    Paper,
    Button,
    Divider,
    TextField
} from '@mui/material';
import Heading from "../Heading/Heading";
import Buttons from '../Buttons/Buttons';
import './Forms.css';

function Skills({step, handleNext, disabled}) {
    const [indexes, setIndexes] = React.useState([]);
    const [counter, setCounter] = React.useState(1);

    const { control, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        alert(data);
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
                            name={`${index}`}
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                disabled={disabled}
                                className="form-component"
                                label="Skill"
                                variant="outlined"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                />
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