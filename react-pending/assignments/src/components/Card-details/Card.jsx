import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({number}) {
  return (
    <div style={{padding:"60px",color:'white'}}>
          <Card sx={{ maxWidth: '100%',padding:8,backgroundColor:'#E53E3E',borderRadius:5,color:'white'}} >
               
               <Typography variant="body" color="white">
                    Card Number
               </Typography>
               <Typography variant="h5" color="white">
                    {number}
               </Typography>
               
               <Box sx={{ display: 'inline-flex' ,gap:10}}>


                    <div style={{padding:5}}>
                    <Typography variant="body" color="white">
                    Name of the person
                    </Typography>
                    <Typography variant="h5" color="white">
                         "Akhil"
                    </Typography>
                    </div>
                    <div style={{padding:5}}>
                    <Typography variant="body" color="white">
                    Validity
                    </Typography>
                    <Typography variant="h5" color="white">
                         03/45
                    </Typography>
                    </div>
                    <div style={{padding:5}}>
                    <Typography variant="body" color="white">
                    CVV
                    </Typography>
                    <Typography variant="h5" color="white">
                    994
                    </Typography>
                    </div>
               </Box>                    

               
          </Card>
    </div>   
  );
}