import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import communityBg from '../images/cropPNG.png'


export default function Community() {
  const [messages, setMessages] = useState([])
  const chatDiv = useRef()

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/chat/messages', {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
      }
    }).then((response) => setMessages(response.data));
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const message = {
      message: formData.get('message'),
      uid: parseInt(localStorage.getItem('uid'))
    } 

    axios.post('http://localhost:8080/api/v1/chat/addMessage', message, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
      }
    }).then((response) => {
      if (response.status === 200) setMessages([...messages, message])
    })

    e.target[0].value=""
  }

  useEffect(()=>{
    chatDiv.current.scrollTop = chatDiv.current.scrollHeight;
  },[messages])

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-5" style={{ backgroundImage: `url(${communityBg})`, backgroundPosition: '100% 100%', backgroundSize: '65%', backgroundRepeat: 'no-repeat' }}>
        <h1 className="text-2xl font-bold mb-4 mt-24">Welcome to the Bookstagram Community</h1>
        <p className="mb-4">
          Bookstagram Community is a place where book lovers from around the world come together to share their passion for reading.
        </p>
        <h2 className="text-xl font-semibold mb-2">What You'll Find in Our Community:</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Engaging book discussions and reviews.
          </li>
          <li>
            Recommendations from fellow bookworms.
          </li>
          <li>
            Author interaction sessions.
          </li>
        </ul>
        <h1 className="text-2xl font-bold mb-4">Discussions</h1>

        <Paper sx={{ mt: 2, height: 300, width: 500, p: 5, display: 'flex', flexDirection: 'column', overflow: 'scroll' }} elevation={3}>
          <Box sx={{ borderRadius: 2, p: '21px 33px 21px 33px', height: '300px', gap: 1, backgroundColor: '#F4F3FF', display: 'flex', flexDirection: 'column',overflowY:"scroll" }} ref={chatDiv}>
            {
              messages.map((message, id) => (
                <Typography key={id} textAlign={(message.uid === parseInt(localStorage.getItem('uid'))) ? 'right' : 'left'}>
                  <Typography sx={{ fontSize: '8px' }}>User : {message.uid}</Typography>
                  {message.message}
                </Typography>
              ))
            }
          </Box>
          <Box sx={{ mt: 3 }}>
            <Box component='form' onSubmit={sendMessage} sx={{ display: 'flex', gap: 3, alignItems: 'center', justifyContent: 'space-between' }}>
              <TextField
                id='message'
                name='message'
                sx={{ width: '100%' }}
                size='small'
                placeholder='Message here' 
                //  variant='standard'
              />
              <Button type='submit' variant='contained' endIcon={<SendIcon />}>Send</Button>
            </Box>
          </Box>
        </Paper>
      </div>
      <Footer />
    </div>
  );
}
