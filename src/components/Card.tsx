import styled from 'styled-components'

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`
const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`
const CardTitle = styled.h3`
  text-decoration: none;
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`
const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`
const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`

interface countrieProps {
  img: string
  name: string
  info: IInfo[]
  onClick(active: unknown): void
}

export interface IInfo {
  title: string
  description: string
}

function Card({ img, name, info, onClick }: countrieProps) {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.length > 1 &&
            info.map((inf) => (
              <CardListItem>
                <b>{inf.title}:</b> {inf.description}
              </CardListItem>
            ))}
          {info.length === 1 && (
            <CardListItem>
              <b>{info[0].title}:</b> {info[0].description}
            </CardListItem>
          )}
        </CardList>
      </CardBody>
    </Wrapper>
  )
}

export default Card
