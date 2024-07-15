// import { Box, Typography } from "@mui/material";
// import {Link} from 'react-router-dom'
// import { ConnectButton } from "@rainbow-me/rainbowkit";

// const Nav = () => {
  
//     return (
//       <Box display='flex' justifyContent='space-between' padding='20px' alignContent='center' alignItems='center' width='50%' sx={{backgroundColor:'#ffffff', borderBottom: '1px solid #D9D9D9'}}>
//         <Link to={"/"}>
//           <Typography fontWeight='bold' sx={{letterSpacing:-0.5}}>PROOF OF TWITTER</Typography>
//         </Link>

//         <Box display='flex' justifyContent='space-between' gap='50px' alignContent='center' alignItems='center'>
//             <Link to="https://prove.email/docs" target="_blank"><Typography>Docs</Typography></Link>
//             <Link to="https://prove.email/docs" target="_blank"><Typography>Explore</Typography></Link>
//             <ConnectButton/>
//         </Box>
//       </Box>
//     );
//   };

// export default Nav




import { Box, Grid, Typography, useTheme } from "@mui/material";
import { Link } from 'react-router-dom';
import { ConnectButton } from "@rainbow-me/rainbowkit";

const CustomConnectButton = () => {
  const theme = useTheme();
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <Box
            onClick={() => {
              if (!ready) {
                openConnectModal();
              } else if (connected) {
                openAccountModal();
              } else {
                openConnectModal();
              }
            }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: !connected ? theme.palette.accent.main : '#1f1f1f',
              color: '#ffffff',
              padding: '10px 16px',
              borderRadius: '10px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor:  !connected ? theme.palette.accent.main : '#333333',
                opacity: !connected ? '95%' : '100%'
              },
            }}
          >
            {(() => {
              if (!ready) {
                return 'Loading...';
              }
              if (!connected) {
                return 'Connect Wallet';
              }
              return (
                <Box display="flex" alignItems="center" gap="8px">
                  <Typography variant="body2" sx={{ color: '#ffffff' }}>
                    {account.displayBalance ? `${account.displayBalance} ` : ''}
                  </Typography>
                  <Box
                    component="span"
                    sx={{
                      backgroundColor: '#2c2c2c',
                      padding: '4px 6px',
                      borderRadius: '7px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <img
                      src={account.ensAvatar || 'https://via.placeholder.com/24'}
                      alt="Avatar"
                      width="24"
                      height="24"
                      style={{ borderRadius: '50%' }}
                    />
                    <Typography variant="body2" sx={{ color: '#ffffff' }}>
                      {account.displayName}
                    </Typography>
                  </Box>
                </Box>
              );
            })()}
          </Box>
        );
      }}
    </ConnectButton.Custom>
  );
};

const Nav = () => {
  return (
    <Grid container >

    <Grid item xs={12} md={6}>
        <Box display='flex' justifyContent='space-between' padding='20px' alignContent='center' alignItems='center' width='100%' sx={{ backgroundColor: '#ffffff', borderBottom: '1px solid #D9D9D9' }}>
        <Link to={"/"}>
            <Typography fontWeight='bold' sx={{ letterSpacing: -0.5 }}>PROOF OF TWITTER</Typography>
        </Link>

        <Box display='flex' justifyContent='space-between' gap='50px' alignContent='center' alignItems='center' marginRight='50px'>
            <Link to="https://prove.email/docs" target="_blank"><Typography>Docs</Typography></Link>
            <Link to="https://prove.email/docs" target="_blank"><Typography>Explore</Typography></Link>
            <CustomConnectButton />
        </Box>
        </Box> 
    </Grid>

    </Grid>
  );
};

export default Nav;
