import React from 'react';
import {List, Grid} from 'semantic-ui-react';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

export default function ActivityDashboard({activities, selectedActivity, selectActivity, cancelSelectedActivity, editMode, openForm, closeForm, createOrEdit, deleteActivity, submitting}) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity} submitting={submitting}/>
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
                    <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit} submitting={submitting}/>
                }
            </Grid.Column>
        </Grid>
    )
}