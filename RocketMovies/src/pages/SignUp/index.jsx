import { useState } from 'react';

import { Container, Background, Form } from './styles';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';

import { api } from '../../services/api';

import { FiMail, FiUserPlus, FiLock } from 'react-icons/fi';
import { TiArrowLeftThick } from "react-icons/ti";

export function SignUp () {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignUp () {
    if (!name || !email || !password) {
      return alert("Não deixe campos vazios, por favor.")      
    }

    api.post('/users', { name, email, password }).then(() => {
      alert("usuário cadastrado com sucesso! eee")
    }).catch( error => { 
      if (error.response) {
        alert(error.response.data.message)
    } else {
      alert("xis salada")
    }})
  }

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
        onChange={(e) => setEmail(e.target.value)}/>
      <Input         
        placeholder="Password"
        type="password"
        icon={FiLock}
        onChange={(e) => setPassword(e.target.value)}/>

      <Button title='Cadastrar' onClick={handleSignUp}/>

      <ButtonText icon={TiArrowLeftThick}title="Back to Login" />
      </Form>
    </Container>

  )
}