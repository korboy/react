import { Button, TextField, Typography, Box, Container, Grid, Link } from '@mui/material';
import { BrowserRouter, Routes, Route, Link as LinkBase } from 'react-router-dom';
function Find() {
    let content = <Container maxWidth='xs'>
        <Box sx={{
            alignItems: 'center',
            flexDirection: ' column',
            display: 'flex',
            marginTop: 8
        }}>
            <Typography component="h1" variant='h5'>Find Id and Password</Typography>
            <TextField label='email address' name='email' required autoComplete='email' autoFocus fullWidth /><br />
            <Grid item>
                <LinkBase to='/'>
                    <Link>sign in here</Link>
                </LinkBase>
            </Grid>
            <Button variant='contained' type='submit' fullWidth sx={{ mt: 1 }} onsubmit={() => {
            }}>find id</Button>

        </Box >
    </Container>
    return (
        <div>
            {content}
        </div >
    );
}
export default Find;
