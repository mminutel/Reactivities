import React from 'react';
import {List, Grid} from 'semantic-ui-react';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

export default function ActivityDashboard({activities, selectedActivity, selectActivity, cancelSelectedActivity, editMode, openForm, closeForm, createOrEdit}) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {
                    selectedActivity && !editMode &&
                    <ActivityDetails 
                        activity={selectedActivity} 
                        cancelSelectedActivity={cancelSelectedActivity}
                        openForm={openForm}
                    />
                }
                {
                    editMode &&
                    <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit}/>
                }
            </Grid.Column>
        </Grid>
    )
}