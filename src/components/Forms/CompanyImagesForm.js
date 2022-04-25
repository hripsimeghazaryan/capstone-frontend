import React from 'react';
import { useForm, Controller } from "react-hook-form";
import AddIcon from '@mui/icons-material/Add';
import { 
    Paper,
    Button,
    Divider
} from '@mui/material';
import Heading from "../Heading/Heading";
import './Forms.css';
import { useNavigate } from 'react-router-dom';

function CompanyImages({step, handleNext}) {
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        //const response = Requests.sendRequests("/user-account/register", {method: "POST", body: data});
        // if(responde.code == "200") {
        // handleNext(step);
        // }
        alert(data);
        navigate("/admin-page");

    };

    return (
        <Paper className="register-form skills">
            <Heading title={"Company Images"} divider={true} />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    rules={{required: "Image required"}}
                    control={control}
                    name="image"
                    render={({ field }) => (
                        <input
                        onChange={e => {
                            field.onChange(e.target.files);
                        }}
                        // className="form-component"
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                        multiple
                        />
                    )}
                    />
                <Divider />
                {/* {!disabled &&  */}
                    <div className="button">
                        <Button type="submit" variant="contained" color="primary">
                            Done
                        </Button>
                    </div> 
                {/*  } */}
            </form>
        </Paper>
    )
}

export default CompanyImages;