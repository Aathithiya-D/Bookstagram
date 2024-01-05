import './index.css';
import Books from './pages/Books';
import Community from './pages/Community';
import Faq from './pages/Faq';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Terms from './pages/Terms';
import Login from './pages/login';
import Policy from './pages/policy';
import Signup from './pages/signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminBooks from './AdminComponents/AdminBooks';
import AdminUsers from './AdminComponents/AdminUsers';
import AdminDashboard from './AdminComponents/AdminDashboard';
import AdminProfile from './pages/AdminProfile';
import ErrorPage from './pages/error';
import AdminPolicy from './AdminComponents/Adminpolicy';
import AdminFaq from './AdminComponents/AdminFaq';
import AdminTerms from './AdminComponents/AdminTerms';
import AdminCommunity from './AdminComponents/AdminCommunity';

function App() {

  const role = localStorage.getItem("role");
  console.log(role);


  return (
     <BrowserRouter>
       <div className="App">
         <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            {
               role === "USER" &&
               <>
                  <Route path="/home" element={<Home/>}/> 
                  <Route path="/books" element={<Books/>}/>
                  <Route path="/community" element={<Community/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/policy" element={<Policy />}/>
                  <Route path="/faq" element={<Faq/>}/>
                  <Route path="/terms" element={<Terms/>}/>
               </>
            }
            {
               role === "ADMIN" &&
               <>
                  <Route path="/adminprofile" element={<AdminProfile/>}/>
                  <Route path="/adminBooks" element={<AdminBooks/>}/>
                  <Route path="/admin" element={<AdminDashboard/>}/>
                  <Route path="/adminUsers" element={<AdminUsers/>}/>
                  <Route path="/adminpolicy" element={<AdminPolicy />}/>
                  <Route path="/adminfaq" element={<AdminFaq />}/>
                  <Route path="/adminterms" element={<AdminTerms />}/>
                  <Route path="/adminCommunity" element={<AdminCommunity/>}/>
               </>
            }
            <Route path='*' element={<ErrorPage />} />
         </Routes>
      </div>
   </BrowserRouter>
  );
}

export default App;
