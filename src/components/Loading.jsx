import React, { useState, useEffect } from 'react';
 
// Importing loader
import PacmanLoader from "react-spinners/PacmanLoader";
import ClockLoader from "react-spinners/ClockLoader";
// import './App.css';
 
const Loading = () => {
 
    // Loading state 
    const [isLoading, setIsLoading] = useState(true);
 
    useEffect(() => {
 
        // Wait for 3 seconds
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
 
    // Custom css for loader
    const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  align-items: center;
`;
 
    return isLoading ?
 
        // If page is still loading then splash screen
        <PacmanLoader color={'#36D7B7'} isLoading={isLoading}
            css={override} size={150} /> :
        <h1 className="App">
            
            {<ClockLoader color={'#36D7B7'} isLoading={isLoading}
                css={override} size={150} />}
        </h1>
}
 
export default Loading;