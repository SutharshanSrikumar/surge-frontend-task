import './App.css';
import { routes } from "./routes";
import { useRoutes } from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
  const auth = useSelector((state) => state.auth);
  const isLoggedIn = auth?.accountType?.toUpperCase() || false;
  const routing = useRoutes(routes(isLoggedIn));

  return (
    <div className="App">
      {routing}
    </div>
  );
}

export default App;
