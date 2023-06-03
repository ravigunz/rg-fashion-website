import * as React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import Button from '@mui/material/Button';

function MyApp({message}) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
      <Button onClick={handleClickVariant('error')}>Show success snackbar</Button>
    </React.Fragment>
  );
}

export default function IntegrationNotistack({message}) {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp message={message}/>
    </SnackbarProvider>
  );
}
