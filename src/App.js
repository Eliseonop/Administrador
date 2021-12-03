import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navegacion from "./components/Navegacion";
import Dash from "./views/Dash";
import AuthProvider from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./views/Login";
import HomeView from "./views/HomeView";

function App() {
  return (
    <AuthProvider>
      <Router>
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dash" element={<PrivateRoute>
            <HomeView/>
          </PrivateRoute>}/>
        </Routes>
       
      </Router>
    </AuthProvider>
  );
}

export default App;
