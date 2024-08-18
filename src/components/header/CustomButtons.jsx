import {useState,useContext} from 'react';

import {Box, Button, Typography,styled} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';
 import LoginDialog from '../login/LoginDialog';
 import Profile from './profile';

 import {DataContext} from '../../context/DataProvider';

const Wrapper= styled(Box)`
 display:flex;
 margin: 0 3% 0 auto;
    & > button, & > p, & > div{
    margin-right:40px;
    font-size:16px;
    align-item:center;
}
`
const Container= styled(Box)`
 display:flex;
}
`
const LoginButton= styled(Button)`
  color: #2874f0;
    background: #FFFFFF;
    text-transform: none;
    font-weight: 600;
    border-radius: 2;
    padding: 5px 40px;
    height: 32;
    box-shadow: none;
}
` 

const CustomButtons =()=>{

    const [open,setOpen]= useState(false);  //value of open is initially false which will change to true on click
    
    const {account, setAccount}= useContext(DataContext);

    const openDialog= ()=>{
      setOpen(true);
    }

    return(
        <Wrapper>
           {
            account ?<Profile account={account} setAccount={setAccount}/>:
            <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
                
         }
              

           <Typography style={{ marginTop: 3, width: 135 }}> Become a Seller</Typography>
           <Typography style={{ marginTop: 3 }}>More</Typography>
           <Container>        {/*it was box*/}
            <ShoppingCart/>
            <Typography>Cart</Typography>
           </Container>
             <LoginDialog open={open} setOpen={setOpen}/>  {/*open and setOpen is paseed as prop*/}
        </Wrapper>


    )

}

export default CustomButtons;