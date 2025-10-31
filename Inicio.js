import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Bem-vindo!</h2>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}