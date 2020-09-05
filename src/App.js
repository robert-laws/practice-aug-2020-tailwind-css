import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { Header } from './sections';
import { About, Keywords, Login, Profile, NotFound, TodoLists } from './pages';
import AuthContext from './context/auth/authContext';

function App() {
  const authContext = useContext(AuthContext);
  const { isLoading, user } = authContext;

  return (
    <Router>
      <div className='App'>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Login} />
            <ProtectedRoute
              isAuthed={!!user}
              isLoading={isLoading}
              path='/todos'
              exact
            >
              <TodoLists />
            </ProtectedRoute>
            <ProtectedRoute
              isAuthed={!!user}
              isLoading={isLoading}
              path='/profile'
              exact
            >
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute
              isAuthed={!!user}
              isLoading={isLoading}
              path='/keywords'
              exact
            >
              <Keywords />
            </ProtectedRoute>
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
