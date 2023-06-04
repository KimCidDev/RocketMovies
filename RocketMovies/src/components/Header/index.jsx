import { Container, Profile } from './styles';
import { Logo } from '../Logo';

export function Header () {
  return (
    <Container>
      <Logo />
      <input type="text" />
      <Profile>
        <div>
          <strong>Kim Teixeira</strong>
          <span>sair</span>
          </div>
        <img src="https://github.com/kimciddev.png" alt="user profile image" />
      </Profile>
    </Container>
  )
}