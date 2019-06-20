import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import moment from 'moment';

const useStyles: any = makeStyles(
  theme =>
    ({
      heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
      },
      heroButtons: {
        marginTop: theme.spacing(4)
      },
      date: {
        marginTop: theme.spacing(4),
        textAlign: 'center'
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      },
      cardMedia: {
        minHeight: '150px',
        background: 'skyblue',
        padding: theme.spacing(1.5)
      },
      headerTitle: {
        color: 'white'
      },
      cardContent: {
        flexGrow: 1,
        textAlign: 'center'
      }
    } as any)
);

interface MainProps {
  getWeather?: any;
  weatherData?: any;
  fechedAt?: string;
}

const Main: React.SFC<MainProps> = props => {
  const classes = useStyles();
  const { location = null, forecasts = [] } = props.weatherData || {};
  const { fechedAt } = props;
  const unit = localStorage.getItem('lastRequestedUnit');
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {!location && `Weather Yahoo API`}
              {location && `Weather at ${location.city}`}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={props.getWeather}
                  >
                    Fetch Actual Updates
                  </Button>
                </Grid>
              </Grid>
              <div className={classes.date}>
                {location && `Last fetched ${fechedAt}`}
              </div>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {forecasts.map((item: any, idx: number) => {
              const day = moment.unix(item.date).format('dddd');
              const month = moment.unix(item.date).format('DD MMMM');

              return (
                <Grid item key={`${item + idx}`} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <div className={classes.cardMedia}>
                      <div className={classes.headerTitle}>
                        <Typography variant="h5" component="h4">
                          Low: {item.low} {unit && unit.toUpperCase()}
                        </Typography>
                        <Typography variant="h5" component="h4">
                          High: {item.high} {unit && unit.toUpperCase()}
                        </Typography>
                        <Typography>{item.text}</Typography>
                      </div>
                    </div>
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5" component="h2">
                        {day}
                      </Typography>
                      <Typography>{month}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default Main;
