import { React } from "react";
import {
    Modal,
    Box,
    Typography
} from '@mui/material';

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
    return (
        <Modal
        className="card-modal"
        open={props.open}
        onClose={props.handleClose}
        >
        <Box sx={style}>
            <Typography id="modal-title" variant="h6" component="h2">
            Text in a modal
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
        </Box>
        </Modal>
    )
}

export default CardModal;