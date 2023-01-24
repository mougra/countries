import axios from 'axios'
import { useEffect, useState } from 'react'

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
  const [filteredCounties, setFilteredCounties] = useState(countries)
  const [isFiltered, setIsFiltered] = useState(false)

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
  }, [])

  const handleSearch = (search: string, region: string) => {
    let data = [...countries]
    if (search === '' && region === '') {
      setIsFiltered(false)
      return
    }
    if (region) {
      data = data.filter((c) => c.region.includes(region))
    }
    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      )
    }
    setIsFiltered(true)
    setFilteredCounties(data)
  }

  const navigate = useNavigate()

  return (
    <>
      <Controls OnSearch={handleSearch} />
      <List>
        {(isFiltered ? filteredCounties : countries).map(
          (countrie: ICountries) => {
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
                key={countryInfo.name}
                {...countryInfo}
                onClick={() => navigate(`/country/${countrie.name}`)}
              />
            )
          }
        )}
      </List>
    </>
  )
}

export default HomePage
