import { Navigate } from 'react-router-dom';

function useAuth() {
  // This is a placeholder for the authentication logic.
  // It should be replaced with the actual authentication logic.

  const user = { loggedin: false }; // Example user object
  return user && user.loggedin
}

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
  // if (!user) return (<Navigate to="/login" />)
}

// export default PrivateRoute;
