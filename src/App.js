import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only runs once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the usr just logged in / the user was logged in
        dispatch({ type: 'SET_USER', user: authUser });
      } else {
        // the user ist logged out
        dispatch({ type: 'SET_USER', user: null });
      }
    });
  }, []);

  return (
    // BEM Naming Convention
    <Router>
      <div className='App'>
        <Routes>
          <Route
            path='/login'
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path='/checkout'
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          {/* Default route */}
          <Route
            path='/'
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
