import { Container, Background, Form } from './styles';

import { useAuth } from '../../hooks/auth';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo'
import { Link } from 'react-router-dom';


import { FiMail, FiUserPlus } from 'react-icons/fi'
import { TiArrowLeftThick } from "react-icons/ti";

export function SignIn () {
  const data = useAuth()
  console.log("mandar um xis salada por email para ", data)

  return (
    <Container>
      <Form>
      <Logo />
      
      <p>Every little piece of important information you'd certainly forget</p>
      <h3>Sign In</h3>

      <Input         
        placeholder="Nome"
        type="text"
        icon={FiUserPlus}/>
      <Input         
        placeholder="Email"
        type="email"
        icon={FiMail}/>

      <Button title='Entrar'/>

      <ButtonText icon={TiArrowLeftThick}title="Return" />
      <Link to='/signUp'>
      <ButtonText icon={TiArrowLeftThick}title="Cadastrar" />
      </Link>
      </Form>
      <Background />
    </Container>

  )
}