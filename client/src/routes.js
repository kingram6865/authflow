import { Route } from 'react-router-dom';
import { UserInfoPage } from './pages/UserInfoPage';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';
import { PrivateRoute } from './auth/PrivateRoute';
import { PleaseVerifyEmailPage } from './pages/PleaseVerifyEmailPage';
import { EmailVerificationLandingPage } from './pages/EmailVerificationLandingPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';

export const publicRoutes = [
  {path: "/login", element: <LogInPage />},
  {path: "/signup", element: <SignUpPage />},
  {path: "/please-verify", element: <PleaseVerifyEmailPage />},
  {path: "/verify-email/:verificationString", element: <EmailVerificationLandingPage />},
  {path: "/forgot-password", element: <ForgotPasswordPage />},
].map((props, index) => <Route key={index} {...props} />)

export const privateRoutes = [
  {path: "/*", element: <PrivateRoute><UserInfoPage /></PrivateRoute>}
  // {path: "/", element: <UserInfoPage />}
].map((props, index) => <Route key={index} {...props} />)
