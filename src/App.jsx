import Login from "./components/Login";
import Dashboard from './components/Dashboard';
import "./App.css";

function App() {
  const currentPath = window.location.pathname;

  let componentToRender;
  if (currentPath === '/') {
    componentToRender = <Login />;
  } else if (currentPath === '/dashboard') {
    componentToRender = <Dashboard />;
  }

  return (
    <div className="App">
      {componentToRender}
    </div>
  );
}

export default App;
