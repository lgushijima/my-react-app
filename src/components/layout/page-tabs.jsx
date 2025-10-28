import {Box} from '@mui/material';
import {useTabs} from '@/contexts/tabs-context';
import {NavLink} from 'react-router-dom';

export const PageTabs = ({fixedTabs}) => {
  const {tabs} = useTabs();

  return (
    <Box
      sx={{
        background: 'rgba(0,0,0,0.1)',
        padding: '1rem',
        paddingBottom: 0,
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
      }}>
      {(fixedTabs ?? []).map((tab, idx) => (
        <span key={tab.id}>
          {idx == 0 ? '' : ' | '}
          <NavLink to={tab.link}>{tab.title}</NavLink>
        </span>
      ))}

      {tabs.map(tab => (
        <span key={tab.id}>
          {' | '}
          <NavLink to={tab.link}>{tab.title}</NavLink>
        </span>
      ))}
    </Box>
  );
};
