import React from 'react';
import useStyles from './styles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const HeroContent = ({ heroTopText, heroBottomText }) => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {heroTopText}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {heroBottomText}
        </Typography>
      </Container>
    </div>
  );
};

export default HeroContent;
