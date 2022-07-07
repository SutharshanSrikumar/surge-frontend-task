import './App.css';
import { routes } from "./routes";
import { useRoutes } from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
  const auth = useSelector((state) => state.auth);
  const isLoggedIn = auth?.accountType?.toUpperCase() || false;
  // need to change after api integration
  // const routing = useRoutes(routes(isLoggedIn));
  const routing = useRoutes(routes(true));

  return (
    <div className="App">
      {routing}
    </div>
  );
}

export default App;
