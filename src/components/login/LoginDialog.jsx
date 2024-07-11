
import {Dialog,Box,TextField,Typography,Button} from '@mui/material';
const LoginDialog=({open,setOpen})=>{

    const handleClose=()=>{
        setOpen(false);
    }
    return(
        
        <Dialog open={open} onClose={handleClose}>   {/*passing open in place of {true}*/}
           <Box>
            <Box></Box>     {/*for left part*/}

            <Box>             {/*for right part*/}
                <TextField variant="standard" label="Enter Email/mobile number"></TextField>
                <TextField variant="standard" label="Enter Password"></TextField>
                <TextField>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</TextField>
                <Button>Login</Button>
                <Typography>OR</Typography>
                <Button>Request OTP</Button>
                <Typography>New to Flipkart? Create an account</Typography>
            </Box>


           </Box>

        </Dialog>
    )
}

export default LoginDialog;