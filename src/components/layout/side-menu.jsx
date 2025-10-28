import {useTheme, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material';

export const SideMenu = ({onClick, items, title, subtitle}) => {
  const theme = useTheme();

  return (
    <Box className="side-menu">
      <Box role="presentation" onClick={() => onClick(false)}>
        <Box>
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
