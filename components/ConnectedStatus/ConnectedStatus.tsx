import { Grid } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ClearIcon from '@material-ui/icons/Clear';

export interface ConnectedStatusProps {
  connected?: boolean;
  actionButton?: React.ReactElement;
}

const ConnectedStatus = ({ connected, actionButton }: ConnectedStatusProps) => {
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
            <CheckCircleIcon style={{ fill: 'green' }} />
          ) : (
            <ClearIcon style={{ fill: 'red' }} />
          )}
        </Grid>
        <Grid item>{connected ? 'Connected!' : 'Not Connected'}</Grid>
        <Grid item>{!connected && actionButton ? actionButton : null}</Grid>
      </Grid>
    </>
  );
};

export default ConnectedStatus;
