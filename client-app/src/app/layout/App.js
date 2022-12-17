import { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Route, Routes, useRoutes, useLocation } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import TestErrors from '../../features/errors/TestError';
import {ToastContainer} from 'react-toastify';
import NotFound from '../../features/errors/NotFound';

function App() {

  const location = useLocation();

  return (
    <Fragment>
      <ToastContainer position='bottom-right' hideProgressBar></ToastContainer>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/activities' element={<ActivityDashboard />} />
          <Route path='/activities/:id' element={<ActivityDetails />} />
          {["/createActivity", "/manage/:id"].map((path) => {
            return (
              <Route key={location.key} path={path} element={<ActivityForm key={location.key} />} />
            );
          })}
          <Route path='/errors' element={<TestErrors />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </Fragment>
  );
}


export default observer(App);
