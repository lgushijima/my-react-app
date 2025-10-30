import {Box} from '@mui/material';

export const LoadingOverlay = ({}) => {
  return (
    <Box className="loading-overlay">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Box>
  );
};
