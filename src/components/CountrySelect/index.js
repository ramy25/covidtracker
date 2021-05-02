import React from 'react';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const CountrySelect = ({
  countries,
  country,
  handleChange,
  currentCountry,
  formatedDate,
}) => {
  return (
    <>
      <Container style={{ marginBottom: 20 }}>
        <FormControl style={{ minWidth: 200 }}>
          <InputLabel id="countries">Countries</InputLabel>
          <Select
            labelId="countries"
            id="countries-select"
            value={country}
            onChange={handleChange}
          >
            <MenuItem key="Global" value="Global">
              Global
            </MenuItem>
            {countries?.map((country) => (
              <MenuItem key={country.Slug} value={country.Country}>
                {country.Country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>
      <Typography
        variant="h5"
        align="center"
        color="textPrimary"
        paragraph
        gutterBottom
      >
        {currentCountry.Country ? currentCountry.Country : 'Global'}
      </Typography>
      <Typography align="center" color="textSecondary" paragraph>
        {formatedDate}
      </Typography>
    </>
  );
};

export default CountrySelect;
