import {Box} from '@mui/material';
import {useParams} from 'react-router-dom';
import {usePageState} from '@/hooks';

export const ProfileTabHome = ({}) => {
  const {id} = useParams();
  const [stateData, setStateData, pageId] = usePageState('ProfileTabHome', id);

  return (
    <Box>
      <h4>Profile</h4>
    </Box>
  );
};
