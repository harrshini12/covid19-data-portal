import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from './components/Header';
import AllCountriesInfo from './components/AllCountriesInfo';
import CountrySelector from './components/CountrySelector';
import Summary from './components/Summary';
import Footer from './components/Footer';

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header />
      <div
        className="p-4 pt-5 pb-5"
        style={{ paddingLeft: '100px', paddingRight: '100px' }}
      >
        <Tabs>
          <TabList>
            <Tab>All Countries Info</Tab>
            <Tab>Country Selector & Summary</Tab>
          </TabList>

          <TabPanel>
            <AllCountriesInfo />
          </TabPanel>

          <TabPanel>
            <CountrySelector onCountrySelect={handleCountrySelect} />
            <Summary selectedCountry={selectedCountry} />
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default App;
