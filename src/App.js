import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register'
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import ServiceProvider from './contexts/ServiceProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Book from './Pages/Book/Book';
import About from './Pages/About/About';
import Footer from './Pages/Home/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import Services from './Pages/Home/Services/Services';
import ManageService from './Pages/ManageService/ManageService';
import AddService from './Pages/AddService/AddService';
import MyOrders from './Pages/MyOrders/MyOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ServiceProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
             <PrivateRoute path="/book/:serviceId"> 
              <Book></Book>
              </PrivateRoute> 
              <PrivateRoute path="/addService"> 
                <AddService></AddService>
              </PrivateRoute> 
              <PrivateRoute path="/manageService"> 
              <ManageService></ManageService>
              </PrivateRoute> 
              <PrivateRoute path="/myOrders"> 
              <MyOrders></MyOrders>
              </PrivateRoute> 
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </ServiceProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
