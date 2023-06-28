import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountrySelector = ({ onCountrySelect }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/allcountriesinfo',
        );
        setCountries(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountrySelect = (event) => {
    const selectedCountry = event.target.value;
    onCountrySelect(selectedCountry);
  };

  return (
    <div className="my-4 mt-5">
      <div className="column m-5">
        <div className="col-md-6">
          <label htmlFor="countrySelect" className="form-label">
            Select a country
          </label>
        </div>
        <div className="col-md-6">
          <select
            id="countrySelect"
            className="form-select"
            style={{ width: '680px' }}
            onChange={handleCountrySelect}
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country.country} value={country.country}>
                {country.country}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CountrySelector;
