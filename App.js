import logo from './logo.svg';
// import './App.css';
import { Table, TableBody, TableHead, TableRow, TableCell, Button, Checkbox, FormControlLabel, TextField, Typography, Grid, Box, Container } from '@mui/material';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './component/Login'
import SignUp from './component/SignUp'
import Find from './component/Find';
import Home from './component/Home';
import Hello from './component/Hello';



function App() {


  return (
    <div >
      <BrowserRouter>
        <Link to='/'>home page</Link>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Login' Component={Login} />
          <Route path='/SignUp' Component={SignUp} />
          <Route path='/Find' Component={Find} />
        </Routes>
      </BrowserRouter>



    </div >
  )

}
export default App;
