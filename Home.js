
import { Button, Checkbox, FormControlLabel, TextField, Typography, Grid, Box, Container } from '@mui/material';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './Login'
import SignUp from './SignUp'
import Find from './Find';



function Home() {


    return (
        <div>
            <h1>Home page</h1>

            <nav>
                <ol>
                    <li>
                        <Link to='/Login'>login</Link>
                    </li>
                    <li>
                        <Link to='/Signup'>singup</Link>
                    </li>


                </ol>


            </nav>
        </div >
    )

}
export default Home;
