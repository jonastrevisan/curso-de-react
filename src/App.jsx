import { useState } from "react";
import InicioPage from "./pages/InicioPage";
import LoginPage from "./pages/Login";
function App() {
  const [logado] = useState(false);

  return <div>{logado ? <InicioPage /> : <LoginPage />}</div>;
}

export default App;
