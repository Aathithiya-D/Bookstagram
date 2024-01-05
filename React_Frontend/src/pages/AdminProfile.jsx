import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UpdateProfile from './UpdateProfile';
import { Backdrop } from '@mui/material';
import AdminNavbar from '../AdminComponents/AdminNavbar';
import AdminFooter from '../AdminComponents/AdminFooter';



export default function AdminProfile() {

  const[user, setUser] = useState([]);
  const [open, setOpen] = useState(false);

  const token = localStorage.getItem('jwtToken');

  const uid = localStorage.getItem('uid');

  const headers = {
    'Authorization': `Bearer ${token}`
  }

  useEffect(() => {
      fetchUser();
  }, []);

  const fetchUser = async () => {
    try {   
        const response = await axios.get(`http://localhost:8080/api/v1/user/find/${uid}`, { headers : headers});
        setUser(response.data);
    } catch (error) {
        console.error('Error fetching user:', error);
    }

};

  return (
    <div>
        <AdminNavbar />
        <div className="mt-40 justify-center items-center max-w-md mx-auto bg-whitesmoke shadow-lg rounded-lg overflow-hidden h-400">
            <div className="px-4 py-6">
              <FontAwesomeIcon icon={faUser} flip size="lg" className="w-20 h-20 mx-auto rounded-full flex items-center justify-center" />  
              <h1 className="text-gray-800 text-3xl text-center font-semibold mt-5">
                {user.name}
              </h1>
              <p className="text-gray-600 text-center mt-3">{user.email}</p>
            </div>
            <div className="px-4 py-4 bg-gray-100 border-t border-gray-200" style={{ display: 'grid', placeItems: 'center' }}>
               <button onClick={() => setOpen(true)}
                        className="text-gray-700 hover:text-green-500 text-center">Update Details</button>
                <Backdrop sx={{ color: '#fff', zIndex: 1 }} open={open}>
                        <UpdateProfile
                            show={open}
                            setOpen={setOpen}
                        />

                </Backdrop>
            </div>
        </div>
        <div className='mt-10 flex justify-center items-center'>
            <Link 
              onClick={() => {localStorage.clear()}
            } to='/' className='block px-4 py-2 text-gray-800 bg-white hover:text-red-500 rounded-lg transition-all duration-300 ease-in-out'>Logout</Link>
        </div>
        <AdminFooter />
    </div>
  )
}

