// theme.tsx
import { createTheme } from '@mui/material/styles';

// Define your Material UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#8E8E8E',
    },
    accent: {
      main: '#FF4081', // Choose your accent color here
    },
  },

  typography: {
    fontFamily: "Space Grotesk",
    h1: {
      // fontFamily: berkeleyOldStyle.style.fontFamily, // Use Berkeley Old Style for h1
      fontSize: '3.5rem', // Default font size for the smallest screens (xs)
      letterSpacing: -3,
      fontWeight: '500'
    },
    h2: {
       fontWeight: '700', 
       color: '#333741',
       letterSpacing: -1,
    },

    h4: {
      color: '#333741',
    },

    h5: {
      color: '#333741'
    },

    h6: {
      // fontFamily: berkeleyOldStyle.style.fontFamily, // Use Berkeley Old Style for h1
      color: '#8E8E8E',
      fontSize: '20px', // Default font size for the smallest screens (xs)
      fontWeight: '500',
      lineHeight: '140%',
    },

    body1: {
      fontSize: '1rem', // Adjust the font size as needed
      fontWeight: '400',
      lineHeight: '1.5',
      color: '#333741', // Ensure good contrast and readability
    },
    body2: {
      fontSize: '0.875rem', // Slightly smaller than body1
      fontWeight: '400',
      lineHeight: '1.5',
      color: '#333741',
    }
  },

  components: {
  },
});

export default theme;
