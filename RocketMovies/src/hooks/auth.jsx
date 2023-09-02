import { createContext, useContext } from 'react';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider
      value={{
        email: 'cid.kim@gmail.com',
        email2: "cid.kim@hotmail.com",
        cor: 'azul',
        dev: false
      }}
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
