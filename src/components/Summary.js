import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';

const Summary = ({ selectedCountry }) => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        let url = 'https://eh3s48gyt3.execute-api.eu-central-1.amazonaws.com/covid19/';
        if (selectedCountry) {
          url += `specificcountryinfo/${selectedCountry}`;
        } else {
          url += 'cases';
        }

        const response = await axios.get(url);
        setSummary(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSummary();
  }, [selectedCountry]);

  return (
    <div className="my-4">
      <h2 className="mb-4 text-center">Summary</h2>
      {summary ? (
        <div className="row">
          {selectedCountry ? (
            <div className="row m-4">
              <div className="col-md-6">
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Country:</strong> {selectedCountry}
                  </li>
                  <li className="list-group-item">
                    <strong>Total Cases:</strong> {summary.cases}
                  </li>
                  <li className="list-group-item">
                    <strong>Total Deaths:</strong> {summary.deaths}
                  </li>
                  <li className="list-group-item">
                    <strong>Today's Cases:</strong> {summary.todayCases}
                  </li>
                  <li className="list-group-item">
                    <strong>Today's Deaths:</strong> {summary.todayDeaths}
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <div
                  className="chart-container"
                  style={{ width: '200%', height: '300px', marginLeft: '20px' }}
                >
                  <Chart
                    type="pie"
                    data={getChartData(summary)}
                    options={getChartOptions()}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Total Cases:</strong> {summary.cases}
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <p>Loading summary...</p>
      )}
    </div>
  );
};

const getChartData = (summary) => {
  const chartData = {
    labels: ['Cases', 'Deaths'],
    datasets: [
      {
        data: [summary.cases, summary.deaths],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };
  return chartData;
};

const getChartOptions = () => {
  const chartOptions = {
    plugins: {
      datalabels: {
        display: true,
        color: '#fff',
        font: {
          weight: 'bold',
        },
        formatter: (value) => value.toLocaleString(),
      },
    },
  };
  return chartOptions;
};

export default Summary;
