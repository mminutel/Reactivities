import logo from './logo.svg';
import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import {Header, List} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
       console.log(response.data);
    })
  }, []);


  return (
    <div className="App">
      <Header as = 'h2' icon = 'users' content = 'Reactivities' />
      <List>
        {activities.map(activity => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
