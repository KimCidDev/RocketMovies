import { Container } from './styles';
import { Logo } from '../Logo';
import { Account } from '../Account'

export function Header () {
  return (
    <Container>
      <Logo />

      <input type="text" />

      <Account />


    </Container>
  )
}