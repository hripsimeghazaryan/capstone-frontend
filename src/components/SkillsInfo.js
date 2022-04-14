import React from 'react';
import { useForm, Controller } from "react-hook-form";
import  { useNavigate } from 'react-router-dom';
import { 
    Button,
    Typography,
    Divider,
    TextField
 } from '@mui/material';


function SkillsInfo(props) {
    const [indexes, setIndexes] = React.useState([]);
    const [counter, setCounter] = React.useState(0);

    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    const addSkill = () => {
        console.log(indexes);
        setIndexes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);   
    }

    return (
        <div className="register-form">
            <Typography 
            variant="h4" 
            component="div" 
            style={{
                fontSize: 24, 
                padding: "10px",
                color: "rgba(0, 0, 0, 0.5)"
            }}>
                Set of Skills
            </Typography>

            <Divider />
            <div className="button">
                <Button type="button" variant="contained" color="primary" onClick={addSkill}>Add Skill</Button>
            </div>

            {/* <form className="form" onSubmit={handleSubmit(onSubmit)}> */}
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
                {/* <div className="button">
                    <Button type="submit" variant="contained" color="primary">
                        Next
                    </Button>
                </div> */}
            {/* </form> */}
        </div>
    )
}

export default SkillsInfo;