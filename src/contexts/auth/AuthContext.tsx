import { createContext } from 'react'
import { User } from "../../types/User"

export type AuthContextType = {
    user: User | null;
    loading: boolean; 
    signin: (email: string, password: string) => Promise<any>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true, 
    signin: async (email: string, password: string) => {},
    signout: () => {}
});
