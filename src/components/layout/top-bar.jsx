import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

import {getUserName} from '@/domains/auth/reducer/slice';
import {useSelector} from 'react-redux';

export const TopBar = ({onProfileClick, onMenuClick}) => {
  const currentUserName = useSelector(getUserName);

  return (
    <AppBar position="static" sx={{paddingRight: '1rem', paddingLeft: '1rem'}}>
      <Toolbar disableGutters>
        <Box sx={{display: {xs: 'flex'}}}>
          <IconButton size="large" color="primary" aria-label="menu" sx={{mr: 2}} onClick={onMenuClick}>
            <i className="fal fa-bars"></i>
          </IconButton>
        </Box>

        <Typography
          variant="h6"
          noWrap
          sx={{
            flexGrow: 1,
            mr: 2,
            display: {xs: 'none', md: 'flex'},
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}>
          Ushijima
        </Typography>

        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}></Box>

        <Box sx={{flexGrow: 0}}>
          <Tooltip title={currentUserName}>
            <IconButton onClick={onProfileClick} sx={{p: 0}}>
              <Avatar alt={currentUserName} src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
