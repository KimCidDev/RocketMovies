import { Container, Background, Form } from './styles';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo'


import { FiMail, FiUserPlus } from 'react-icons/fi'
import { TiArrowLeftThick } from "react-icons/ti";

export function SignIn () {
  return (
    <Container>
      <Form>
      <Logo />
      
      <p>Every little piece of important information you'd certainly forget</p>
      <h3> Entre em seu perfil</h3>

      <Input         
        placeholder="Nome"
        type="text"
        icon={FiUserPlus}/>
      <Input         
        placeholder="Email"
        type="email"
        icon={FiMail}/>

      <Button title='Entrar'/>

      <ButtonText icon={TiArrowLeftThick}title="Voltar" />
      </Form>
      <Background />
    </Container>

  )
}