import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import {
    Paper,
    Divider
} from "@mui/material";
import './Forms.css';
import Buttons from '../Buttons/Buttons';
import Heading from '../Heading/Heading';
import InputText from "../InputText/InputText";
import requests from "../../utils/requests";
import { UserFormContext } from '../../contexts/user-form-data';
import { useContext } from 'react';

function JobLocation() {
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm();
    const { userFormData, setUserFormData } = useContext(UserFormContext);

    const onSubmit = async (data) => {
        const body = {
            ...userFormData,
            location: {
                url: "job-location",
                data: {
                    ...data,
                    job_id: localStorage.getItem("job_id")
                }
            }
        }
        console.log(body)
        for(const key in body) {
            const response = await requests.sendRequest(body[key].url, {method: "POST", body: body[key].data});
        }
        navigate("/admin-page");
        setUserFormData(null);
    }

    return (
        <Paper className="register-form">
            <Heading title={"Job Location"} divider={true} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-inputs">
                    <Controller
                    name="street_address"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputText 
                        label={"Street Address"}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type={"text"}
                        />
                        )}
                    rules={{ required: 'Street address required' }}
                    />

                    <Controller
                    name="city"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputText 
                        label={"City"}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type={"text"}
                        />
                        )}
                    />

                    <Controller
                    name="country"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputText 
                        label={"Country"}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type={"text"}
                        />
                        )}
                    />
                </div>
                <Divider />
                <Buttons type={"submit"} name={"Done"} />
            </form>
        </Paper>
    )
}

export default JobLocation;