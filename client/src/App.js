import './App.css';
import { Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';

function App() {
  return (
    <div className="page-container">
      <Routes>
        {privateRoutes}
        {publicRoutes}
      </Routes>
    </div>
  );
}

export default App;
