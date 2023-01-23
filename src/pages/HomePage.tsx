import axios from 'axios'
import { useState, useEffect } from 'react'

import Controls from '../components/Controls'
import List from '../components/List'
import Card from '../components/Card'

import { ICountries } from '../models/models'
import { ALL_COUNTRIES } from '../config'

import { useNavigate } from 'react-router-dom'

interface homeProps {
  countries: ICountries[]
  setCountries(active: any): void
}

function HomePage({ countries, setCountries }: homeProps) {
  useEffect(() => {
    if (!countries.length)
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
  }, [])

  const navigate = useNavigate()
  return (
    <>
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

          return (
            <Card
              key={countrie.name}
              {...countryInfo}
              onClick={() => navigate(`/country/${countrie.name}`)}
            />
          )
        })}
      </List>
    </>
  )
}

export default HomePage
