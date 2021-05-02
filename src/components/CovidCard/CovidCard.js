import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const CovidCard = ({ cardType, cardNewStats, cardTotalStats }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={6}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent} align="center">
          <Typography gutterBottom variant="h5" component="h2">
            {cardType}
          </Typography>
          <Typography>New: {cardNewStats}</Typography>
          <Typography>Total: {cardTotalStats}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CovidCard;
