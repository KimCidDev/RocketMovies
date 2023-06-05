import { Container, Avatar } from './styles';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';

import {  FiMail, FiLock, FiUserPlus, FiCamera } from 'react-icons/fi'
import { TiArrowLeftThick } from "react-icons/ti";

export function Profile () {
  return (
    <Container>
      <header>
        <ButtonText icon={TiArrowLeftThick}title="Voltar"/>
      </header>
      <Avatar>
        <img src="https://github.com/kimciddev.png" alt="User Profile picture" />
        <div>
          <FiCamera />
        </div>
      </Avatar>

      <form>
      <Input         
        placeholder="Nome"
        type="text"
        icon={FiUserPlus}/>
      <Input         
        placeholder="Email"
        type="email"
        icon={FiMail}/>
      <Input         
        placeholder="Senha Atual"
        type="password"
        icon={FiLock}
        />
      <Input         
        placeholder="Nova Senha"
        type="password"
        icon={FiLock}/>

        <button>Pronto!</button>
        </form>

    </Container>
  )
}