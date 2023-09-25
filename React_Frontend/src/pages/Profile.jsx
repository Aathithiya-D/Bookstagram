import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Footer from '../components/Footer';


export default function Profile() {
    const user = useSelector(state => state.admin.value);

  return (
    <div>
        <Navbar />
        <div className='text-3xl font-extrabold mb-1 py-2 mt-24'>
          Welcome Back!!
        </div>
        <h2>{user.email}</h2>
        <Footer />
    </div>
  )
}
