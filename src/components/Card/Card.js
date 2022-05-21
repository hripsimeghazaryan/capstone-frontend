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

    const companyPosition="dscknsjdcnsjckncd";
    const companyName="hdkbvfkjvbdfkbfdkjvvdfv";
    const companyDescription = "This is a company recommended for you, if you want to consider it please apply here";

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
                title={companyName}
                subheader="September 14, 2016"/>
                <CardMedia
                    className="card-image"
                    component="img"
                    alt="user image"
                    height="140"
                    image="../img.jpeg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {companyPosition}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {companyDescription}
                    </Typography>
                </CardContent>
            </ButtonBase>
            <CardModal open={open} handleClose={handleModal}/>
        </Card>
    );
}

export default CardComponent;