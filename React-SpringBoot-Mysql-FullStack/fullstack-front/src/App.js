import './App.css';
import Nav from "./layout/Nav"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/adduser' element={<AddUser/>}/>
        <Route exact path='/edituser/:id' element={<EditUser/>}></Route>
        <Route exact path="/viewuser/:id" element={<ViewUser />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
