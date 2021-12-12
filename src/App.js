import { BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home/HomePage/HomePage';
import Login from './Pages/Home/Login/Login/Login';
import Register from './Pages/Home/Login/Register/Register';
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Switch>
        <Route exact path="/">
        <HomePage></HomePage>
        </Route>
        <Route path="/home">
        <HomePage></HomePage>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
