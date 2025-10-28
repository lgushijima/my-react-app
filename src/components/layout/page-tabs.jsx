import {Box} from '@mui/material';
import {useTabs} from '@/contexts/tabs-context';
import {NavLink} from 'react-router-dom';

export const PageTabs = ({fixedTabs}) => {
  const {tabs} = useTabs();

  return (
    <Box className="page-tabs">
      {(fixedTabs ?? []).map((tab, idx) => (
        <Box key={tab.id}>
          <NavLink to={tab.link}>{tab.title}</NavLink>
        </Box>
      ))}

      {tabs.map(tab => (
        <Box key={tab.id}>
          <NavLink to={tab.link}>{tab.title}</NavLink>
        </Box>
      ))}
    </Box>
  );
};
