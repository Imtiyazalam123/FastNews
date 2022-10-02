import React from 'react'
import loading from '../Images/loading.gif'

export default function Spinner() {
  return (
    <div className='container text-center my-5'>
      <img src={loading} alt="spinner did'nt load...." />
    </div>
  )
}
