import {useTheme, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material';

export const SideMenu = ({onClick, items, title, subtitle}) => {
  const theme = useTheme();

  return (
    <Box
      className="sideMenu"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        height: '100%',
        backgroundColor: 'background.secondary',
      }}>
      <Box
        sx={{
          flex: '1',
          width: 300,
          backgroundImage: theme.custom.background.gradient,
        }}
        role="presentation"
        onClick={() => onClick(false)}>
        <Box
          sx={{
            backgroundColor: 'background.primary',
            padding: '1rem',
          }}>
          <Typography variant="h5" component="h2">
            {title || 'Main Menu'}
          </Typography>
          <Typography variant="body2" component="span">
            {subtitle || 'Choose a feature to access'}
          </Typography>
        </Box>
        <Divider />
        <List disablePadding>
          {items.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{minWidth: '35px'}}>
                  <i className={item.icon} />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
