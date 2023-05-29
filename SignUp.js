import { Button, Checkbox, FormControlLabel, TextField, Typography, Link, Grid, Box, Container } from '@mui/material';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link as LinkBase } from 'react-router-dom';
import Login from './Login'

function SignUp() {
    const [id, setId] = useState();
    const [email, setEmail] = useState();
    const [fpassword, setFirstPassword] = useState();
    const [lpassword, setLastPassword] = useState();
    const idValidation = () => {
        let check = /[~!@#$%^&*()_+|<>?:{}.,/;='"ㄱ-ㅎ | ㅏ-ㅣ |가-힣]/;
        // console.log(check.test(id));
        return check.test(id);
    }
    const emailValidation = () => {
        let check = /^[a-zA-Z0-9.!]+@[a-z]+\.[a-z]{3}$/
        console.log(check.test(email));
        console.log(email);
        return !check.test(email);
    }

    let pas;
    return <>
        <Container maxWidth='xs'>
            <Box sx={{
                alignItems: 'center',
                flexDirection: ' column',
                display: 'flex',
                marginTop: 8
            }}>
                <Typography component="h1" variant='h5'>Sign Up</Typography>

                <TextField sx={{ mt: 5 }} label='Email Address' name='email' value={email} error={emailValidation()} helperText={emailValidation() ? "wrong email format" : ""} onChange={event => {
                    setEmail(event.target.value);
                }} required autoComplete='email' autoFocus fullWidth /><br />

                <TextField label='Id' name='id' value={id} onChange={event => {
                    setId(event.target.value);
                }} required error={idValidation()} helperText={idValidation() ? "Korean and special char are not allowed" : ""} autoComplete='current-password' fullWidth /><br />

                <TextField label='Password' name='password' required fullWidth error={true} helperText={false ? 'can type' : 'cant type'} onChange={event => {
                    setFirstPassword(event.target.value);
                }} /><br />

                <TextField label='check Password' name='passwordCheck' required fullWidth onChange={event => {
                    setLastPassword(event.target.value);
                }} /><br />

                <Grid item>
                    <LinkBase to='/Login'>
                        <Link>already have an account? sign in here</Link>
                    </LinkBase>
                </Grid>

                <Button variant='contained' type='submit' fullWidth sx={{ mt: 1 }} onClick={event => {
                    if (fpassword !== lpassword) {
                        event.preventDefault();
                        alert('password no match')
                    }
                }}>Sign up</Button>


            </Box >
        </Container>
    </>
}

export default SignUp