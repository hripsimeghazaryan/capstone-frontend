import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { 
    FormLabel,
    Paper,
    Divider
} from '@mui/material';
import Heading from "../Heading/Heading";
import Buttons from '../Buttons/Buttons';
import './Forms.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user-context';
import { useContext } from 'react';
import requests from "../../utils/requests";

function CompanyImages({disabled, handleEnable}) {
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm();
    const { userData } = useContext(UserContext);

    const onSubmit = async (data) => {
        const logoFormData = new FormData();
        const companyFormData = new FormData();

        companyFormData.append('company_id', userData.company_id);
        companyFormData.append('company_name', userData.company_name);       
        for (let i = 0; i < data.files.length; i++) {
            companyFormData.append("files", data.files[i])
        }
        const response_comp = await requests.uploadImage("company-image/upload", "POST", companyFormData);
        console.log(response_comp);
        
        logoFormData.append('company_id', userData.company_id);
        logoFormData.append('company_name', userData.company_name);
        logoFormData.append('file', data.file);
        const response_logo = await requests.uploadImage("company-image/uploadLogo", "POST", logoFormData);
        console.log(response_logo);

        (disabled !== undefined) ?  handleEnable() : navigate("/admin-page");

    };

    return (
        <Paper className="register-form skills">
            <Heading title={"Company Images"} divider={true} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <FormLabel>Logo</FormLabel>
                <Divider />
                <Controller
                rules={{required: "Logo required"}}
                control={control}
                name="file"
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
                <FormLabel>Company Images</FormLabel>
                <Divider />
                <Controller
                    rules={{required: "Image required"}}
                    control={control}
                    name="files"
                    render={({ field }) => (
                        <input
                        onChange={e => {
                            field.onChange([...e.target.files]);
                        }}
                        disabled={disabled} 
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                        multiple
                        />
                    )}
                    />
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

export default CompanyImages;