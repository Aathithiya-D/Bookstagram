import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "./styles/books.css"
import axios from 'axios'
import { Box, TableCell, Table, TableBody, TableHead, TableRow, Typography, Select, MenuItem, Rating } from '@mui/material';



export default function Books() {   

    const[myBooks, setMyBooks] = useState([]);

    const token = localStorage.getItem('jwtToken');

    const uid = localStorage.getItem("uid");

    const headers = {
        'Authorization': `Bearer ${token}`
      };

    useEffect(() => {
        fetchMyBooks();
    }, []);

    const fetchMyBooks = async () => {
        try {   
            console.log(headers);
            const response = await axios.get(`http://localhost:8080/api/v1/mybook/getAllMyBooks/${uid}`, { headers : headers});
            setMyBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const handleActionChange = async (e, bookId) => {
        const newAction = e.target.value;
        // Make API call to update the action for the specific book
        try {
            console.log(newAction);
            await axios.put(`http://localhost:8080/api/v1/mybook/updateBookAction/${bookId}/${uid}/${newAction}`, null,{ headers : headers });
            // Assuming the API call is successful, update the state with the updated data

            const updatedBooks = myBooks.map(book => {
                if (book.bid === bookId) {
                    return { ...book, action: newAction };
                }
                return book;
            });
            setMyBooks(updatedBooks);
        } catch (error) {
            console.error('Error updating book action:', error);
        }
    };

    const handleRatingChange = async (e, bookId) => {
        const newRating = e.target.value;
        // Make API call to update the action for the specific book
        try {
            console.log(newRating);
            await axios.put(`http://localhost:8080/api/v1/mybook/updateRating/${bookId}/${uid}/${newRating}`, null,{ headers : headers });
            // Assuming the API call is successful, update the state with the updated data

            const updatedBooks = myBooks.map(book => {
                if (book.bid === bookId) {
                    return { ...book, rating: newRating };
                }
                return book;
            });
            setMyBooks(updatedBooks);
        } catch (error) {
            console.error('Error updating book rating:', error);
        }
    };

    return (
        <>
            <Navbar />
            <Box sx={{ mt: '22px', display: 'flex', backgroundColor: 'whitesmoke' }}>
                <Box sx={{ height: '100%', width: '100%' }}>
                    <Box sx={{mt:10, ml: 3, mr: 3, overflowY: 'hidden', maxHeight: '600px' }}>
                        <Typography sx={{fontWeight: 600, fontSize: '21px'}}>My Virtual Bookshelf</Typography>
                        <Table sx={{ mt:2, backgroundColor : 'white', tableLayout: "fixed"}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>S.No.</TableCell>
                                    <TableCell>Book Cover</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Author</TableCell>
                                    <TableCell>Rating</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                        <Box sx={{ maxHeight: '500px', overflowY: 'auto' }}>
                            <Table sx={{ tableLayout: 'fixed' }}>
                                <TableBody>
                                    {myBooks.map((elem, id) => {
                                        const myBook = JSON.parse(elem)
                                        return (
                                            <TableRow key={myBook.bid}>
                                                <TableCell>{id+1}</TableCell>
                                                <TableCell>
                                                    <img src={myBook.book_image_url} alt='book-cover' style={{ width : '80px', height: '100px'}} />
                                                </TableCell>
                                                <TableCell>{myBook.bookname}</TableCell>
                                                <TableCell>{myBook.authorname}</TableCell>
                                                <TableCell>
                                                    <Rating onChange={(e) => handleRatingChange(e, myBook.bid)} defaultValue={myBook.rating} max={5} />
                                                </TableCell>
                                                {/* <TableCell>{myBook.review}</TableCell>  */}
                                                <TableCell>
                                                    <Select
                                                        defaultValue={myBook.action}
                                                        onChange={(e) => handleActionChange(e, myBook.bid)} // handleActionChange should be a function to handle dropdown changes
                                                        style={{ width: '100%' }}
                                                    >
                                                        <MenuItem value="wantToRead">Want to Read</MenuItem>
                                                        <MenuItem value="read">Read</MenuItem>
                                                        <MenuItem value="currentlyReading">Currently Reading</MenuItem>
                                                    </Select>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }
                                    )}
                                </TableBody>
                            </Table>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
}
