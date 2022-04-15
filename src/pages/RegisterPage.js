import { React, useState } from 'react';
import Heading from '../components/Heading/Heading';
import StepperComponent from '../components/Stepper/Stepper';
import { Box } from '@mui/material';

import Register from '../components/RegisterPage';
import EducationInfo from '../components/EducationInfo';
import SkillsInfo from '../components/SkillsInfo';
import Experience from '../components/ExperienceInfo';

const steps = [
        "Personal Information",
        "Education",
        "Skills",
        "Experience",
];

function getStepContent(step, handleNext) {
    switch (step) {
      case 0:
        return <Register step={step} handleNext={handleNext} />;
      case 1:
        return <EducationInfo step={step} handleNext={handleNext} />;
      case 2:
        return <SkillsInfo step={step} handleNext={handleNext}/>;
      default:
        return <Experience />;
    }
}

function RegisterPage() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    return (
        <Box sx={{width: "80%"}}>
            <Heading title={"Registration forms"} divider={true}/>
            <StepperComponent 
            steps={steps} 
            activeStep={activeStep} 
            handleNext={handleNext} 
            getStepContent={getStepContent} />
            {getStepContent(activeStep, handleNext)}
        </Box>
    )

}

export default RegisterPage;