// src/components/Video.tsx
import React from 'react';
import { Box } from '@mui/material';

const Video: React.FC = () => {
  return (
    <Box className="flex justify-center items-center w-full h-full p-4">
      <video className="max-w-full h-auto" controls>
        <source src="path_to_your_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
}

export default Video;
