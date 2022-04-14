import { React, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import CardModal from './Modal';

function CardComponent(props) {
    const [open, setOpen] = useState(false);
    const handleModal = () => setOpen(!open);

    return(
        <Card 
        className="card-component"
        sx={{ maxWidth: 345,
        display: 'flex',
        flexDirection: 'row' }}
        >
            <ButtonBase
            onClick={handleModal}
            >
                <CardMedia
                    component="img"
                    alt="user image"
                    height="140"
                    // image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    User
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Այստեղ պետք է գտնվի user-ի մասին ինֆորմացիա, սակայն դեռ չունենք դատաբազա
                    </Typography>
                </CardContent>
            </ButtonBase>
            <CardModal open={open} handleClose={handleModal}/>
            {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}

export default CardComponent;