
import './Logo.css'
import styled from 'styled-components';
const Logo= styled.img`
width:"80px";
height:80px; 
object-fit: cover;
@media only screen and (max-width: 600px) {
     display:none
}
`;

const Navbar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border:2px solid whitesmoke;
box-shadow: 12px 12px 2px 1px whitesmoke;
align-items:center;
`;

const Button = styled.button`
border:0px;
background-color:transparent;
padding:10px;
font-size:20px;
@media only screen and (max-width: 600px) {     
     font-size:15px;
}


`;
export default function()
{
     return(<>
          <Navbar>
               <Logo src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg"/>

               <div>
               <Button>Link1</Button>
               <Button>Link1</Button>
               </div>
          </Navbar>
     </>)
}