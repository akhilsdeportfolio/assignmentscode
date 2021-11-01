import Card from './Card';
import Form  from './Form';

export default function()
{
     return(<>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
               <Card number="1234 5678 23423 23423"/>
               <Form />
          </div>
          
     </>)
}