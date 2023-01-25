import { useParams } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { seacrhByCountry } from '../config'
import Info from './../components/Info'

const Button = styled.button`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  padding: 0 0.7rem;
  line-height: 2.5;
  background-color: var(--colors-ui-base);
  color: var(--color-text);
  border-radius: 6px;
  border: 1px solid var(--colors-text);
  box-shadow: var(--shadow);
  cursor: pointer;
`

function Detail() {
  const navigate = useNavigate()
  const { name } = useParams()
  const [country, setCountry] = useState(null)

  useEffect(() => {
    axios.get(seacrhByCountry(name)).then(({ data }) => setCountry(data[0]))
  }, [name])

  return (
    <>
      <Button
        onClick={() => {
          navigate(-1)
        }}
      >
        <IoArrowBack width={'40px'} />
        {name}
      </Button>
      {country && <Info props={country} />}
    </>
  )
}

export default Detail
