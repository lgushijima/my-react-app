import {Avatar, Box, Button, FormControl, Grid, Input, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import {useParams} from 'react-router-dom';
import {usePageState} from '@/hooks';
import {LoadingText} from '@/components/common/LoadingText';

import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

import {IMaskInput} from 'react-imask';
import {NumericFormat} from 'react-number-format';
import React, {useState} from 'react';
import dayjs from 'dayjs';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const {onChange, ...other} = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={value => onChange({target: {name: props.name, value}})}
      overwrite
    />
  );
});

export const ProfileTabHome = ({}) => {
  const {id} = useParams();
  const [stateData, setStateData, pageId] = usePageState('ProfileTabHome', id);

  const [date, setDate] = useState(dayjs('2025-10-15'));

  return (
    <Box>
      <h4>Profile</h4>

      <Grid container spacing={3} sx={{flexGrow: 1, justifyContent: 'center', alignItems: 'stretch'}}>
        <Grid size={{xs: 12, md: 3, lg: 2}} offset={{md: 0}}>
          <Box className="box-content">
            <Avatar src="/img/avatar/avatar-3.png" sx={{height: 128, width: 128}}></Avatar>
            <Button variant="contained" color="primary" sx={{mt: 2}}>
              Change avatar
            </Button>
          </Box>
        </Grid>
        <Grid size={{xs: 12, md: 6}} offset={{md: 0}}>
          <Box className="box-content">
            <form onSubmit={{}}>
              <Grid container spacing={3} sx={{flexGrow: 1, justifyContent: 'left', alignItems: 'stretch'}}>
                <Grid size={{xs: 12}}>
                  <TextField
                    label="Name"
                    defaultValue=""
                    size="small"
                    fullWidth
                    //{...register('username')}
                    //error={!!errors.username}
                    //helperText={errors.username?.message || ''}
                  />
                </Grid>
                <Grid size={{xs: 12}}>
                  <TextField label="Email" defaultValue="" size="small" fullWidth disabled readonly />
                </Grid>
                <Grid size={{xs: 12, md: 4}}>
                  <TextField label="Phone" defaultValue="" size="small" fullWidth />
                </Grid>
                <Grid size={{xs: 12, md: 4}}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date of Birth"
                      value={date}
                      onChange={newValue => {}}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          size: 'small',
                        },
                      }}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid size={{xs: 12, md: 4}}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                    <Select
                      label="Gender"
                      labelId="demo-simple-select-autowidth-label"
                      size="small"
                      fullWidth
                      value={1}
                      onChange={() => {}}>
                      <MenuItem value={1}>Male</MenuItem>
                      <MenuItem value={2}>Female</MenuItem>
                      <MenuItem value={3}>Prefer not to say</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{xs: 12}}>
                  <TextField label="Address Line 1" defaultValue="" size="small" fullWidth />
                </Grid>
                <Grid size={{xs: 12}}>
                  <TextField label="Address Line 2" defaultValue="" size="small" fullWidth />
                </Grid>
                <Grid size={{xs: 12, md: 9}}>
                  <TextField label="City/State/Country" defaultValue="" size="small" fullWidth />
                </Grid>

                <Grid size={{xs: 12, md: 3}}>
                  <TextField
                    onChange={() => {}}
                    label="Zip Code / Postal"
                    name="zipcode"
                    fullWidth
                    size="small"
                    placeholder=""
                    InputProps={{
                      inputComponent: TextMaskCustom,
                    }}
                  />
                </Grid>
                <Grid size={{xs: 12}} sx={{display: 'flex', justifyContent: 'center'}}>
                  <Button variant="contained" color="primary" type={'submit'}>
                    <LoadingText value="Save changes" isLoading={false} />
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
