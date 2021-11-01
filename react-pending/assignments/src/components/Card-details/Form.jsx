

import { Button, TextField } from "@mui/material";
import Box from '@mui/material/Box';

export default function()
{
     return(<>
          <Box sx={{ display: 'flex',flexDirection:'column',gap:5,padding:10}}>
               <TextField variant="filled" label="Cardholder name" placeholder="Cardholder name"/>
               <TextField variant="filled" label="Card Number" placeholder="Card Number"/>

               <Box sx={{ display: 'inline-flex' ,gap:10}}>
               <TextField variant="filled" label="Validity" placeholder="MM"/>
               <TextField variant="filled" label="Validity" placeholder="YY"/>
               <TextField variant="filled" label="CVV" placeholder="CVV"/>


               </Box>

               <Box sx={{ display: 'inline-flex' ,gap:10,textAlign:'center'}}>
                    <Button  variant="outline">Pay</Button>
               </Box>
          </Box>

     </>)
}