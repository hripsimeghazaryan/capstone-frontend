import { React } from "react";
import {
    Modal,
    Box,
    Typography,
} from '@mui/material';
import Heading from "../Heading/Heading";
import Buttons from "../Buttons/Buttons";
import { UserContext } from '../../contexts/user-context';
import { useContext } from 'react';
import requests from "../../utils/requests";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

function CardModal(props) {
    const { open, handleClose, data } = props;
    const { userData } = useContext(UserContext);
    const showButton = (userData.role === 2 ? true : false);

    const applyToJob = async () => {
        const body = {
            job_id: data.id,
            seeker_id: userData.id
        }
        const response = await requests.sendRequest("job-post-activity", {method: "POST", body: body});

        if(response.id) {
            handleClose();

        }
    }

    return (
        <Modal
        className="job-modal"
        open={open}
        onClose={handleClose}
        >
        <Box sx={style}>
            <Heading title={data.job_name} divider={true} />
            <Typography id="company-name" sx={{ mt: 2 }}>
                Comapny: {data.company.company_name}
            </Typography>
            <Typography id="job-type" sx={{ mt: 2 }}>
                Job Type: {data.type.job_type}
            </Typography>
            <Typography id="job-description" sx={{ mt: 2 }}>
                Job Description: {data.job_description}
            </Typography>
            <Typography id="job-skills" sx={{ mt: 2 }}>
                {/* Required Skills: {data.skills} */}
            </Typography>
            <Typography id="job-location" sx={{ mt: 2 }}>
                Address: {data.location.street_address + ", " + data.location.city}
            </Typography>
            {showButton && <Buttons name={"Apply"} handleClick={applyToJob} />}
        </Box>
        </Modal>
    )
}

export default CardModal;