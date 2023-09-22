import { AuthContext, useContext } from "../common/utils/imports/signin";
import {
  toast,
  useNavigate,
} from "../common/utils/imports/signin";

export const useGoogleLogin = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSuccess = async (response: any) => {
    if (response.tokenId) {
      const result = await auth.signinWithGoogle(response.tokenId);
      if (result && result.status) {
        navigate("/");
      } else {
        toast.error(result.message || "Erro ao fazer login com o Google.");
      }
    }
  };

  const handleGoogleFailure = (error: any) => {
    console.error("Erro no login com o Google:", error);
  };

  return {
    handleGoogleSuccess,
    handleGoogleFailure,
  };
};
