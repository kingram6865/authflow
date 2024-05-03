import { Navigate, Routes, Route } from 'react-router-dom';
import { useUser } from '../auth/useUser'
import { UserInfoPage } from '../pages/UserInfoPage';

// function useAuth() {
//   // This is a placeholder for the authentication logic.
//   // It should be replaced with the actual authentication logic.

//   const user = { loggedin: false }; // Example user object
//   return user && user.loggedin
// }

export const PrivateRoute = ({ children }) => {
  const user = useUser();

  if (!user) return <Navigate to="/login" />
  console.log(user)
  // return <Routes><Route {...children} /></Routes>
  // const isAuthenticated = useAuth();
  // return isAuthenticated ? children : <Navigate to="/login" />;
  return <Routes><Route path="/" element={<UserInfoPage />}></Route></Routes>
}
