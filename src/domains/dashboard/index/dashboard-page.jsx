import {Box} from '@mui/material';
import {Outlet} from 'react-router-dom';
import {usePageState} from '@/hooks';
import {TabsProvider} from '@/contexts';
import {PageTabs} from '@/components/layout/page-tabs';

export const DashboardPage = ({}) => {
  const [stateData, setStateData, pageId] = usePageState('DashboardPage');

  return (
    <TabsProvider>
      <Box
        sx={{flex: 1, display: 'flex', flexDirection: 'column', background: 'rgba(0,0,0,0.1)', padding: '1rem'}}
        className="dashboard-page">
        <PageTabs fixedTabs={[{id: '1', title: 'Home', link: ''}]} />

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            background: 'rgba(0,0,0,0.1)',
            padding: '1rem',
            borderBottomLeftRadius: '1rem',
            borderBottomRightRadius: '1rem',
          }}>
          <Outlet />
        </Box>
      </Box>
    </TabsProvider>
  );
};
