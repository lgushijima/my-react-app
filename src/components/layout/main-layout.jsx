import {Box, Drawer} from '@mui/material';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {resetUser, getUserName} from '@/domains/auth/reducer/slice';
import {resetPagesState} from '@/routes/reducer/pages-slice';

import {SideMenu} from './side-menu';
import {TopBar} from './top-bar';

import {profileMenuConfig} from '@/routes/menus/profile-menu';

export const MainLayout = ({children}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handlers = {
    navigate: link => {
      navigate(link);
    },
    changePassword: () => {
      console.log('change password');
    },
    logout: () => {
      dispatch(resetUser());
      dispatch(resetPagesState());
    },
  };

  const profileMenu = profileMenuConfig(handlers);

  const drawerStyleSettings = {
    '& .MuiDrawer-paper': {
      top: '4rem',
      height: 'calc(100% - 4rem)',
    },
  };

  return (
    <Box className="main-layout">
      <TopBar onMenuClick={() => toggleMainMenuDrawer(true)} onProfileClick={() => toggleProfileMenuDrawer(true)} />

      <Drawer open={mainMenuOpen} onClose={() => toggleMainMenuDrawer(false)} sx={drawerStyleSettings}>
        <SideMenu onClick={toggleMainMenuDrawer} items={mainMenu}></SideMenu>
      </Drawer>

      <Drawer open={profileMenuOpen} onClose={() => toggleProfileMenuDrawer(false)} anchor={'right'} sx={drawerStyleSettings}>
        <SideMenu onClick={toggleProfileMenuDrawer} items={profileMenu} title={'Profile'} subtitle={`Hello ${currentUserName}!`}></SideMenu>
      </Drawer>

      {children}
    </Box>
  );
};
