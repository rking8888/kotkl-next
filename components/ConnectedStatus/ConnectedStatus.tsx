import { Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ClearIcon from '@material-ui/icons/Clear';

export interface ConnectedStatusProps {
  connected?: boolean;
  primaryActionButton?: React.ReactElement;
  secondaryActionButton?: React.ReactElement;
}

const ConnectedStatus = ({
  connected,
  primaryActionButton,
  secondaryActionButton
}: ConnectedStatusProps) => {
  return (
    <>
      <Grid
        container
        direction='row'
        alignItems='center'
        spacing={2}
        justify='flex-end'
      >
        <Grid item>
          {connected ? (
            <Alert severity='success'>
              You are now authorized and connected to Yahoo API!
            </Alert>
          ) : (
            <Alert severity='warning'>
              You are not authorized or your token has expired. Please
              authorize.
            </Alert>
          )}
        </Grid>
        <Grid item>
          {!connected && primaryActionButton ? primaryActionButton : null}
        </Grid>
        <Grid item>
          {connected && secondaryActionButton ? secondaryActionButton : null}
        </Grid>
      </Grid>
    </>
  );
};

export default ConnectedStatus;
