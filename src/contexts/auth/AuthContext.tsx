import { createContext } from 'react'
import { User } from "../../types/User"

export type AuthContextType = {
    user: User | null;
    loading: boolean;  // Adicionado o campo de carregamento (loading)
    signin: (email: string, password: string) => Promise<any>;
    signout: () => void;
}

// Aqui fornecemos um valor padrão para o contexto
export const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,  // Valor inicial para loading definido como true
    signin: async (email: string, password: string) => {},
    signout: () => {}
});
