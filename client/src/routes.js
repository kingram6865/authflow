import { Route } from 'react-router-dom';
import { UserInfoPage } from './pages/UserInfoPage';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';
import { PrivateRoute } from './auth/PrivateRoute';

export const publicRoutes = [
  {path: "/login", element: <LogInPage />},
  {path: "/signup", element: <SignUpPage />}
].map(props => <Route {...props} />)

export const privateRoutes = [
  {path: "/", element: <PrivateRoute><UserInfoPage /></PrivateRoute>}
].map(props => <Route {...props} />)

console.log(privateRoutes)
