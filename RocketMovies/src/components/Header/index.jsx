import { Container, Profile } from './styles';
import { Logo } from '../Logo';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export function Header () {
  const {signOut} = useAuth();

  return (
    <Container>
      <Logo />
      <input type="text" />
      <Profile>
        <div>
          <strong>Kim Teixeira</strong>
          
          <span onClick={signOut}>sair</span>
          
          </div>
          <Link to="/Profile">
        <img src="https://github.com/kimciddev.png" alt="user profile image" />
        </Link>
      </Profile>
    </Container>
  )
}