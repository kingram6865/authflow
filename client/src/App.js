import './App.css';
import { Routes, Route } from 'react-router-dom'
import { UserInfoPage } from './pages/UserInfoPage'

function App() {
  return (
    <div class="page-container">
      <Routes>
        <Route path="/" element={<UserInfoPage />}/>
      </Routes>
    </div>
  );
}

export default App;
