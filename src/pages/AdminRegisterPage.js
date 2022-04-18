import { React, useState } from 'react';
import Heading from '../components/Heading/Heading';
import StepperComponent from '../components/Stepper/Stepper';
import { Box } from '@mui/material';
import Personal from '../components/Forms/PersonalForm';
import Company from '../components/Forms/CompanyForm';
import CompanyImages from '../components/Forms/CompanyImagesForm';

const steps = [
        "Personal Information",
        "Company",
        "Company Images"
];

function getStepContent(step, handleNext) {
    switch (step) {
        case 0:
            return <Personal step={step} handleNext={handleNext} />;
        case 1:
            return <Company step={step} handleNext={handleNext} />;
        default:
            return <CompanyImages />
    }
}

function AdminRegisterPage() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

    // useEffect(() => {
    //     if(userType) {
    //         return <Redirect to={"/home"} />
    //     }
    // })

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

export default AdminRegisterPage;