
import Card from '@mui/material/Card';
import { Button, CardActionArea} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import './TechStackCard.js'
import { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




export default function TechStackCard({ image, title, details }) {

    const styles = {
        media: {
          height: 0,
          paddingTop: '56.25%', // 16:9,
          marginTop:'30'
        }
    };

    // Handle Dialog
    const [open, setOpen] = useState(false);
    

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    
    
    return (
        <div>
            <Card sx={{ minWidth: 275 }} >
                <CardActionArea onClick={handleClickOpen} >
                    <CardContent sx={{ padding: 4}} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <CardMedia
                            className={styles.media}
                            component="img"
                            height="180"
                            image={image}
                            alt={title}
                            sx= {{ paddingBottom: 2 }}
                        />
                        <Typography fontWeight='500'  variant="h5" component="div" align='center' sx={{ color: '#2E3B55' }}>
                            {title}
                        </Typography>
                    </CardContent>
                    
                </CardActionArea> 
            </Card>
            

            {/* Dialog Pop Up */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {title}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description" align='inherit'>
                    {details}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                {/* <Button onClick={handleClose} autoFocus>
                    Agree
                </Button> */}
                </DialogActions>
            </Dialog>
        </div>
    );
}