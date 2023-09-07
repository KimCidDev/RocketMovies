import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api'

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [ data, setData ] = useState({})

  async function praiseOrNot () {
  const min = 1;
  const max = 100;
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

  if (randomInt % 2 === 0) {
  return console.log("Vai que é tua, meu guri. Vai te dar um carinho");
} else {
  return console.log("Tu só estudou, tu não ganha nada a mais por fazer o óbvio")
}
};

  async function signIn ({email, password}) {
    try {
    const response = await api.post("/sessions", { password, email }
  );
    const { token, user } = response.data;

    localStorage.setItem('@shreddedMind:user', JSON.stringify(user))
    localStorage.setItem('@shreddedMind:token', token)

    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({user, token})
    
    console.log({user, token})
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message) 
      } else {
        alert("Não foi possível iniciar nova sessão")
      }

    }
  }

  

  useEffect(() => {
    const token = localStorage.getItem('@shreddedMind:token');
    const user = localStorage.getItem('@shreddedMind:user');

    if (token && user) {
    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({
      token,
      user: JSON.parse(user)
    })}
  }, [])



  return (
    <AuthContext.Provider
      value={{praiseOrNot, signIn, user: data.user}}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
