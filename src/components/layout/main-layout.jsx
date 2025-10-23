import {Box, Drawer} from '@mui/material';
import {useState} from 'react';
import {SideMenu} from './side-menu';
import {TopBar} from './top-bar';

import {getUserName} from '@/domains/auth/reducer/slice';
import {useSelector} from 'react-redux';

export const MainLayout = ({children}) => {
  const [mainMenuOpen, setMainMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const currentUserName = useSelector(getUserName);

  const toggleMainMenuDrawer = newOpen => {
    setMainMenuOpen(newOpen);
  };
  const toggleProfileMenuDrawer = newOpen => {
    setProfileMenuOpen(newOpen);
  };

  const mainMenu = [
    {
      text: 'Dashboard',
      icon: 'fal fa-home',
    },
    {
      text: 'Heatmap',
      icon: 'fal fa-map-marker-alt',
    },
    {
      text: 'Trends',
      icon: 'fal fa-analytics',
    },
    {
      text: 'Campaign',
      icon: 'fal fa-bullseye-pointer',
    },
  ];

  const profileMenu = [
    {
      text: 'Edit profile',
      icon: 'fal fa-pencil-alt',
    },
    {
      text: 'Achievements',
      icon: 'fal fa-medal',
    },
    {
      text: 'Preferences',
      icon: 'fal fa-cog',
    },
    {
      text: 'Tier',
      icon: 'fal fa-trophy',
    },
    {
      text: 'Change password',
      icon: 'fal fa-unlock-alt',
    },
    {
      text: 'Logout',
      icon: 'fal fa-sign-out-alt',
    },
  ];

  const drawerStyleSettings = {
    '& .MuiDrawer-paper': {
      top: '4rem',
      height: 'calc(100% - 4rem)',
    },
  };

  return (
    <Box>
      <TopBar onMenuClick={() => toggleMainMenuDrawer(true)} onProfileClick={() => toggleProfileMenuDrawer(true)} />

      <Drawer open={mainMenuOpen} onClose={() => toggleMainMenuDrawer(false)} sx={drawerStyleSettings}>
        <SideMenu onClick={toggleMainMenuDrawer} items={mainMenu}></SideMenu>
      </Drawer>

      <Drawer open={profileMenuOpen} onClose={() => toggleProfileMenuDrawer(false)} anchor={'right'} sx={drawerStyleSettings}>
        <SideMenu onClick={toggleProfileMenuDrawer} items={profileMenu} title={'Profile'} subtitle={`Hello ${currentUserName}!`}></SideMenu>
      </Drawer>

      <Box>{children}</Box>
    </Box>
  );
};
