import React, { useEffect, useState } from 'react';
import SidePanel from './SidePanel';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Button, Typography } from '@mui/material';
import AdminNavbar from './AdminNavbar';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);

  const token = localStorage.getItem('jwtToken');

  const headers = {
    'Authorization': `Bearer ${token}`
  };

  useEffect(() => {
    fetchUsers();
  }, []); 

  const fetchUsers = async () => {
    try {   
      const response = await axios.get('http://localhost:8080/api/v1/user/get', { headers: headers });
      // Ensure that response.data is an array, handle non-array response if necessary
      if(Array.isArray(response.data)) {
        setUsers(response.data);
      } else {
        // Handle non-array response, setUsers([]) or handle it based on your requirement
        console.error('Invalid response data:', response.data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (uid) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/user/delete/${uid}`, { headers: headers });
      fetchUsers(); // Refresh the user list after deletion
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <AdminNavbar />
      <Box sx={{ mt: '95px', height: 'calc(100vh - 95px)', width: '100%', display: 'flex', backgroundColor: 'whitesmoke' }}>
        <SidePanel />
        <Box sx={{ height: '100%', width: 'calc(100% - 325px)' }}>
          <Box sx={{ mt: 8, ml: 3, mr: 3, overflowY: 'hidden', maxHeight: '700px' }}>
            <Typography sx={{ fontSize: '25px'}}>Users List</Typography>
            <br/>
            <Table sx={{ backgroundColor: 'white' }}>
              <TableHead>
                <TableRow>
                  <TableCell>User ID</TableCell>
                  <TableCell>User Name</TableCell>
                  <TableCell>Email ID</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.uid}>
                    <TableCell>{user.uid}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Button variant="contained" onClick={() => deleteUser(user.uid)} style={{ borderRadius: 5, backgroundColor: 'red', color: 'white' }}>Restrict</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Box>
    </>
  );
}
