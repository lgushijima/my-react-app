export const profileMenuConfig = handlers => {
  return [
    {
      text: 'Edit profile',
      icon: 'fal fa-pencil-alt',
      onClick: () => handlers.navigate('/app/profile'),
    },
    {
      text: 'Achievements',
      icon: 'fal fa-medal',
      onClick: () => handlers.navigate('/app/profile/achievements'),
    },
    {
      text: 'Preferences',
      icon: 'fal fa-cog',
      onClick: () => handlers.navigate('/app/profile/preferences'),
    },
    {
      text: 'Tier',
      icon: 'fal fa-trophy',
      onClick: () => handlers.navigate('/app/profile/tiers'),
    },
    {
      text: 'Change password',
      icon: 'fal fa-unlock-alt',
      onClick: () => {
        handlers.changePassword();
      },
    },
    {
      text: 'Logout',
      icon: 'fal fa-sign-out-alt',
      onClick: () => {
        handlers.logout();
      },
    },
  ];
};
