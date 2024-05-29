/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import { SignInRequest, SignInResponse } from "../../interfaces/Auth";
import {
  useSignInMutation,
} from "../../api/slices/authSlice";
import { User } from "../../schemas/models/user";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (data: SignInRequest) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [signIn] = useSignInMutation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const user: User = {
        userName: decodedToken.userName,
        name: decodedToken.name,
        lastName: decodedToken.lastName,
        token,
        mail: decodedToken.mail,
      }
      setUser(user);
    }
  }, []);

  const login = async (data: SignInRequest) => {
    setIsLoading(true);
    try {
      const response: SignInResponse = await signIn(data).unwrap();
      const decodedToken: any = jwtDecode(response.token);
      const user: User = {
        userName: decodedToken.userName,
        name: decodedToken.name,
        lastName: decodedToken.lastName,
        token: response.token,
        mail: decodedToken.mail,
      };

      localStorage.setItem('token', response.token);
      localStorage.setItem('email', user.mail);
      localStorage.setItem('username', user.userName);
      localStorage.setItem('name', user.name);
      localStorage.setItem('lastName', user.lastName);

      setUser(user);
      navigate("/");
    } catch (error) {
      console.error("Failed to login", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("username");
      localStorage.removeItem("name");
      localStorage.removeItem("lastName");
      navigate("/Login");
    } catch (error) {
      console.error("Failed to logout", error);
    } finally {
      setIsLoading(false);
    }
  };

  const value = { user, isLoading, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
