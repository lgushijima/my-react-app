import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

import {getUserName} from '@/domains/auth/reducer/slice';
import {useSelector} from 'react-redux';
import {Badge, Button} from '@mui/material';

export const TopBar = ({onProfileClick, onMenuClick}) => {
  const currentUserName = useSelector(getUserName);

  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Box>
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

        <Box sx={{flexGrow: 0}}>
          <IconButton onClick={onProfileClick} sx={{mr: 1}} size="medium" color="secondary">
            <i className="fal fa-trophy"></i>
            <Badge badgeContent={3} color="primary" overlap="circular" sx={{top: '-12px', right: 0}} />
          </IconButton>

          <IconButton onClick={onProfileClick} sx={{mr: 1}} size="medium" color="secondary">
            <i className="fal fa-envelope"></i>
            <Badge badgeContent={2} color="primary" overlap="circular" sx={{top: '-12px', right: 0}} />
          </IconButton>

          <IconButton onClick={onProfileClick} sx={{mr: 2}} size="medium" color="secondary">
            <i className="fal fa-search"></i>
          </IconButton>

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
