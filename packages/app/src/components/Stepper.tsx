// import React, { useState } from 'react';
// import { Stepper, Step, StepLabel, Button, Box } from '@mui/material';

// const steps = [
//   'Send Reset Email',
//   'Copy/Paste DKIM Sig',
//   'Add Address',
//   'Prove',
//   'Verify & Mint'
// ];

// const StepperComponent: React.FC = () => {
//   const [activeStep, setActiveStep] = useState<number>(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStep = (step: number) => () => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Stepper activeStep={activeStep}>
//         {steps.map((label, index) => (
//           <Step key={label} onClick={handleStep(index)}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <Box sx={{ mt: 2 }}>
//         {activeStep === steps.length ? (
//           <div>
//             <p>All steps completed</p>
//             <Button onClick={() => setActiveStep(0)}>Reset</Button>
//           </div>
//         ) : (
//           <div>
//             <div>
//               <Button
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mt: 1, mr: 1 }}
//               >
//                 Back
//               </Button>
//               <Button
//                 variant="contained"
//                 onClick={handleNext}
//                 sx={{ mt: 1, mr: 1 }}
//               >
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </div>
//           </div>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default StepperComponent;









// import React, { useState } from 'react';
// import { Stepper, Step, StepLabel, Button, Box, Typography } from '@mui/material';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// const steps = [
//   'Send Reset Email',
//   'Copy/Paste DKIM Sig',
//   'Add Address',
//   'Prove',
//   'Verify & Mint'
// ];

// const StepperComponent: React.FC = () => {
//   const [activeStep, setActiveStep] = useState<number>(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStep = (step: number) => () => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Stepper activeStep={activeStep} alternativeLabel>
//         {steps.map((label, index) => (
//           <Step key={label} onClick={handleStep(index)} sx={{ cursor: 'pointer' }}>
//             <StepLabel>
//               <Typography variant="body1" component="span" sx={{ fontWeight: activeStep === index ? 'bold' : 'regular' }}>
//                 {label}
//               </Typography>
//             </StepLabel>
//             {index < steps.length - 1 && <ArrowForwardIosIcon sx={{ fontSize: 12, verticalAlign: 'middle', marginLeft: 1, marginRight: 1 }} />}
//           </Step>
//         ))}
//       </Stepper>
//       <Box sx={{ mt: 2 }}>
//         {activeStep === steps.length ? (
//           <div>
//             <p>All steps completed</p>
//             <Button onClick={() => setActiveStep(0)}>Reset</Button>
//           </div>
//         ) : (
//           <div>
//             <div>
//               <Button
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mt: 1, mr: 1 }}
//               >
//                 Back
//               </Button>
//               <Button
//                 variant="contained"
//                 onClick={handleNext}
//                 sx={{ mt: 1, mr: 1 }}
//               >
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </div>
//           </div>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default StepperComponent;








// import React, { useState } from 'react';
// import { Box, Typography, IconButton } from '@mui/material';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// const steps = [
//   'Send Reset Email',
//   'Copy/Paste DKIM Sig',
//   'Add Address',
//   'Prove',
//   'Verify & Mint'
// ];

// const StepperComponent: React.FC = () => {
//   const [activeStep, setActiveStep] = useState<number>(0);

//   const handleStep = (step: number) => () => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
//       {steps.map((label, index) => (
//         <React.Fragment key={label}>
//           <Box
//             onClick={handleStep(index)}
//             sx={{
//               cursor: 'pointer',
//               display: 'flex',
//               alignItems: 'center'
//             }}
//           >
//             <Typography
//               variant="body1"
//               component="span"
//               sx={{
//                 fontWeight: activeStep === index ? 'bold' : 'regular',
//                 color: activeStep === index ? 'black' : 'gray',
//                 borderBottom: activeStep === index ? '2px solid black' : 'none',
//                 paddingBottom: '2px'
//               }}
//             >
//               {label}
//             </Typography>
//           </Box>
//           {index < steps.length - 1 && (
//             <ArrowForwardIosIcon sx={{ fontSize: 12, verticalAlign: 'middle', marginLeft: 1, marginRight: 1, color: 'gray' }} />
//           )}
//         </React.Fragment>
//       ))}
//     </Box>
//   );
// };

// export default StepperComponent;




// import React, { useState } from 'react';
// import { Box, Typography } from '@mui/material';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// const steps = [
//   'SEND RESET EMAIL',
//   'COPY/PASTE DKIM SIG',
//   'ADD ADDRESS',
//   'PROVE',
//   'VERIFY & MINT'
// ];

