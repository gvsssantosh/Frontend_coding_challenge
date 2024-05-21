import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NotFound from './components/NotFound';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/login';
import CustomerHome from './components/customerhome';
import ProtectedRoute from './components/protectedRoute';

const routing = (
  <Router>

    <h3 style={{ textAlign: "center" }} >Customer Website </h3>
    {/* <div style={{ textAlign: "center" }}>
      <Link to="/">Home  </Link> ||
      <Link to="/login">Login</Link> ||
      <Link to="/userHome">userHome</Link> ||
      <Link to="/Register">Register</Link>
      <Link to="*"></Link>

    </div> */}
    <hr />

    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/aboutUs" element={<About />} />
      <Route path="/contactUs" element={<Contact />} />
      {/* <Route path="/customerHome" element={<CustomerHome />} /> */}
      <Route path="/customerHome" element={
      <ProtectedRoute returnUrl="/customerHome">
        <CustomerHome />
      </ProtectedRoute>} />


    </Routes>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//     <Routes>
//       <Route path="/" element={<App />} />

//       <Route path="/Employees" element={
//         <ProtectedRoute returnUrl="/Employees">
//           <Emps />
//         </ProtectedRoute>
//       } />

//       <Route path="/Depts" element={
//         <ProtectedRoute returnUrl="/Depts">
//           <Depts />
//         </ProtectedRoute>
//       } />
//       <Route path="/About" element={<About />} />
//       <Route path="/Contact" element={<Contact />} />
//       <Route path="/Login" element={<Login />} />
//       <Route path="/Details/:id" element={<Details />} />
//       <Route path="*" element={<NotFound />} />

//     </Routes>