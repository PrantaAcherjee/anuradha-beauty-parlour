import { BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Home/Dashboard/Dashboard';
import HomePage from './Pages/Home/HomePage/HomePage';
import Login from './Pages/Home/Login/Login/Login';
import Register from './Pages/Home/Login/Register/Register';
import Services from './Pages/Home/Services/Services';
 

function App() {
  return (
    <div className="App">
     <AuthProvider>
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
        <Route path="/services">
         <Services></Services>  
        </Route>
        <Route path="/dashboard">
           <Dashboard></Dashboard>
        </Route>
      </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
