import {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import {Container, Header, List} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, []);


  return (
    <Fragment>
      <NavBar />
      <Container style={{marginTop: "7em"}}>
        <ActivityDashboard activities={activities}></ActivityDashboard>
      </Container>
    </Fragment>
  );
}

export default App;
