import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './sections';
import { About, Keywords, Login, Profile, NotFound, TodoLists } from './pages';

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
