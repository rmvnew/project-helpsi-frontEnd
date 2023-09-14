import { useContext } from "react";
import Sidebar from "../../components/Layout/Sidebar/Psychologist";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { ContainerWrapper, HeaderWrapper } from "../../components/Layout/Container/style";



const Home = () => {

  const auth = useContext(AuthContext);
  return (
    <div>
      <HeaderWrapper />
      <Sidebar />
      <ContainerWrapper><h1>Olá, {auth.user?.name}</h1></ContainerWrapper>
    </div>
  );
};

export default Home;
