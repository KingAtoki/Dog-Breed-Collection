import React from 'react';
// Don't need Router for now, but adding it in case I need pages in the future
import { Router } from '@reach/router'
import { useDispatch } from 'react-redux'
import { getBreeds } from './redux/breeds/breeds.actions';
import Header from './components/Header'
import Home from './pages/HomePage'

function App() {
  const dispatch = useDispatch()
  dispatch(getBreeds())
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path='/' default />
      </Router>
    </div>
  );
}

export default App;
