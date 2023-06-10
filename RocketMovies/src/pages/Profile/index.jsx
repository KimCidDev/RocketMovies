import { Container, Avatar, Form } from './styles';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';

import {  FiMail, FiLock, FiUserPlus, FiCamera } from 'react-icons/fi'
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from 'react-router-dom';

export function Profile () {
  return (
    <Container>
      <header>
        <Link to='/'>
        <ButtonText icon={TiArrowLeftThick}title="Voltar"/>
        </Link>
      </header>


      <Form>
      <Avatar>
        <img src="https://github.com/kimciddev.png" alt="User Profile picture" />
        <label htmlFor="avatar">
          <FiCamera />
          <input id="avatar" type="file" />
        </label>
      </Avatar>
      
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


        
        <button> <Link to='/'>Pronto!</Link></button>
        
        </Form>

    </Container>
  )
}