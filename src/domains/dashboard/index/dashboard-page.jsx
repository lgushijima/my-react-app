import {Box} from '@mui/material';
import {Outlet} from 'react-router-dom';
import {usePageState} from '@/hooks';
import {TabsProvider} from '@/contexts';
import {PageTabs} from '@/components/layout/page-tabs';

export const DashboardPage = ({}) => {
  const [stateData, setStateData, pageId] = usePageState('DashboardPage');

  return (
    <TabsProvider>
      <div className="page-container">
        <PageTabs fixedTabs={[{id: '1', title: 'Home', link: ''}]} />

        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </TabsProvider>
  );
};
