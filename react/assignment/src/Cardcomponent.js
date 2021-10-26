import './card.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Cardcomponent({url,price,displayprice,cal,p,f,c,temp,title,description,icons})
{
     return(
          <>
                    <Card sx={{ maxWidth: '500px',maxHeight:'400px' }}>
                         <CardActionArea>
                         <CardMedia
                              component="img"
                              height="140"
                              image={url}
                              alt="green iguana"
                         />
                         <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                              
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                              Lizards are a widespread group of squamate reptiles, with over 6,000
                              species, ranging across all continents except Antarctica
                              </Typography>
                         </CardContent>
                         </CardActionArea>
                    </Card>


          </>
     )
}

export {Cardcomponent};