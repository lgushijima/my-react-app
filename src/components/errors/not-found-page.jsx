import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  
  return (
    <Box>
      <Box>
        <Typography component='div' variant='h6'>
          Error
        </Typography>
        <Typography variant='subtitle1' color='text.secondary'>
          Coisou as coisas
        </Typography>
      </Box>
    </Box>
  );
};
