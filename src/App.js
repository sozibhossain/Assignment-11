
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import AddUser from './components/AddUser/AddUser';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ManageServices from './components/ManageServices/ManageServices';
import NotFound from './components/NotFound/NotFound';
import PackagesDetails from './components/PackagesDetails/PackagesDetails';
import UpdeteUser from './components/UpdeteUser/UpdeteUser';
import Users from './components/Users/Users';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
          <Header/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <PrivateRoute path="/packgesDetails/:_id">
            <PackagesDetails></PackagesDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/users">
            <Users></Users>
          </Route>
          <Route path="/addUser">
            <AddUser></AddUser>
          </Route>
          <Route path="/updeteUser/:id">
            <UpdeteUser></UpdeteUser>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/manageServices">
            <ManageServices></ManageServices>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>

      
      
    </div>
  );
}

export default App;
