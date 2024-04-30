import './App.css';
import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'

function App() {
  return (
    <div className="page-container">
      <Routes>
        {publicRoutes}
      </Routes>
    </div>
  );
}

export default App;
