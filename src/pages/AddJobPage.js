import { React, useState } from 'react';
import Heading from '../components/Heading/Heading';
import StepperComponent from '../components/Stepper/Stepper';
import { Box } from '@mui/material';
import JobType from '../components/Forms/JobTypeForm';
import JobPost from '../components/Forms/JobPostForm';
import JobSkills from '../components/Forms/JobPostSkills';
import JobLocation from '../components/Forms/JobLocationForm';

const steps = [
        "Job Post",
        "Job Type",
        "Job Skills",
        "Job Location"
];

function getStepContent(step, handleNext) {
    switch (step) {
        case 0:
            return <JobPost step={step} handleNext={handleNext} />;
        case 1:
            return <JobType step={step} handleNext={handleNext} />;
        case 2: 
            return <JobSkills step={step} handleNext={handleNext} />;
        default: 
            return <JobLocation />;
    }
}

function AddJob() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

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

export default AddJob;