import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import TodoLists from './pages/TodoLists';
import Profile from './pages/Profile';
import Keywords from './pages/Keywords';
import About from './pages/About';
import NotFound from './pages/NotFound';

import Header from './sections/Header';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/todos' component={TodoLists} />
            <Route path='/profile' component={Profile} />
            <Route path='/keywords' component={Keywords} />
            <Route path='/about' component={About} />
            <Route path='*' component={NotFound} />
          </Switch>
        </main>
        <footer>Footer</footer>
      </div>
    </Router>
  );
}

export default App;
