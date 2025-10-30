import {Box, Drawer} from '@mui/material';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {resetUser, getUserName} from '@/domains/auth/reducer/slice';
import {resetPagesState} from '@/routes/reducer/pages-slice';

import {SideMenu} from './side-menu';
import {TopBar} from './top-bar';

import {mainMenuConfig, profileMenuConfig} from '@/routes/menus';
import {LoadingOverlay} from '../common/LoadingOverlay';

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

  const mainMenu = mainMenuConfig(handlers);
  const profileMenu = profileMenuConfig(handlers);

  const drawerStyleSettings = {
    '& .MuiDrawer-paper': {
      top: '4rem',
      height: 'calc(100% - 4rem)',
    },
  };

  return (
    <Box className="main-layout">
      {/* <LoadingOverlay></LoadingOverlay> */}

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
