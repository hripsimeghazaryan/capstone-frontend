import { React } from "react";
import {
    Modal,
    Box,
    Typography
} from '@mui/material';
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
    const { userData } = useContext(UserContext);
    //const showButton = (userData.account_id === 1 ? true : false);

    // const applyToJob = async () => {
    //     const body = {
    //         job_id: props.job_id,
    //         seeker_id: userData.account_id
    //     }
    //     const response = await requests.sendRequest("job-post-activity", {method: "POST, "})
    // }

    return (
        <Modal
        className="job-modal"
        open={props.open}
        onClose={props.handleClose}
        >
        <Box sx={style}>
            <Typography id="job-title" variant="h6" component="h2">
            Text in a modal
            </Typography>
            <Typography id="job-description" sx={{ mt: 2 }}>
            {/* job-post.description */}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Typography id="job-skills" sx={{ mt: 2 }}>
            {/* job-post.skills */}
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            {/* {showButton && <Buttons name={"Apply"} />} */}
        </Box>
        </Modal>
    )
}

export default CardModal;