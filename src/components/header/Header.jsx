
import {AppBar,Toolbar,Box,styled, Typography} from '@mui/material';

import Search from './Search';
import CustomButtons from './CustomButtons';

//styled is applied on AppBar and it is stored in StyledHeader
const StyledHeader = styled(AppBar)`  
    background: #2874f0;
    height: 55px;
`;
const Component = styled(Box)`  
    margin-left:14%;
    line-height=0;
`;
const SubHeading = styled(Typography)`  
    font-size:12%;
`;
const PlusImage = styled('img')({     //img is not a compnent of mui so for using html element inside style component use string
    width: 10,
    height: 10,
    marginLeft: 4
})

const CustomButtonWrapper= styled(Box)`
 margin: 0 3% 0 ; 
`;

const Header=()=>{

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return(
        <StyledHeader>  {/*AppBar changed to StyledHeader*/}

            <Toolbar style={{minHeight:55}}>
                 <Component>             {/*  // Box is altenate of div in materail ui And box name is changed to component*/} 
                    <img src={logoURL} alt='logo' style={{width:75 }}/>

                    <Box style={{display:'flex'}}>    {/*made another box to include typography*/}
                        <SubHeading>Explore&nbsp;
                            <Box component= "span" style={{color:'#FFE500'}}> Plus</Box>
                             </SubHeading>        {/*Typography changed to subheading*/}

                             <PlusImage src={subURL} />
                    </Box>
                </Component>
                <Search />

                <CustomButtonWrapper>                     {/*wrapping CustomButtons inside Box to apply css*/}
                    <CustomButtons/>
                </CustomButtonWrapper>

            </Toolbar>

            </StyledHeader>
    )
}

export default Header;