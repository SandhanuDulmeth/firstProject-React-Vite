import { Button } from "@mui/material";
import { use } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Profile() {

    let [data, setData] = useState("sandhanu")
    let [city, setCity] = useState("kandy")

    useEffect(() => {
      console.log('Profile component mounted')

        return () => {
            console.log('Component destroyed')
        }

    }, [data])

    // function changeName() {
    //   setData("sahan")
    // }

  return (<>
   <div className="profile">
     <h1>{data} {city}</h1>
     {/* <button onClick={changeName}>changeName</button> */}
     <button onClick={()=>{setData("Thor")}}>changeName</button>
     <button onClick={()=>{setCity("Colombo")}}>changeCity</button>
    </div>
  </>
   
  );
}