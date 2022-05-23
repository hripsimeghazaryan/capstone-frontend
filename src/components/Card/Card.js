import { React, useState } from 'react';
import {
    Card,
    CardContent,
    CardMedia, 
    Typography,
    ButtonBase,
    CardHeader
} from '@mui/material';
import './Card.css';

import CardModal from '../Modal/Modal';

function CardComponent({key, data}) {
    const [open, setOpen] = useState(false);
    const handleModal = () => setOpen(!open);
    return(
        <Card 
        key={key}
        className="card-component"
        sx={{ 
        maxWidth: 345,
        background: "#fafafa",
        ':hover': {
            boxShadow: 20
          } }}
        >
            <ButtonBase
            className="card-list"
            onClick={handleModal}
            >
                <CardHeader 
                title={data.job_name}
                subheader={data.company.company_name}
                />
                <CardMedia
                    className="card-image"
                    component="img"
                    alt="user image"
                    height="140"
                    image={process.env.PUBLIC_URL + `/logoPgoto/${data.company.company_name}.png`} 
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {data.job_description}
                    </Typography>
                </CardContent>
            </ButtonBase>
            <CardModal open={open} handleClose={handleModal} data={data} />
        </Card>
    );
}

export default CardComponent;