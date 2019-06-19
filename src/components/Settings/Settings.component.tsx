import * as React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles: any = makeStyles(
  theme =>
    ({
      toggleContainer: {
        margin: theme.spacing(2, 0)
      },
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      gutterBottom: {
        textAlign: 'center',
        marginBottom: theme.spacing(8)
      },
      reset: {
        margin: theme.spacing(3, 0, 2)
      }
    } as any)
);

interface SettingsProps {
  unitFormat?: string;
  changeUnitFormat?: any;
  getLocation?: any;
  coords?: any;
}

const Settings: React.SFC<SettingsProps> = props => {
  const classes = useStyles();
  const {
    unitFormat,
    getLocation,
    changeUnitFormat,
    coords: { latitude, longitude }
  } = props;
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <div className={classes.gutterBottom}>
          <Typography component="h3" variant="h5">
            Your geolocation:
          </Typography>

          <Typography>
            latitude: {latitude} and longitude: {longitude}
          </Typography>
        </div>

        <Typography component="h1" variant="h5">
          Units
        </Typography>
        <div className={classes.toggleContainer}>
          <Grid item>
            <ButtonGroup
              variant="contained"
              color="primary"
              aria-label="Full-width contained primary button group"
            >
              <Button
                disabled={unitFormat === 'c'}
                onClick={() => changeUnitFormat('c')}
              >
                C
              </Button>
              <Button
                disabled={unitFormat === 'f'}
                onClick={() => changeUnitFormat('f')}
              >
                F
              </Button>
            </ButtonGroup>
          </Grid>
        </div>

        <Typography component="h1" variant="h5">
          System Settings
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          className={classes.reset}
          onClick={getLocation}
        >
          Reset Cache
        </Button>
      </div>
    </Container>
  );
};

export default Settings;
