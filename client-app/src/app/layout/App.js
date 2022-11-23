import {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import {Container, Header, List} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import {v4 as uuid} from 'uuid';

function App() {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(undefined);
  const [editMode, setEditMode] = useState(false);
  
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, []);

  function handleSelectedActivity(id) {
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelectedActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id) {
    id ? handleSelectedActivity(id) : handleCancelSelectedActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity) {
    activity.id ? 
      setActivities([...activities.filter(x => x.id != activity.id), activity])
      : setActivities([...activities, {...activity, id: uuid() }]);
      setEditMode(false);
      setSelectedActivity(activity);
  }

  function handleDeleteActivity(id) {
    setActivities([...activities.filter( x => x.id !== id) ]);
  }


  return (
    <Fragment>
      <NavBar openForm={handleFormOpen}/>
      <Container style={{marginTop: "7em"}}>
        <ActivityDashboard 
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectedActivity}
          cancelSelectedActivity={handleCancelSelectedActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </Fragment>
  );
}

export default App;
