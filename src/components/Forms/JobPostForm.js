import { useForm, Controller } from "react-hook-form";
import * as React from "react";
import {
    Divider,
    Paper
} from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Heading from "../Heading/Heading";
import Buttons from "../Buttons/Buttons";
import InputText from "../InputText/InputText";
import InputDate from "../InputDate/InputDate";
import InputMultiline from '../InputMultiline/InputMultiline';
import { UserFormContext } from '../../contexts/user-form-data';
import { useContext } from 'react';
import requests from "../../utils/requests";

function JobPost({step, handleNext}) {
    const { handleSubmit, control } = useForm();
    const { userFormData, setUserFormData } = useContext(UserFormContext);

    const onSubmit = async (data) => {
        const bodyData = {
            ...data,
            companyId: localStorage.getItem("company_id"),
            locationId: userFormData.location_id,
            typeId: userFormData.type_id
        }

        const response = await requests.sendRequest("job-post/job", {method: "POST", body: bodyData});
        if(response.id) {
            localStorage.setItem("job_id", response.id);
            handleNext(step);
        }
    }
    
    return (
        <Paper className="register-form">
            <Heading title={"Job Post"} divider={true} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-inputs">
                    <Controller
                    name="job_name"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputText 
                        label={"Job Name"}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type={"text"}
                        />
                        )}
                    rules={{ required: 'Job name required' }}
                    />

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Controller
                        name="created_date"
                        control={control}
                        defaultValue={null}
                        render={({
                            field: { onChange, value },
                            fieldState: { error, invalid }
                        }) => (
                            <InputDate 
                            label={"Created At"}
                            value={value}
                            onChange={onChange}
                            invalid={invalid}
                            error={error}
                            />
                        )}
                        />
                    </LocalizationProvider>

                    <Controller
                    name="job_description"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputMultiline 
                        label={"Description"}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type={"text"}
                        rows={"3"}
                        />
                        )}
                    />

                </div>
                <Divider />
                <Buttons type={"submit"} name={"Done"} />
            </form>
        </Paper>
    );
} 

export default JobPost;
