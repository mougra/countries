import styled from 'styled-components'
import { IInfo } from '../models/models'

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const ListItem = styled.li``
const Meta = styled.div``
const TagGroup = styled.div``
const Tag = styled.span``

// interface countrieProps {
//   img: string
//   name: string
//   info: IInfo[]
//   onClick(active: unknown): void
// }

function Info({ props }: any) {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currentcies = [],
    languages = [],
    borders = [],
    push,
  } = props
  return (
    <>
      <Wrapper>
        <InfoImage src={flag} alt={name} />

        <div>
          <InfoTitle>{name}</InfoTitle>
          <ListGroup>
            <List>
              <ListItem>
                <b>Native Name:</b> {nativeName}
              </ListItem>
              <ListItem>
                <b>Population</b> {population}
              </ListItem>
              <ListItem>
                <b>Region:</b> {region}
              </ListItem>
              <ListItem>
                <b>Sub Region:</b> {subregion}
              </ListItem>
              <ListItem>
                <b>Capital:</b> {capital}
              </ListItem>
            </List>
            <List>
              <ListItem>
                <b>Top Level Domain</b>{' '}
                {topLevelDomain.map((d: any) => (
                  <span key={d}>{d}</span>
                ))}
              </ListItem>
              <ListItem>
                <b>Currency</b>{' '}
                {currentcies.map((c: any) => (
                  <span key={capital.code}>{c.name} </span>
                ))}
              </ListItem>
              <ListItem>
                <b>Top Level Domain</b>{' '}
                {languages.map((l: any) => (
                  <span key={l.name}>{l.name}</span>
                ))}
              </ListItem>
            </List>
          </ListGroup>
          <Meta>
            <b>Border Countries</b>
            {!borders.length ? (
              <span>There is no border countries</span>
            ) : (
              <TagGroup>
                {borders.map((b: any) => (
                  <Tag key={b}>{b}</Tag>
                ))}
              </TagGroup>
            )}
          </Meta>
        </div>
      </Wrapper>
    </>
  )
}

export default Info
