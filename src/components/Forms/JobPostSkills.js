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

function JobSkills({step, handleNext}) {
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
            <Heading title={"Required Skills"} divider={true} />
            <Buttons name={[<AddIcon />, "AddSkill"]} handleClick={addSkill} />
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
                <div className="button">
                    <Button type="submit" variant="contained" color="primary">
                        Done
                    </Button>
                </div>
            </form>
        </Paper>
    )
}

export default JobSkills;