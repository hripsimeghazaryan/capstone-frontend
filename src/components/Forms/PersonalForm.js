import { useForm, Controller } from "react-hook-form";
import * as React from "react";
import {
    Divider,
    FormLabel,
    Paper
} from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import './Forms.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Heading from "../Heading/Heading";
import Buttons from "../Buttons/Buttons";
import InputText from "../InputText/InputText";
import InputRadioGroup from "../InputRadioGroup/InputRadioGroup";
import InputDate from "../InputDate/InputDate";
import { UserContext } from '../../contexts/user-context';
import { useContext } from 'react';
import requests from "../../utils/requests";
import is_active from "../../constants/is_active.json";
import gender from "../../constants/gender.json";

function Personal({step, handleNext, handleEnable, disabled}) {
    const { handleSubmit, control } = useForm();
    const { userData, setUserData } = useContext(UserContext);

    const phoneNumberHandler = (number) => `0${number.slice(3)}`;

    const onSubmit = async (data) => {
        const bodyData = {
            ...data,
            user_type: userData.user_type,
            contact_number: phoneNumberHandler(data.contact_number)
        }

        const response = await requests.sendRequest("user-account/register", {method: "POST", body: bodyData});

        if(response.account_id) {
            localStorage.setItem("user_id", response.account_id);
            setUserData({
                ...userData,
                personal_info: bodyData,
                account_id: response.account_id
            });
        }
        (disabled !== undefined) ?  handleEnable() : handleNext(step)
    }
    
    return (
        <Paper className="register-form">
            <Heading title={"Personal Information"} divider={true} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-inputs">
                    <Controller
                    name="first_name"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputText 
                        label={"First Name"}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type={"text"}
                        disabled={disabled} 
                        />
                    )}
                    rules={{ required: 'First name required' }}
                    />

                    <Controller
                    name="last_name"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputText 
                        label={"Last Name"}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type={"text"}
                        disabled={disabled}
                        />
                        )}
                    rules={{ required: 'Last name required' }}
                    />

                    <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputText 
                        label={"Email"}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type={"email"}
                        disabled={disabled}
                        />
                        )}
                    rules={{ required: 'Email required' }}
                    />

                    <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <InputText 
                        label={"Password"}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type={"password"}
                        disabled={disabled}
                        />
                        )}
                    rules={{ required: 'Password required' }}
                    />

                    <Controller
                    name="contact_number"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <MuiPhoneNumber
                        disabled={disabled}
                        className="form-component"
                        variant='outlined'
                        label="Phone Number"
                        name="phone"
                        value={value}
                        defaultCountry="am"
                        data-cy="user-phone"
                        onChange={(value) => onChange(+value+"")}
                        />
                    )}
                    rules={{ required: 'Phone number required' }}
                    />
                    
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Controller
                        name="date_of_birth"
                        control={control}
                        defaultValue={null}
                        render={({
                            field: { onChange, value },
                            fieldState: { error, invalid }
                        }) => (
                            <InputDate 
                            label={"Date of birth"}
                            value={value}
                            onChange={onChange}
                            invalid={invalid}
                            error={error}
                            disabled={disabled}
                            />
                        )}
                        rules={{ required: "Birth date required" }}
                        />
                    </LocalizationProvider>

                    <div className="form-radio">
                        <FormLabel>Gender</FormLabel>
                        <Controller
                        control={control}
                        name="gender"
                        render={({ field }) => {
                            return (
                                <InputRadioGroup field={field} radio={gender} disabled={disabled} />
                                );
                            }}
                        rules={{ required: "Gender required" }}
                        />
                    </div>
                    <div className="form-radio">
                        <FormLabel>Active Worker</FormLabel>
                        <Controller
                        rules={{ required: "Status required" }}
                        control={control}
                        name="is_active"
                        render={({ field }) => {
                            return (
                                <InputRadioGroup field={field} radio={is_active} disabled={disabled} />
                                );
                            }}
                        />
                    </div>
                </div>
                <Divider />
                {/* <Controller
                rules={{required: "Image required"}}
                control={control}
                name="user_image"
                render={({ field }) => (
                    <div>
                        <input
                        disabled={disabled}
                        onChange={e => {
                            field.onChange(e.target.files[0]);
                        }}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                        />
                    </div>
                )}
                />
                <Divider /> */}
                {!disabled ?
                    <Buttons name={"Done"} type={"submit"} />
                    :
                    <Buttons name={"Edit"} type={"button"} handleClick={handleEnable} />
                }
            </form>
        </Paper>
    );
} 

export default Personal;
