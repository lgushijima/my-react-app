import {Box, IconButton} from '@mui/material';
import {usePageTabs} from '@/contexts/tabs-context';
import {useLocation, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

export const PageTabs = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const {tabs, removeTab, selectTab} = usePageTabs();

  const handleTabClick = tab => {
    navigate(tab.link);
  };

  const checkTabClassNames = tab => {
    const classNames = [];
    tab.active && classNames.push('active');
    tab.dynamic && classNames.push('closable');
    return classNames.join(' ');
  };

  useEffect(() => {
    const currentTab = tabs.find(t => t.link == currentPath);
    if (currentTab) selectTab(currentTab.id);
  }, [currentPath]);

  return (
    <Box className="page-tabs">
      {(tabs ?? []).map((tab, idx) => (
        <a key={idx} href="#" onClick={() => handleTabClick(tab)} className={checkTabClassNames(tab)}>
          <span>{tab.title}</span>

          {tab.dynamic && (
            <IconButton
              aria-label="delete"
              size="small"
              color="primary"
              onClick={e => {
                e.stopPropagation();
                removeTab(tab.id);
                handleTabClick(tabs[0]);
              }}>
              <i className="fal fa-times"></i>
            </IconButton>
          )}
        </a>
      ))}
    </Box>
  );
};
