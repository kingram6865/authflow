import './App.css';
import { Routes, Route } from 'react-router-dom'
import { LogInPage } from './pages/LogInPage'
import { UserInfoPage } from './pages/UserInfoPage'
import { SignUpPage } from './pages/SignUpPage'


function App() {
  return (
    <div className="page-container">
      <Routes>
        <Route path="/" element={<UserInfoPage />}/>
        <Route path="/login" element={<LogInPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
      </Routes>
    </div>
  );
}

export default App;
