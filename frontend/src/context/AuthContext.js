import { createContext, useEffect, useReducer } from "react";

//!Bu yapı sayesinde React uygulamamızda kullanıcı oturumlarını (login/logout) kolayca yönetebiliriz

//Başlangıç Durumu
const initial_state = {
  user:
    localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  loading: false,
  error: null,
};

//Kullanıcı bilgilerini saklayan bir context.
const AuthContext = createContext(initial_state);

//Kullanıcı giriş, çıkış veya hata durumlarını güncelleyen bir fonksiyon.
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true, 
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "REGISTER_SUCCESS":
      return {
        user: null,
        loading: false,
        error: null,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

//Bu context’i uygulamanın herhangi bir yerinde kullanabilmek için gereken sağlayıcı.
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
