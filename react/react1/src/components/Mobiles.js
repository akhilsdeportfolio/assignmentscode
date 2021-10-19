import { Listitem } from "./Listitem";



function Mobiles(){
     return(
          <>
          <h1>Mobile Operating Systems</h1>          
          <ul>
               <Listitem item="Android"/>
               <Listitem item="Black Berry"/>
               <Listitem item="Symbian"/>
               <Listitem item="IOS"/>
          </ul>

          <h1>Mobile Manufacturers</h1>          
          <ul>
               <Listitem item="Samsung"/>
               <Listitem item="HTC"/>
               <Listitem item="Nokia"/>
               <Listitem item="Apple"/>
          </ul>
          </>
     )
}

export {Mobiles};