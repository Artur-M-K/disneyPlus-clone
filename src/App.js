import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {selectUserName} from './features/user/userSlice';
import {useSelector} from 'react-redux';

function App() {
  const userName = useSelector(selectUserName);
  console.log(userName)
  return (
    <div className="App">
      <Router>
        <Header />
            <Route exact path="/" render={() => {
              return (
                !userName ? <Redirect to="/login" /> 
                :
                <Redirect to="/" /> )
                }}
            />
           
            <Route path="/" exact><Home /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/detail/:id"><Detail /></Route>
      </Router>
    </div>
  );
}

export default App;
