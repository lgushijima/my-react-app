import {Outlet} from 'react-router-dom';
import {usePageState} from '@/hooks';
import {PageTabsProvider} from '@/contexts';
import {PageTabs} from '@/components/layout/page-tabs';

export const ProfilePage = ({}) => {
  const initialData = {
    tabs: [
      {id: 'profile', title: 'Profile', link: '/app/profile'},
      {id: 'achievements', title: 'Achievements', link: '/app/profile/achievements'},
      {id: 'preferences', title: 'Preferences', link: '/app/profile/preferences'},
    ],
  };
  const [stateData, setStateData, pageId] = usePageState('ProfilePage', 'profile', initialData);

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
