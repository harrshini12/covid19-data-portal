import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllCountriesInfo = () => {
  const [countriesInfo, setCountriesInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountriesInfo = async () => {
      try {
        const response = await axios.get(
          'https://xsepkabzfc.execute-api.eu-central-1.amazonaws.com/covid19data/allcountriesinfo',
        );
        setCountriesInfo(response.data);
        setIsLoading(false); 
      } catch (error) {
        console.error(error);
        setIsLoading(false); 
      }
    };

    fetchCountriesInfo();
  }, []);

  return (
    <div className="m-5">
      <h2 className="my-4 text-center">All Countries Info</h2>
      {isLoading ? (
        <p>Loading all countries info...</p>
      ) : (
        <table className="table my-4">
          <thead>
            <tr>
              <th>Country</th>
              <th>Cases</th>
              <th>Deaths</th>
              <th>Today's Cases</th>
              <th>Today's Deaths</th>
            </tr>
          </thead>
          <tbody>
            {countriesInfo.map((country) => (
              <tr key={country.country}>
                <td>{country.country}</td>
                <td>{country.cases}</td>
                <td>{country.deaths}</td>
                <td>{country.todayCases}</td>
                <td>{country.todayDeaths}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllCountriesInfo;
