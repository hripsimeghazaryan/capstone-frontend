import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { 
    Paper,
    Button,
    Divider,
    TextField
} from '@mui/material';

import Heading from "./Heading/Heading";

function SkillsInfo({step, handleNext}) {
    const [indexes, setIndexes] = React.useState([]);
    const [counter, setCounter] = React.useState(1);

    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        handleNext(step);
    };

    const addSkill = () => {
        setIndexes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);   
    }

    return (
        <Paper className="register-form">
            <Heading title={"Skills"} divider={true} />
            <div className="button">
                <Button type="button" variant="contained" color="primary" onClick={addSkill}>Add Skill</Button>
            </div>

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
                        Next
                    </Button>
                </div>
            </form>
        </Paper>
    )
}

export default SkillsInfo;