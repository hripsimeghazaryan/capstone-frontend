import { React, useState } from 'react';
import Heading from '../components/Heading/Heading';
import StepperComponent from '../components/Stepper/Stepper';
import { Box } from '@mui/material';
import JobType from '../components/Forms/JobTypeForm';
import JobPost from '../components/Forms/JobPostForm';
import JobSkills from '../components/Forms/JobPostSkills';
import JobLocation from '../components/Forms/JobLocationForm';

const steps = [
        "Job Type",
        "Job Location",
        "Job Post",
        "Job Skills"
];

function getStepContent(step, handleNext) {
    switch (step) {
        case 0:
            return <JobType step={step} handleNext={handleNext} />;
        case 1:
            return <JobLocation step={step} handleNext={handleNext} />;
        case 2: 
            return <JobPost step={step} handleNext={handleNext} />;
        default: 
            return <JobSkills />;
    }
}

function AddJob() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    return (
        <Box sx={{width: "50%"}}>
            <Heading title={"Create Job Post"} divider={true}/>
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