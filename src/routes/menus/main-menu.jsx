export const mainMenuConfig = handlers => {
  return [
    {
      text: 'Dashboard',
      icon: 'fal fa-home',
      onClick: () => handlers.navigate('/app/dashboard'),
    },
    {
      text: 'Heatmap',
      icon: 'fal fa-map-marker-alt',
      onClick: () => handlers.navigate('/app/heatmap'),
    },
    {
      text: 'Trends',
      icon: 'fal fa-analytics',
      onClick: () => handlers.navigate('/app/trends'),
    },
    {
      text: 'Campaigns',
      icon: 'fal fa-bullseye-pointer',
      onClick: () => handlers.navigate('/app/campaigns'),
    },
  ];
};
