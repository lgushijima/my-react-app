import {Box} from '@mui/material';
import {useParams} from 'react-router-dom';
import {usePageState} from '@/hooks';

export const ProfileTabPreferences = ({}) => {
  const {id} = useParams();
  const [stateData, setStateData, pageId] = usePageState('ProfileTabPreferences', id);

  return (
    <Box>
      <h4>Preferences</h4>
    </Box>
  );
};
