import { 
    Stepper, 
    Step, 
    StepLabel, 
    Box
} from '@mui/material';
import './Stepper.css';

function StepperComponent({
    steps, 
    activeStep, 
}) {
    return (
        <Box className="stepper-container">
            <Stepper activeStep={activeStep}>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>

    )
}

export default StepperComponent;