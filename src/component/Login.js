import { Button, Checkbox, FormControlLabel, TextField, Typography, Link, Grid, Box, Container } from '@mui/material';
import { BrowserRouter, Routes, Route, Link as LinkBase } from 'react-router-dom';
import SignUp from './SignUp'


function Login() {
  let content = <Container maxWidth='xs'>
    <Box sx={{
      alignItems: 'center',
      flexDirection: ' column',
      display: 'flex',
      marginTop: 8
    }}>
      <Typography component="h1" variant='h5'>Sign in</Typography>
      <TextField label='Id' name='email' required autoComplete='email' autoFocus fullWidth /><br /> {/* 이메일받기*/}
      <TextField label='Password' type='password' name='password' required autoComplete='current-password' fullWidth /><br /> {/* 비밀번호받기*/}
      <FormControlLabel control={<Checkbox value="remember" color='primary' />} label='Remember me' />
      <Button variant='contained' type='submit' fullWidth sx={{ mt: 1 }} onsubmit={() => {
      }}>Sign in</Button>

      <Grid container>
        <Grid item xs>
          <LinkBase to='/Find'>
            <Link>Forgot password?</Link>
          </LinkBase>

        </Grid>
        <Grid item>

          <LinkBase to='/SignUp'>
            <Link>Sign Up</Link>
          </LinkBase>

        </Grid>
      </Grid>
    </Box >
  </Container>
  return (
    <div>

      {content}
    </div >
  );
}
export default Login;
