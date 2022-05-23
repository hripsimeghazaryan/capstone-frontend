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
import InputMultiline from '../InputMultiline/InputMultiline';
import { UserContext } from '../../contexts/user-context';
import { useContext } from 'react';
import requests from "../../utils/requests";

function Company({step, handleNext, disabled, handleEnable}) {
    const { handleSubmit, control } = useForm();
    const { userData, setUserData } = useContext(UserContext);

    const onSubmit = async (data) => {
        const bodyData = {
            ...data,
            userId: userData.user_id
        }

        const response = await requests.sendRequest("company/company", {method: "POST", body: bodyData});
        console.log(response);
        if(response.id) {
            localStorage.setItem("company_id", response.id);
            setUserData({
                ...userData,
                company_id: response.id,
                company_name: response.company_name
            });
        }
        (disabled !== undefined) ?  handleEnable() : handleNext(step);
    }

    return (
        <Paper className="register-form">
            <Heading title={"Company Information"} divider={true} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-inputs">
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
                    rules={{ required: 'Company name required' }}
                    />
                    
                    <Controller
                    name="profile_description"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputMultiline 
                        label={"Description"}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type={"text"}
                        disabled={disabled} 
                        rows={"3"}
                        />
                        )}
                    />

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Controller
                        name="establishment_date"
                        control={control}
                        defaultValue={null}
                        render={({
                            field: { onChange, value },
                            fieldState: { error, invalid }
                        }) => (
                            <InputDate 
                            label={"Establishment Date"}
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
                    name="company_website_url"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputText 
                        label={"Company URL"}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type={"text"}
                        disabled={disabled} 
                        />
                        )}
                    />
                </div>

                <Divider />
                {!disabled &&
                    <Buttons type={"submit"} name={"Done"} />
                }
            </form>
        </Paper>
    )
}

export default Company;