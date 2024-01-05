import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


export default function Home() {
  const [books, setBooks] = useState([]);
  const token = localStorage.getItem('jwtToken');
  const uid = localStorage.getItem('uid');
  const headers = {
    'Authorization': `Bearer ${token}`
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/book/getAllBooks', { headers: headers });
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const addToMyBooks = async (data) => {
    try {
      await axios.post('http://localhost:8080/api/v1/mybook/addMyBook', data, { headers: headers })
      .then((response) => {
        if(response.data === "Book Added to My Books Successfully")
        toast.success("Added Successfully")
        else
        toast.error("Already Added")

      })
    } catch (error) {
      console.log('Error adding book: ', error);
    }
  };

  return (
    <div>
      <Navbar />
      <Box sx={{ display: 'flex', flexDirection: 'column',paddingBottom:"100px" }}>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
        <Typography sx={{ fontWeight: 'bolder', fontSize: '21px', mt: 15, mb: 5, ml: 5, mr: 5 }}>Books For You</Typography>
        <Box sx={{
          display: 'flex',
          overflowX: 'scroll',
          gap: 3,
          // maxWidth: '1050px', // maximum width to ensure 4 cards per row
          margin: '0px 100px 0px 100px', // center the container horizontally
        }}>
          {books.map((book) => (
            <Card key={book.bid} sx={{ width: '200px', height: '370px', flex: '1 0 auto' }}>
              <CardMedia
                component="img"
                style={{ objectFit: 'cover', width: '960px', height: '200px' }}
                src={book.book_img_url}
                alt={book.bookname}
              />
              <CardContent>
                <Typography variant="h6">{book.bookname}</Typography>
                <Typography variant="subtitle1" color="text.secondary">{book.authorname}</Typography>
                <Typography variant="subtitle2" color="text.secondary">Published: {book.dop}</Typography>
                <button onClick={() => addToMyBooks({ bid: book.bid, uid: uid })} class="rounded-lg bg-blue-300 p-1 md:p-3 text-white mt-4 transition duration-300 ease-in-out hover:bg-blue-950">Want To Read</button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
