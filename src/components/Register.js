import PersonalInfo from "./RegisterPage";
import EducationInfo from "./EducationInfo";
import SkillsInfo from "./SkillsInfo";

import * as React from "react";
import {
    Box,
    Button,
    Divider,
    Typography,
} from "@mui/material";

import { useForm } from "react-hook-form";
import  { useNavigate } from 'react-router-dom';

const steps = ['Personal information', 'Education', 'Skills'];

function getStepContent(step) {
    switch (step) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <EducationInfo />;
      case 2:
        return <SkillsInfo />;
      default:
        throw new Error('Unknown step');
    }
  }

function Register(props) {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm();
    const onSubmit = (data) => {
        console.log(control);
        alert(JSON.stringify(data));
        navigate("/home");
    }
    const [value, setValue] = React.useState(null);

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
                {steps[activeStep]}
            </Typography>

            <Divider />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                {activeStep === steps.length ?                   
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                >Submit</Button> :
                <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
                >Next</Button>}
                </Box>
            </form>
        </div>
    )
}

export default Register;