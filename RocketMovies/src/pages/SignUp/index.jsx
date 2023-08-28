import { useState } from 'react';

import { Container, Background, Form } from './styles';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo'


import { FiMail, FiUserPlus, FiLock } from 'react-icons/fi'
import { TiArrowLeftThick } from "react-icons/ti";

export function SignUp () {
  const [name, setName] = useState("")
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Container>      
      <Background />
      <Form>
      <Logo />
      
      <p>Every little piece of important information you'd certainly forget</p>
      <h3>Sign Up</h3>

      <Input         
        placeholder="Nome"
        type="text"
        icon={FiUserPlus}
        onChange={(e) => setName(e.target.value)}/>
      <Input         
        placeholder="Email"
        type="email"
        icon={FiMail}
        onChange={(e) => setName(e.target.value)}/>
      <Input         
        placeholder="Password"
        type="password"
        icon={FiLock}
        onChange={(e) => setName(e.target.value)}/>

      <Button title='Entrar'/>

      <ButtonText icon={TiArrowLeftThick}title="Back to Login" />
      </Form>
    </Container>

  )
}