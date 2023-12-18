import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const showToastMessage = () => {
        toast.error("Success Notification !", {
            position: toast.POSITION.TOP_CENTER,
          });
   
    };
  
    return (
      <div>
        <button onClick={showToastMessage}>Notify</button>
        <ToastContainer />
      </div>
    );
  }
  
  export default Home;
