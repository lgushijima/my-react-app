import {Box, Button} from '@mui/material';
import {useNavigate, useParams} from 'react-router-dom';
import {usePageState} from '@/hooks';
import {usePageTabs} from '@/contexts/tabs-context';

export const DashboardTabHome = ({}) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [stateData, setStateData, pageId] = usePageState('DashboardTabHome', id);
  const {addTab} = usePageTabs();

  const openNewTab = () => {
    const newTabId = Date.now();
    const link = `/app/dashboard/test/${newTabId}`;
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
