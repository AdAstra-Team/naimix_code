import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, useNavigate, redirect } from 'react-router-dom';

function App() {

  const auth = useSelector((state) => state.auth);

  return (
    <div className="App">
      <Router>
          <Routes>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
