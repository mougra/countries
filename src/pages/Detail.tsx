import { useParams } from 'react-router-dom'

function Detail({ match }: any) {
  const { name } = useParams()
  return <>{name}</>
}

export default Detail
