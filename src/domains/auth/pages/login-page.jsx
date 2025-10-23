import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Box, Typography} from '@mui/material';

export const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //   const methods = useForm<LoginRequest>({ resolver: zodResolver(LoginSchema) });
    //   const [apiErrors, setApiErrors] = useState([]);

    //   const [login, { isLoading }] = useLoginMutation();

    const onSubmit = async data => {
        // try {
        //   const user = await login(data).unwrap();
        //   if (user) {
        //     dispatch(setUser({ user }));
        //     navigate('/app');
        //   }
        // } catch (error) {
        //   const apiErrors = formatApiError(error);
        //   setApiErrors(apiErrors);
        // }
    };

    return (
        <Box
            component={Paper}
            sx={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                overflow: 'auto',
                maxHeight: 'calc(100vh - 40px)',
            }}>
            <Box
                sx={{
                    width: {xs: '300px', md: '400px'},
                    border: '1px solid #f3f6f999',
                    padding: '20px',
                }}>
                <Typography component="div" variant="h6">
                    Welcome to School Admin !
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Sign in to continue.
                </Typography>
            </Box>
        </Box>
    );
};
