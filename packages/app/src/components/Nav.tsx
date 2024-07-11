import { Box, Typography } from "@mui/material";
import {Link} from 'react-router-dom'
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Nav = () => {
  
    return (
      <Box display='flex' justifyContent='space-between' padding='20px' alignContent='center' alignItems='center' width='50%' sx={{backgroundColor:'#ffffff', borderBottom: '1px solid #D9D9D9'}}>
        <Link to={"/"}>
          <Typography fontWeight='bold' sx={{letterSpacing:-0.5}}>PROOF OF TWITTER</Typography>
        </Link>

        <Box display='flex' justifyContent='space-between' gap='50px' alignContent='center' alignItems='center'>
            <Link to="https://prove.email/docs" target="_blank"><Typography>Docs</Typography></Link>
            <Link to="https://prove.email/docs" target="_blank"><Typography>Explore</Typography></Link>
            <ConnectButton/>
        </Box>
      </Box>
    );
  };

export default Nav