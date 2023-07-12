import { Route,Switch } from "react-router-dom";
import Home from './container/home/home'
import About from './container/about/about'
import { GlobalProvider } from "./context/globalContext/globalContext";
import './App.css';

function App() {
  return (
    <div>
      <GlobalProvider>
      <Switch>
      <Route path="/About" component={About} />
      <Route path="/" component={Home}/>
      </Switch>
      </GlobalProvider>
    </div>
  );
}

export default App;
