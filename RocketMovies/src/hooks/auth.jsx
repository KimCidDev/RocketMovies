import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api'

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [ data, setData ] = useState({})

  async function signIn ({email, password}) {
    try {
    const response = await api.post("/sessions", { password, email }
  );
    const { token, user } = response.data;

    localStorage.setItem('@shreddedMind:user', JSON.stringify(user))
    localStorage.setItem('@shreddedMind:token', token)

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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

  async function updateProfile ({ user, avatarFile  }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch('/users/profile', fileUploadForm);
        
        user.avatar = response.data.avatar;
      }

    await api.put('/users', user );
    localStorage.setItem('@shreddedMind:user', JSON.stringify(user));
    setData({user, token: data.token});
    alert("Tu estás ligeiramente diferente, mas ainda és tu");
    } catch (error) {
      if (error.response) {
        console.log(error)
        alert(error.response.data.message)
      } else {
        alert("Não rolou essa atualização, vai ver o que aconteceu.")
      }
      
    }
  }

  function signOut () {
    localStorage.removeItem("@shreddedMind:user");
    localStorage.removeItem("shreddedMind:token");

    setData({})
}

  useEffect(() => {
    const token = localStorage.getItem('@shreddedMind:token');
    const user = localStorage.getItem('@shreddedMind:user');

    if (token && user) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setData({
      token,
      user: JSON.parse(user)
    })}
  }, [])



  return (
    <AuthContext.Provider
      value={{ 
        signIn,
        updateProfile,
        signOut, 
        user: data.user}}
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
