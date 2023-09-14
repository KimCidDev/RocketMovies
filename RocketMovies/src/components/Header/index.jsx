import { Container, Profile } from './styles';
import { Logo } from '../Logo';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';


import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'


export function Header () {
  const {signOut, user} = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const navigate = useNavigate();


  return (
    <Container>
      <Logo />
      <input type="text" />
      <Profile>
        <div>
          <strong>{user.name}</strong>
          
          <span onClick={signOut}>sair</span>
          
          </div>
        <img 
        src={avatarUrl} 
        alt="user profile image"
        onClick={() => navigate('/profile')} />
      </Profile>
    </Container>
  )
}