import { createContext } from "react";
import { Payload } from "../../types/Payload";


export type AuthContextType = {
  user: Payload | null;
  loading: boolean;
  signin: (email: string, password: string) => Promise<any>;
  signinWithGoogle: (idToken: string) => Promise<any>;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signin: async (email: string, password: string) => {},
  signinWithGoogle: async (idToken: string) => {},
  signout: () => {},
});
