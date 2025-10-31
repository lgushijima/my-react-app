import {Outlet} from 'react-router-dom';
import {usePageState} from '@/hooks';
import {PageTabsProvider} from '@/contexts';
import {PageTabs} from '@/components/layout/page-tabs';

export const DashboardPage = ({}) => {
  const initialData = {tabs: [{id: 'home', title: 'Home', link: '/app/dashboard'}]};
  const [stateData, setStateData, pageId] = usePageState('DashboardPage', 'dashboard', initialData);

  return (
    <PageTabsProvider pageState={stateData} setPageState={setStateData}>
      <div className="page-container">
        <PageTabs />

        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </PageTabsProvider>
  );
};
