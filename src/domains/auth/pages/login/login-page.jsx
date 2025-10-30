import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Box, Button, Grid, Stack, TextField} from '@mui/material';
import logo from '@/assets/img/logos/muzit.png';
import {setUser} from '@/domains/auth/reducer/slice';

import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {LoadingText} from '../../../../components/common/LoadingText';

//-- form validation schema
const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(3, 'Password must be at least 6 characters long'),
});

const loginApi = async ({username, password}) => {
  console.log('Simulando login...', username, password);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === '123') {
        resolve({
          id: 1,
          name: 'Admin User',
          email: username,
          role: 'default',
          token: 'fake-jwt-token',
          avatar: '/img/avatar/avatar-3.png',
        });
      } else {
        reject({message: 'Invalid credentials'});
      }
    }, 3000);
  });
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //-- initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async data => {
    try {
      const user = await loginApi(data);
      console.log('Login successful:', user);
      if (user) {
        dispatch(setUser({user}));
        navigate('/app');
      }
    } catch (error) {
      console.error('Erro de login:', error.message || error);
      //const apiErrors = formatApiError(error);
      //setApiErrors(apiErrors);
    }
  };

  return (
    <Box className="login-page">
      <Grid container spacing={2}>
        <Grid size={{xs: 11, md: 5, lg: 3}}>
          <Box className="login-header">
            <img src={logo} />
          </Box>
          <Box className="login-content">
            <h2>User authentication</h2>

            <Box sx={{px: 2}}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                  <TextField
                    label="Username"
                    defaultValue=""
                    variant="filled"
                    size="small"
                    {...register('username')}
                    error={!!errors.username}
                    helperText={errors.username?.message || ''}
                  />
                  <TextField
                    label="Password"
                    defaultValue=""
                    variant="filled"
                    size="small"
                    type="password"
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password?.message || ''}
                  />

                  <a href="#" className="forgot-password-link">
                    Forgot password?
                  </a>

                  <Button variant="contained" color="primary" type={isSubmitting ? 'button' : 'submit'}>
                    <LoadingText value="Login" isLoading={isSubmitting} />
                  </Button>
                </Stack>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
