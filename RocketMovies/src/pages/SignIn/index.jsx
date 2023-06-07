import { Container, BiggerLogo } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';


import {  FiMail, FiUserPlus } from 'react-icons/fi'

export function SignIn () {
  return (
    <Container>
      <BiggerLogo />
      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti hic optio, a repellat non modi rem fuga.</p>
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

      <ButtonText>
        Voltar
      </ButtonText>
    </Container>

  )
}