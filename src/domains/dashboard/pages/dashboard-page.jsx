import {Box, Button} from '@mui/material';
import {useState} from 'react';
import {NavLink, Outlet, useNavigate} from 'react-router-dom';

export const DashboardPage = ({}) => {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();

  const createNewForm = () => {
    const newFormId = Date.now(); // usar timestamp como id único
    setForms(prev => [...prev, newFormId]);
    navigate(`test/${newFormId}`); // navega para o novo formulário
  };

  return (
    <Box
      sx={{flex: 1, display: 'flex', flexDirection: 'column', background: 'rgba(0,0,0,0.1)', padding: '1rem'}}
      className="dashboard-page">
      <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', background: 'rgba(0,0,0,0.1)', padding: '1rem', borderRadius: '1rem'}}>
        <nav>
          <NavLink to="" end>
            Visão
          </NavLink>
          {' | '}
          <NavLink to="test">Test</NavLink>
          {forms.map(formId => (
            <span key={formId}>
              {' | '}
              <NavLink to={`test/${formId}`}>Form #{formId}</NavLink>
            </span>
          ))}
        </nav>

        <Box sx={{my: 2}}>
          <Button variant="contained" onClick={createNewForm}>
            Criar Novo Formulário
          </Button>
        </Box>

        <h4>Dashboard</h4>

        <section>
          <Outlet />
        </section>
      </Box>
    </Box>
  );
};
