
import styled from 'styled-components';


const Toolbar = styled.div`
background-color:blue;
padding:10px;
align-items: center;
justify-content:space-between;
display:flex;
flex-direction:row;
`;

const SiteName = styled.h1`
color:white;
`;

const Label = styled.p`
color:white;
content:{
     content:${props =>props.text}    
}
`;
const Div = styled.div`
display:flex;
flex-direction:row;
gap:10px
`;
export default function({url,size})
{
     return(
          <>

               <Toolbar> 
                    <SiteName>
                         Welcome
                    </SiteName>    

                    <Div>
                    <Label text="link1">Link 1</Label>
                    <Label text="link1">Link 2</Label>
                    </Div>
               </Toolbar>     

          </>
     )
}