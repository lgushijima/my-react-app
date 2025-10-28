import {Box, TextField, Typography} from '@mui/material';
import {usePageState} from '../../../hooks';

export const DashboardTabTest = () => {
  const [stateData, setStateData, pageId] = usePageState('DashboardTabTest');

  return (
    <Box>
      <h4>Tab Test</h4>
      <Typography variant="h6" sx={{mb: 2}}>
        Formulário #{pageId}
      </Typography>
      <TextField fullWidth label="Nome" sx={{mb: 2}} value={stateData.nome || ''} onChange={e => setStateData({nome: e.target.value})} />
      <TextField fullWidth label="Descrição" multiline rows={4} />
    </Box>
  );
};
