import {Box, TextField, Typography} from '@mui/material';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {setPageState} from '@/routes/reducer/pages-slice';

export const DashboardTabTest = () => {
  const componentName = 'DashboardTabTest';
  const dispatch = useDispatch();
  const {id} = useParams();
  const pageId = id || 'new';

  const emptyData = {};
  const formData = useSelector(state => state.pages[componentName]?.[pageId]?.data ?? emptyData);

  //-- function to save the current data into the store
  const setFormData = newData => {
    dispatch(
      setPageState({
        componentName: componentName,
        pageId: pageId,
        state: {data: {...formData, ...newData}},
      }),
    );
  };

  useEffect(() => {
    if (id && !formData?.nome) {
      //-- set the initial page data in the store
      setFormData({id: id, nome: '', descricao: ''});
    }
  }, [id]);

  return (
    <Box>
      <h4>Tab Test</h4>
      <Typography variant="h6" sx={{mb: 2}}>
        Formulário #{id}
      </Typography>
      <TextField fullWidth label="Nome" sx={{mb: 2}} value={formData.nome || ''} onChange={e => setFormData({nome: e.target.value})} />
      <TextField fullWidth label="Descrição" multiline rows={4} />
    </Box>
  );
};
