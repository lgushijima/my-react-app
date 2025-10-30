import {Box} from '@mui/material';
import {useParams} from 'react-router-dom';
import {usePageState} from '@/hooks';

export const ProfileTabAchievements = ({}) => {
  const {id} = useParams();
  const [stateData, setStateData, pageId] = usePageState('ProfileTabAchievements', id);

  return (
    <Box>
      <h4>Achievements</h4>
    </Box>
  );
};
