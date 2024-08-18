
import {useState,useContext} from 'react';
import {Dialog,Box,TextField,Typography,Button,styled} from '@mui/material';

import { authenticateSignup,authenticateLogin } from '../../service/api';
import {DataContext} from '../../context/DataProvider';

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Image= styled(Box)` 
         background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
          width: 28%;
           height: 80%;
            padding: 45px 35px;
            & > p, & > h5 {       
        color: #FFFFFF;
        font-weight: 600
    }
`

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const accountInitialValues={       // made object to pass it in useState
    login: {
        view:'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view:'signup',
         heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const loginInitialValues={
    username:'',
    password:''
}
 

const LoginDialog=({open,setOpen})=>{
    const [account,toggleAccount]= useState(accountInitialValues.login);          //initially login rahega
    const [signup,  setSignup]=useState(signupInitialValues);
    const [login,  setLogin]=useState(loginInitialValues);
    const [error, setError]= useState(false);


    const {setAccount}=useContext(DataContext);  //data context mein se value nikalega

    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountInitialValues.login); 
        setError(false);
    }
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }
    const onInputChange=(e)=>{
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }
    const signupUser=async ()=>{
       let response= await authenticateSignup(signup);  //signup ke andar sara data hai & yaha se jo data return hoga woh response mein save hoga
       if(!response) return;
       setAccount(signup.firstname); 
       handleClose();
             
    }
    const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});

    }

    const loginUser=async()=>{    // button le click pe user ko login kardega
        let response= await authenticateLogin(login);
        console.log(response);
        if(response.status===200){
            handleClose();
            setAccount(response.data.data.firstname);  
        }else{
            setError(true);
        }

    }


    return(
        
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>   {/*passing open in place of {true}*/}
           <Component>   {/*Box changed to component*/}
            <Box style={{display:'flex' , height:'100%'}}>                                    {/* need a parent tag to apply display flex on left &right*/}
            <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
            </Image>     {/*for left part and Box changed to image*/} 

              {

              account.view === 'login' ?
                            //login
            <Wrapper>             
                <TextField variant="standard" onChange={(e)=> onValueChange(e)} name='username' label="Enter Username"></TextField>
                {error &&<Error>Please Enter valid username or password</Error>}
                <TextField variant="standard"  onChange={(e)=> onValueChange(e)} name='password' label="Enter Password"></TextField>
                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                <Typography style={{textAlign: 'center'}}>OR</Typography>
                <RequestOTP>Request OTP</RequestOTP>
                <CreateAccount  onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
            </Wrapper>

            :
            //signup
            <Wrapper>             
                <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='firstname' label="Enter FirstName"/>
                <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='lastname' label="Enter LastName"/> 
                <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='username' label="Enter UserName"/>
                <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='email' label="Enter Email"/>
                <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='password' label="Enter Password"/>
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label="Enter Phone"/>
                      
                <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                
            </Wrapper>
}


            </Box>


           </Component>

        </Dialog>
    )
}

export default LoginDialog;