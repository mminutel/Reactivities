import { Fragment, useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponents';
import 'semantic-ui-css/semantic.min.css';



function App() {

  const {activityStore} = useStore();
  const {loadingInitial} = activityStore;
  
  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (loadingInitial) return <LoadingComponent content='Loading app...' />

  return (
    <Fragment>
      <NavBar />
      <Container style={{marginTop: "7em"}}>
        <ActivityDashboard />
      </Container>
    </Fragment>
  );
}

export default observer(App);
