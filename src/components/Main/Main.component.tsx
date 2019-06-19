import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface MainProps {
  getWeather?: any;
  weatherData?: any;
}

const Main: React.SFC<MainProps> = props => {
  const classes = useStyles();

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
              Weather at Kiev
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
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <div className={classes.cardMedia}>
                    <div className={classes.headerTitle}>
                      <Typography variant="h3" component="h2">
                        10 C
                      </Typography>
                      <Typography>Clear Sky</Typography>
                    </div>
                  </div>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" component="h2">
                      Monday
                    </Typography>
                    <Typography>11 February</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default Main;