// const StepperComponent: React.FC = () => {
//   const [activeStep, setActiveStep] = useState<number>(0);

//   const handleStep = (step: number) => () => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ width: '100%', position: 'relative', marginY: '50px'}}>
//       {/* Light grey bar */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '100%',
//           left: 0,
//           right: 0,
//           height: '2px',
//           backgroundColor: '#e0e0e0',
//           zIndex: 1,
//           transform: 'translateY(-50%)'
//         }}
//       />

//       <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', zIndex: 2 }}>
//         {steps.map((label, index) => (
//           <React.Fragment key={label}>
//             <Box
//               onClick={handleStep(index)}
//               sx={{
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 position: 'relative',
//                 padding: '0 10px'
//               }}
//             >
//               <Typography
//                 variant="body1"
//                 component="span"
//                 sx={{
//                   fontWeight: activeStep === index ? 'bold' : 'regular',
//                   color: activeStep === index ? 'black' : 'gray',
//                   borderBottom: activeStep === index ? '2px solid black' : 'none',
//                   paddingBottom: '2px'
//                 }}
//               >
//                 {label}
//               </Typography>
//             </Box>
//             {index < steps.length - 1 && (
//               <ArrowForwardIosIcon sx={{ fontSize: 12, verticalAlign: 'middle', color: 'gray' }} />
//             )}
//           </React.Fragment>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default StepperComponent;

import React, { ReactNode } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface StepperComponentProps {
  children: ReactNode;
  steps: string[];
  activeStep: number;
  setActiveStep: (step: number) => void;
}

const StepperComponent: React.FC<StepperComponentProps> = ({
  children,
  steps,
  activeStep,
  setActiveStep
}) => {
  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };




  return (
    <Box sx={{ width: '100%', position: 'relative', marginY: '50px'}}>

      <Box/>



      {/* Light grey bar */}
      <Box 
        sx={{ 
          display: 'flex',
          alignItems: 'center', 
          position: 'relative', 
          zIndex: 2,
          // backgroundColor:'green',
          borderBottom: '1px solid #e0e0e0' ,
        }}
      >
        {steps.map((label, index) => (
          <React.Fragment key={label}>
            <Box
              onClick={handleStep(index)}
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                padding: '0 10px',
              }}
            >
              <Typography
                variant="body1"
                component="span"
                sx={{
                  fontWeight: activeStep === index ? 'bold' : 'regular',
                  color: activeStep === index ? 'black' : 'gray',
                  borderBottom: activeStep === index ? '2px solid black' : 'none',
                  paddingBottom: '2px',
                  fontSize: {xs:'9px', sm:'11px', md:'12px', lg:'15px'}
                }}
              >
                {label}
              </Typography>
            </Box>
            {index < steps.length - 1 && (
              <ArrowForwardIosIcon sx={{ fontSize: 12, verticalAlign: 'middle', color: 'gray' }} />
            )}
          </React.Fragment>
        ))}
      </Box>

      <Box sx={{ marginTop: '20px' }}>
        {children}
      </Box>
      
      <Box sx={{ display: 'flex', width:'220px', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button
          variant="contained"
          onClick={handleBack}
          disabled={activeStep === 0}
          sx={{
            textTransform:'none',
            fontWeight:'regular',
            padding: '10px 35px',
            backgroundColor:'#1C1C1C',
            border: '1px solid #1C1C1C',
            marginY: '9px',
            color:'#ffffff',
            '&.Mui-disabled': {
              backgroundColor: '#ffffff', // Change to desired disabled background color
              color: '#1C1C1C', // Change to desired disabled text color
              border: '1px solid #757575' // Change to desired disabled border color
            }
          }}
        >
          Back
        </Button>

        <Button
          variant="contained"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
          sx={{
            textTransform:'none',
            fontWeight:'regular',
            padding: '10px 35px',
            backgroundColor:'#1C1C1C',
            border: '1px solid #1C1C1C',
            marginY: '9px',
            color:'#ffffff',
            '&.Mui-disabled': {
              backgroundColor: '#ffffff', // Change to desired disabled background color
              color: '#1C1C1C', // Change to desired disabled text color
              border: '1px solid #757575', // Change to desired disabled border color
            }
          }}
        >
          Next
        </Button>
      </Box>

    </Box>
  );
};

export default StepperComponent;
