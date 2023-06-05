import { Container } from './styles'

import { Tag } from '../../components/Tag';

export function Movie ({data, ...rest}) {
  return (
    <Container>
      <h1>{data.title}</h1>
      <p>{data.description}</p>      
      { data.tags &&
      <footer>
        {
          data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
        }
      </footer>
      }
    </Container>
  )
}