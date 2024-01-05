import React, { useEffect } from 'react'
import error from '../images/404-error.jpg'

export default function ErrorPage(){


  useEffect(() => {

    const delay = 3000;
    const timeoutId = setTimeout(() => {
      window.history.back();
    },delay);

    return () => clearTimeout(timeoutId);
  },[])

  return (
    <div className='error-404' style={{width: '100%', height : '50%'}}>
        <div className='error-image' style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
          <img src={error} width="60%" alt='404-Error'/>
        </div>
    </div>
  )
}
