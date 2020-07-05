import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Donat from './components/Doughnut'
import Form from './components/Form'
import Chart from './components/Chart'
import Menuu from './components/Menu'
import Global from './components/Global'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import coronaImg from './images/corona.png'

function App() {

  const [data, setData] = useState('')
  const [countries, setCountries] = useState([])
  const [countryInfo, setCountryInfo] = useState([])


  useEffect(() => {
    axios.get("https://api.covid19api.com/summary")
      .then(res => setData(res.data.Global))
  }, [])

  useEffect(() => {
    axios.get("https://api.covid19api.com/countries")
      .then(res => setCountries(res.data))
  }, [])


  function handleCountryChange(country) {
    if (country === 'Global') {
      setCountryInfo([])
    }
    axios.get(axios.get(`https://api.covid19api.com/total/country/${country}`)
      .then(res => setCountryInfo(res.data)))
  }

    function handleRedirect(){
      setCountryInfo([])
      return <Redirect to='/'/>
    }

  return (
    <div className="App" >
      <img src={coronaImg} alt='corona' onClick={handleRedirect}/>
      <div className='headerWrapper'>
        <Form handleCountryChange={handleCountryChange} countries={countries} />
        <Menuu data={data} />
      </div>

      
      <AnimatePresence>
      <Switch>
        <Route exact path='/'>
  {countryInfo.length > 0 ? <Chart country={countryInfo.length > 0 ? countryInfo : ''} />
            : <Donat data={data} />}   
        </Route>
        <Route path='/global'>
          <Global />
        </Route>
      </Switch>
      </AnimatePresence>
    </div>

  );
}

export default App;
