import { Button, TextField, Typography, Box, Container } from '@mui/material';

import Login from './Login'
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
