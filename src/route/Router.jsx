import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import AuthTestPage from '../pages/AuthTestPage';
import Layout from './../layout/Layout';

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/main' element={<MainPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/auth-test' element={<AuthTestPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
