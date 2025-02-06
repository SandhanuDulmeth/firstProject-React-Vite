
import React, { useState } from 'react';

export default function Home() {

    const [count, setCount] = useState(0);
  
    function incrementCount() {
      setCount(prevCount => prevCount + 1);
    }






    return (
        <>
            <div className="home">
               <h1>Welcome to the home page! {count}</h1> 
                <br />
                <button onClick={incrementCount}>click Me </button>
                
                
                
                </div>
        </>
    );
}