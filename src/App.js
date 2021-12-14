import { BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Home/Dashboard/Dashboard';
import HomePage from './Pages/Home/HomePage/HomePage';
import Order from './Pages/Home/Login/GetOrder/Order';
import Login from './Pages/Home/Login/Login/Login';
import PrivateRoute from './Pages/Home/Login/PrivateRoute/PrivateRoute';
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
        <PrivateRoute path="/order">
          <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
           <Dashboard></Dashboard>
        </PrivateRoute>
      </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
