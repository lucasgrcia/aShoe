import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import LoginForm from "./pages/login/LoginForm";

function App() {
  return (
    <div className="App">
      <button className="btn btn-danger">Hola</button>
      <LoginForm />
    </div>
  );
}

export default App;