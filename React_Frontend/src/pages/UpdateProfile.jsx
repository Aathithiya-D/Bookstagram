import { Box, Button, IconButton, TextField, Tooltip } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from 'antd';


export default function UpdateProfile({ setOpen }) {
    const [profile, setProfile] = useState({})

    const updateProfile = async () => {
        console.log(profile)

        const uid = localStorage.getItem('uid');

        const token = localStorage.getItem('jwtToken');

        const headers = {
            'Authorization': `Bearer ${token}`
        };
        
        try {
            console.log(profile);
            await axios.put(`http://localhost:8080/api/v1/user/edit/${uid}`, profile, { headers : headers});
            setOpen(false)
            window.location.reload()
        } catch (error) {
            console.error('Error updating user:', error);
        }
    }

    return (
        <Box sx={{ width: '500px', height: '350px', backgroundColor: 'whitesmoke' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Tooltip title='close'>
                    <IconButton sx={{ '&:hover': { color: 'red' } }} onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box sx={{ pr: 3, pl: 3 }}>
                <Box>
                    <Typography style={{ fontWeight: 'bold', color: 'black' }}>Update Details</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <TextField onChange={(e) => setProfile({... profile, name: e.target.value})} size='small' id='Name' label='Name' name='Name'/>
                        <TextField onChange={(e) => setProfile({...profile, password: e.target.value})} size='small' id='Password' label='Password' name='Password'/>
                    </Box>
                </Box>
                <Box sx={{ mt: 8, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        onClick={updateProfile}
                        color='error'
                        variant='outlined'
                    >Update</Button>
                </Box>
            </Box>
        </Box>
    )
}
