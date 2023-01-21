import axios from 'axios'

import Header from './components/Header'
import Main from './components/Main'
import Controls from './components/Controls'
import List from './components/List'
import Card from './components/Card'

import { ICountries } from './models/models'

import { useState, useEffect } from 'react'
import { ALL_COUNTRIES } from './config'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
  }, [])

  console.log(countries)

  return (
    <>
      <Header />
      <Main>
        <Controls />
        <List>
          {countries.map((countrie: ICountries) => {
            const countryInfo = {
              img: countrie.flags.png,
              name: countrie.name,
              info: [
                {
                  title: 'Population',
                  description: countrie.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: countrie.region,
                },
                {
                  title: 'Capital',
                  description: countrie.capital,
                },
              ],
            }

            return <Card key={countrie.name} {...countryInfo} />
          })}
        </List>
      </Main>
    </>
  )
}

export default App
