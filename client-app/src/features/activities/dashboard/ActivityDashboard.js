import React, {useEffect} from 'react';
import ActivityList from './ActivityList';
import LoadingComponent from '../../../app/layout/LoadingComponents'
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Grid } from 'semantic-ui-react';

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadingInitial, activityRegistry, loadActivities} = activityStore;

    useEffect(() => {
      if(activityRegistry.size <= 1) loadActivities();
    }, [activityRegistry.size, loadActivities]);

    if (loadingInitial) return <LoadingComponent content='Loading app...' />

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <h2>Activity Filters</h2>
            </Grid.Column>
        </Grid>
    )
})