import { Container } from './styles'
import { TiArrowLeftThick } from "react-icons/ti";


export function ButtonText ({icon: Icon, title, ...rest}) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={16} />}
      <span>{title}</span>
    </Container>
  )
}