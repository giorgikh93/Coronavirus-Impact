import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import axios from 'axios'
import Donat from './components/Doughnut'
import Form from './components/Form'
import Chart from './components/Chart'
import Menuu from './components/Menu'
import Global from './components/Global'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Switch as Darkmode } from '@material-ui/core'
import { Consumer } from './useColorTheme'
import coronaImg from './images/corona.png'

function App() {

  const { changeColorTheme, theme } = useContext(Consumer)
  const [data, setData] = useState('')
  const [countries, setCountries] = useState([])
  const [countryInfo, setCountryInfo] = useState([])
  const [individualCountry, setIndividualCountry] = useState('')
  const [loading, setLoading] = useState('Loading...')

  useEffect(() => {
    axios.get("https://api.covid19api.com/summary")
      .then(res => setData(res.data))
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

    setIndividualCountry(country)
  }

  function handleRedirect() {
    setCountryInfo([])
    return <Redirect to='/' />
  }

  function error() {
    setTimeout(func, 10000)
    function func() {
      setLoading(`Something went wrong! try Later..`)
    }
  }
  if (!data) {
    error()
  }

  theme === 'dark' ? document.getElementById('root').classList.add('dark') : document.getElementById('root').classList.remove('dark');

  return (
    !data ? <h1 style={{ width: '100%', textAlign: 'center', marginTop: '200px', fontSize: '50px' }}>{loading}</h1> :
      <div className={`App `} >
        <div className='darkMode'>
          <span id={theme === 'dark' ? 'darkForm' : ''}>Change Mode</span>  <Darkmode onChange={changeColorTheme} color='primary' />
        </div>
        <img src={coronaImg} alt='corona' onClick={handleRedirect} />


        <div className='headerWrapper'>
          <Form handleCountryChange={handleCountryChange} countries={countries} />
          <Menuu data={data} setCountryInfo={setCountryInfo} />
        </div>



        <AnimatePresence>
          <Switch>
            <Route exact path='/'>
              {countryInfo.length > 0 ? <Chart country={countryInfo.length > 0 ? countryInfo : ''} />
                : <Donat data={data} country={individualCountry} />}
            </Route>
            <Route path='/chart'>
              <Chart country={countryInfo} />
            </Route>
            <Route path='/global'>
              {countryInfo.length > 0 ? <Chart country={countryInfo} /> : <Global />}
            </Route>
          </Switch>
        </AnimatePresence>
      </div>

  );
}

export default App;
