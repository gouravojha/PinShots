import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomNav from "./components/BottomNav";
import Discover from "./components/Discover";
import Home from "./components/Home";
import {Redirect, Route,Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider} from 'react-query'
import About from './components/About';

const queryClient = new QueryClient()
function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Switch>
      <Route exact path='/' component = {Home} />
      <Route exact path='/discover' component = {Discover} />
      <Route exact path="/about" component={About}/>
      <Redirect to="/"></Redirect>
    </Switch>
    <BottomNav/>
    </QueryClientProvider>
    </>
  );
}

export default App;
