import { useState } from 'react';
import { Container, Background, Form } from './styles';

import { useAuth } from '../../hooks/auth';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo'
import { Link } from 'react-router-dom';


import { FiMail, FiLock } from 'react-icons/fi'
import { TiArrowLeftThick } from "react-icons/ti";

export function SignIn () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {signIn} = useAuth();

  function handleSignIn( ){
    signIn({ email, password });  

  }

  return (
    <Container>
      <Form>
      <Logo />
      
      <p>Every little piece of important information you'd certainly forget</p>
      <h3>Sign In</h3>

      <Input         
        placeholder="Email"
        type="email"
        icon={FiMail}
        onChange={e => setEmail(e.target.value)}/>
      <Input         
        placeholder="Senha"
        type="password"
        icon={FiLock}
        onChange={e => setPassword(e.target.value)}/>

      <Button 
      title='Entrar'
      onClick={handleSignIn}/>

      <ButtonText icon={TiArrowLeftThick}title="Return" />
      <Link to='/signUp'>
      <ButtonText icon={TiArrowLeftThick}title="Cadastrar" />
      </Link>
      </Form>
      <Background />
    </Container>

  )
}