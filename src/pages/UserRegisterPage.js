import { React, useState } from 'react';
import Heading from '../components/Heading/Heading';
import StepperComponent from '../components/Stepper/Stepper';
import { Box } from '@mui/material';
import Personal from '../components/Forms/PersonalForm';
import Education from '../components/Forms/EducationForm';
import Skills from '../components/Forms/SkillsForm';
import Experience from '../components/Forms/ExperienceForm';

const steps = [
        "Personal Information",
        "Education",
        "Skills",
        "Experience",
];

function getStepContent(step, handleNext) {
    switch (step) {
      case 0:
        return <Personal step={step} handleNext={handleNext} />;
      case 1:
        return <Education step={step} handleNext={handleNext} />;
      case 2:
        return <Skills step={step} handleNext={handleNext}/>;
      default:
        return <Experience />;
    }
}

function RegisterPage() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

    return (
        <Box sx={{width: "50%"}}>
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