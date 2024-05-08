import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ErroPage = () => {
        const notify = () => toast("Wow so easy!");


  return (
    <div>
        <div className="text-red-600 text-3xl">
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>

      
    </div>
  )
}

export default ErroPage

 // <div className="text-center bg-black w-80 h-80 mx-auto">
    //    <div className=''>Erro Verification</div>
    //    <div className=''>Wait for 12 hours and try again</div>
    // </div>