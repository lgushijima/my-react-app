import {Box, TextField, Typography} from '@mui/material';
import {usePageState} from '@/hooks';
import {useParams} from 'react-router-dom';
import {LoadingOverlay} from '@/components/common/LoadingOverlay';

export const DashboardTabTest = () => {
  const {id} = useParams();
  const [stateData, setStateData, pageId] = usePageState('DashboardTabTest', id);

  return (
    <Box flex={1} display={'flex'} flexDirection={'column'}>
      <h4>Tab Test</h4>

      {id != null ? (
        <LoadingOverlay className="" />
      ) : (
        <Box>
          <Typography sx={{mb: 2}}>Formulário #{pageId}</Typography>
          <TextField
            fullWidth
            label="Nome"
            sx={{mb: 2}}
            value={stateData.nome || ''}
            onChange={e => setStateData({nome: e.target.value})}
          />
          <TextField fullWidth label="Descrição" multiline rows={4} />
        </Box>
      )}
    </Box>
  );
};
