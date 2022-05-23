import { useForm, Controller } from "react-hook-form";
import  { useNavigate } from 'react-router-dom';
import * as React from "react";
import {
    Paper,
    Divider,
} from "@mui/material";
import Heading from "../Heading/Heading";
import Buttons from '../Buttons/Buttons';
import InputText from "../InputText/InputText";
import InputDate from "../InputDate/InputDate";
import InputMultiline from '../InputMultiline/InputMultiline';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { tokenDecoder, getToken, setToken } from "../../utils/tokens";
import './Forms.css';
import { UserFormContext } from '../../contexts/user-form-data';
import { UserContext } from '../../contexts/user-context';
import { useContext } from 'react';
import requests from "../../utils/requests";


function Experience({disabled, handleEnable}) {
    const navigate = useNavigate();
    const { userFormData, setUserFormData } = useContext(UserFormContext);
    const { userData, setUserData } = useContext(UserContext);
    const { handleSubmit, control } = useForm();

    const handleRegister = async (data) => {
        const body = {
            ...userFormData,
            experience: {
                url: "experience-detail/experience",
                data: {
                    ...data,
                    user_id: userData.account_id
                }
            }
        }
        for(const key in body) {
            const response = await requests.sendRequest(body[key].url, {method: "POST", body: body[key].data});
        }
        const logData = {
            email: userData.personal_info.email,
            password: userData.personal_info.password
        }
        const login = await requests.login(logData).then(res => {
            if(res.accessToken) {
                const { accessToken } = res;
                const decodedToken = tokenDecoder(accessToken);
                setToken(accessToken)
                requests.setAuthToken(accessToken)
                setUserData(decodedToken)
                localStorage.setItem("user_id", decodedToken.id);
                setUserData({
                    ...userData,
                    id: decodedToken.id,
                    role: decodedToken.role
                })
            }
        });
        navigate("/seeker-page");
        setUserFormData(null);
    }

    const onSubmit = async (data) => {
        (disabled !== undefined) ?  handleEnable() : handleRegister(data);
    }

    return (
        <Paper className="register-form">
            <Heading title={"Experience"} divider={true} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-inputs">
                    <Controller
                    control={control}
                    name="is_current_job"
                    rules={{required: true}}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputText 
                        label={"Working Status"}
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
                        name="start_date"
                        control={control}
                        defaultValue={null}
                        rules={{required: true}}
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
                        name="end_date"
                        control={control}
                        defaultValue={null}
                        rules={{required: true}}
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

                    <Controller
                    name="job_title"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputText 
                        label={"Job Title"}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type={"text"}
                        disabled={disabled} 
                        />
                        )}
                    rules={{required: true}}
                    />
                    <Controller
                    name="company_name"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputText 
                        label={"Company Name"}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type={"text"}
                        disabled={disabled} 
                        />
                        )}
                    rules={{required: true}}
                    />

                    <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputMultiline 
                        label={"Job Description"}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type={"text"}
                        disabled={disabled} 
                        rows={"3"}
                        />
                        )}
                    rules={{required: true}}
                    />
                </div>
                <Divider />
                {!disabled ?
                    <Buttons name={"Done"} type={"submit"} />
                    :
                    <Buttons name={"Edit"} type={"button"} handleClick={handleEnable} />
                }
            </form>
        </Paper>
    );
} 

export default Experience;
