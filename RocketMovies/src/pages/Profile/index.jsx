import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Container, Avatar, Form } from './styles';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';

import {  FiMail, FiLock, FiUserPlus, FiCamera } from 'react-icons/fi'
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from 'react-router-dom';

export function Profile () {
  const { user } = useAuth();

  const [ name, setName ] = useState(user.name)
  const [ email, setEmail ] = useState(user.email)
  const [ passwordOld, setPasswordOld ] = useState()
  const [ passwordNew, setPasswordNew ] = useState()

  async function handleUpdate () {
    try {
    api.post('/notes', (user) => {
        name
      })
    } catch (error) {
      console.log(error)
    }
  }
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
        icon={FiUserPlus}
        value={name}
        onChange={e => setName(e.target.value)}
        />
      <Input         
        placeholder="Email"
        type="email"
        icon={FiMail}
        value={email}
        onChange={e => setEmail(e.target.value)}/>
      <Input         
        placeholder="Senha Atual"
        type="password"
        icon={FiLock}
        onChange={e => setPasswordOld(e.target.value)}
        />
      <Input         
        placeholder="Nova Senha"
        type="password"
        icon={FiLock}
        onChange={e => setPasswordNew(e.target.value)}
        />


        
        <button> <Link to='/'>Pronto!</Link></button>
        
        </Form>

    </Container>
  )
}