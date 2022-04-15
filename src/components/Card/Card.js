import { React, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import CardModal from '../Modal/Modal';

function CardComponent({key}) {
    const [open, setOpen] = useState(false);
    const handleModal = () => setOpen(!open);

    return(
        <Card 
        key={key}
        className="card-component"
        sx={{ maxWidth: 345,
        display: 'flex',
        flexDirection: 'row',
        background: "rgb(171, 71, 188, 0.1)",
        ':hover': {
            boxShadow: 20
          } }}
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
        </Card>
    );
}

export default CardComponent;