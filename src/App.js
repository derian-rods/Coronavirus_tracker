import React, {useState, useEffect} from 'react';
import './App.css';
import { ToolBar } from './components/ToolBar';
import { CardStats } from './components/Statistics';
import { List } from './components/List';
import MapChart from './components/Map'
import {useAxios} from './hooks/useAxios/useAxios'
import { LoadingScreen } from './components/Layouts/Loading';

function App() {

  const [country, setcountry] = useState('World Wide')
  const [countries, setcountries] = useState([])
 
  const url = country === 'World Wide' ? 'https://disease.sh/v3/covid-19/all'
  : `https://disease.sh/v3/covid-19/countries/${country}`;

  const {loading, data} = useAxios(url)
 
  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries/')
    .then(resp => resp.json())
    .then(data=>{
      setcountries(data)
    })
  }, [])

  const handleCountryChange = (e)=>{
    setcountry(e.target.value) 
  }   
    return (
    <div className="app">
     {
       loading ? (
          <LoadingScreen />
       ): (
         <>
             <header className="app__header">
            <nav className="app__nav">
              <ToolBar countries={countries} country={country} handleCountryChange={handleCountryChange}/>
            </nav>
        </header>
        <main className="app__main">
          <div className="app__statics">
              <CardStats data={data}/>
              <MapChart countries= {countries}/>      
          </div>
            <List countries={countries}/>
        </main>
        </>
       )
     }
    </div>
  );
}

export default App;
