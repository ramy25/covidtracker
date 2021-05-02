import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import axios from 'axios';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Grow from '@material-ui/core/Grow';

import CovidCard from './components/CovidCard/CovidCard';
import Header from './components/Header';
import HeroContent from './components/HeroContent';
import CountrySelect from './components/CountrySelect';

const App = () => {
  const classes = useStyles();
  const [covidStats, setCovidStats] = useState([]);
  const [country, setCountry] = useState('Global');
  const [currentCountry, setCurrentCountry] = useState([]);
  const currentDate = new Date();
  const formatedDate = currentDate.toUTCString();
  let formatCountry = [];

  const handleChange = (e) => {
    setCountry(e.target.value);

    if (e.target.value === 'Global') {
      setCurrentCountry(covidStats.Global);
    } else {
      formatCountry = covidStats.Countries.filter(
        (item) => item.Country === e.target.value
      );
      setCurrentCountry(formatCountry[0]);
    }
  };

  useEffect(() => {
    axios.get('https://api.covid19api.com/summary').then((res) => {
      setCovidStats(res.data);
      setCurrentCountry(res.data.Global);
    });
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grow in style={{ transformOrigin: '0 0 0' }} {...{ timeout: 800 }}>
        <main>
          <HeroContent
            heroTopText="Simple COVID19 Tracker"
            heroBottomText="Use the select below to check stats about each country regarding COVID19"
          />
          <Container className={classes.cardGrid} maxWidth="md">
            <CountrySelect
              country={country}
              handleChange={handleChange}
              countries={covidStats.Countries}
              currentCountry={currentCountry}
              formatedDate={formatedDate}
            />
            <Grid container spacing={4}>
              <CovidCard
                cardType="Cases"
                cardNewStats={currentCountry.NewConfirmed}
                cardTotalStats={currentCountry.TotalConfirmed}
              />
              <CovidCard
                cardType="Deaths"
                cardNewStats={currentCountry.NewDeaths}
                cardTotalStats={currentCountry.TotalDeaths}
              />
            </Grid>
          </Container>
        </main>
      </Grow>
    </>
  );
};

export default App;
