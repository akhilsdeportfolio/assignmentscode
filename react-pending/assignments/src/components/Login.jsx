import { useEffect, useState } from 'react';
import './Login.css';
import config from './config';
import bcrypt from 'bcryptjs';
import crypto from 'crypto-js';




function getHash(str)
{
     
     return crypto.SHA256(str).toString(crypto.enc.Hex);
}


export default function()
{

     const [number,setNumber]=useState("");
     const [isNumberError,setError]=useState(false);
     const [errorMessage,setErrorMessage]=useState("");
     const [loading,setLoading]=useState(false);
     let txd="4c0467d2-d8e1-4dca-928b-ba43da14c31c";
     let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiI3NGJjZTk0Yi0yMjAzLTQzOWItOTk2Yi04NGU5Y2ZmMTVjZWYiLCJ1c2VyX3R5cGUiOiJCRU5FRklDSUFSWSIsInVzZXJfaWQiOiI3NGJjZTk0Yi0yMjAzLTQzOWItOTk2Yi04NGU5Y2ZmMTVjZWYiLCJtb2JpbGVfbnVtYmVyIjo4NzkwODU2MDQwLCJiZW5lZmljaWFyeV9yZWZlcmVuY2VfaWQiOjE4ODg2OTAwMzc4NTEwLCJ0eG5JZCI6IjRjMDQ2N2QyLWQ4ZTEtNGRjYS05MjhiLWJhNDNkYTE0YzMxYyIsImlhdCI6MTYzNTc1Nzc2MiwiZXhwIjoxNjM1NzU4NjYyfQ.cGGupKboLpT5kgCnPgJggUoQ5G5zV9YMuNxg0mFxtik";

     useEffect(()=>{
          verifyOtp("954230");
     },[]);

     const handleOnChange=(e)=>{
          let {value} = e.target;
          console.log(isNaN(value));
          

          if(e.target.value.length==10)
          {
               if(isNaN(value))
               {
               setError(true);
               setErrorMessage("please enter a valid mobile number");
               }
               else{
               setNumber(e.target.value);
               setError(false);
               }
               
          }
          else{

               setError(true);
               setErrorMessage("please enter a valid 10 digit mobile number");
          }

     };


     const handleOnClick=async (e)=>{

          let res=await config.post("/v2/auth/public/generateOTP",{
               "mobile":number
          });
          txd=res.data.txnId;
     };


     
     const verifyOtp=async (str)=>{       
         
        try{  
          let res = await config.post("/v2/auth/public/confirmOTP",{
               "otp":getHash(str),
               "txnId":txd
          });
          alert(res.data);
          }
         catch(e)
         {
              alert(e);
         } 
     }


     return(<>
          <div className="card">
               
               <h1> please enter mobile number to begin</h1>
               <input placeholder="Enter Mobile Number" onChange={handleOnChange} type="text" maxLength={10}/>
               <br/>
               {isNumberError && <p className="error">{errorMessage}</p>}
               <br/>
               <div className="loader"></div>
               <br/>
               <button onClick={handleOnClick}>Get OTP</button>
          </div>
     </>);

}