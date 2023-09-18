import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Container, Avatar, Form } from './styles';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';

import {  FiMail, FiLock, FiUserPlus, FiCamera } from 'react-icons/fi'
import { TiArrowLeftThick } from "react-icons/ti";
import { Link, useNavigate } from 'react-router-dom';

export function Profile () {
  const { user, updateProfile } = useAuth();

  const [ name, setName ] = useState(user.name);
  const [ email, setEmail ] = useState(user.email);
  const [ passwordOld, setPasswordOld ] = useState("");
  const [ passwordNew, setPasswordNew ] = useState("");
  const avatarUrl = user.avatar ? new URL(`${api.defaults.baseURL}/files/${user.avatar}`).pathname : avatarPlaceholder;


  const [ avatar, setAvatar ] = useState(avatarUrl);
  const [ avatarFile, setAvatarFile ] = useState(user.avatar);


  async function handleUpdate () {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld      
    }

    await updateProfile ({ user, avatarFile })

    
    };

    async function handleAvatarUpdate (event) {
      // 'file' é o arquivo escolhido pelo usuário.
      const file = event.target.files[0];
      
      console.log('Selected file:', file)

      if (file) {
        
        // Rest of your code...
        setAvatarFile(file);
        const imgPreview = URL.createObjectURL(file);

        setAvatar(imgPreview);
      }
      
    };



    useEffect(() => {
      setAvatar((prev) => user.avatar ? avatarUrl : prev);
    }, [user.avatar, avatarUrl]);

  return (
    <Container>
      <header>
        <Link to='/'>
        <ButtonText icon={TiArrowLeftThick}title="Voltar"/>
        </Link>
      </header>


      <Form>
      <Avatar>
          <img src={avatar}
           alt="User Profile picture xis salada" />
        <label htmlFor="avatar">
          <FiCamera />
          <input 
          id="avatar"
          name="avatar"
          type="file" 
          onChange={handleAvatarUpdate}/>
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


        
        <button onClick={handleUpdate}> Pronto!</button>
        
        </Form>

    </Container>
  )
}