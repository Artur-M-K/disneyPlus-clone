import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {selectUserName} from './features/user/userSlice';
import {useSelector} from 'react-redux';

function App() {
  const userName = useSelector(selectUserName);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {!userName ?
            <Route path="/login"><Login /></Route> :
           <>
            <Route path="/" exact><Home /></Route>
            <Route path="/detail/:id"><Detail /></Route>
            </>
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
