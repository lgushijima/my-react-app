import {Box, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {usePageState} from '@/hooks';
import {useTabs} from '@/contexts/tabs-context';

export const DashboardTabHome = ({}) => {
  const [stateData, setStateData, pageId] = usePageState('DashboardTabHome');
  const navigate = useNavigate();
  const {addTab} = useTabs();

  const openNewTab = () => {
    const newTabId = Date.now();
    const link = `test/${newTabId}`;
    addTab({id: newTabId, title: 'New Tab #' + newTabId, link: link});
    navigate(link);
  };

  return (
    <Box>
      <h4>Tab Home</h4>
      <Button variant="contained" onClick={openNewTab}>
        Create New
      </Button>
    </Box>
  );
};
