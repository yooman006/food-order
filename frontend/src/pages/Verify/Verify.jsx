import React from 'react'
import './Verify.css'
import {usetSearchParams} from 'react-router-dom'

const Verify = () => {

    const [searchParams,setSearchParams] = usetSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");

    console.log(success,orderId);

  return (
    <div>
        
    </div>
  )
}

export default Verify