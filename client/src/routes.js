import { Route } from 'react-router-dom';
import { UserInfoPage } from './pages/UserInfoPage';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';

export const publicRoutes = [
  {path: "/", element: <UserInfoPage />},
  {path: "/login", element: <LogInPage />},
  {path: "/signup", element: <SignUpPage />}
].map(props => <Route {...props} />)
