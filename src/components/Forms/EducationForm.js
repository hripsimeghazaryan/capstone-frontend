import React from 'react';
import { useForm, Controller } from "react-hook-form";
import {
    Paper,
    Divider
} from "@mui/material";
import './Forms.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Heading from '../Heading/Heading';
import Buttons from '../Buttons/Buttons';
import InputText from "../InputText/InputText";
import InputDate from "../InputDate/InputDate";
import { UserFormContext } from '../../contexts/user-form-data';
import { UserContext } from '../../contexts/user-context';
import { useContext } from 'react';

function Education({step, handleNext, disabled, handleEnable}) {
    const { handleSubmit, control } = useForm();
    const { userFormData, setUserFormData } = useContext(UserFormContext);
    const { userData } = useContext(UserContext);

    const onSubmit = async (data) => {
        setUserFormData({
            ...userFormData,
            education: {
                url: "education-detail/education",
                data: {
                    ...data,
                    user_id: userData.account_id
                }
            }
        });
        (disabled !== undefined) ?  handleEnable() : handleNext(step)
    }

    return (
        <Paper className="register-form">
            <Heading title={"Education"} divider={true} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-inputs">
                    <Controller
                    name="certification_degree_name"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputText 
                        label={"Degree"}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type={"text"}
                        disabled={disabled} 
                        />
                        )}
                    rules={{ required: 'Education required' }}
                    />

                    <Controller
                    name="major"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputText 
                        label={"Major"}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type={"text"}
                        disabled={disabled} 
                        />
                        )}
                    />

                    <Controller
                    name="university_name"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputText 
                        label={"University"}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type={"text"}
                        disabled={disabled} 
                        />
                        )}
                    />

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Controller
                        name="starting_date"
                        control={control}
                        defaultValue={null}
                        render={({
                            field: { onChange, value },
                            fieldState: { error, invalid }
                        }) => (
                            <InputDate 
                            label={"Starting Date"}
                            value={value}
                            onChange={onChange}
                            invalid={invalid}
                            error={error}
                            disabled={disabled}
                            />
                        )}
                        />
                        <Controller
                        name="completion_date"
                        control={control}
                        defaultValue={null}
                        render={({
                            field: { onChange, value },
                            fieldState: { error, invalid }
                        }) => (
                            <InputDate 
                            label={"Ending Date"}
                            value={value}
                            onChange={onChange}
                            invalid={invalid}
                            error={error}
                            disabled={disabled}
                            />
                            )}
                        />
                    </LocalizationProvider>
                </div>
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

export default Education;