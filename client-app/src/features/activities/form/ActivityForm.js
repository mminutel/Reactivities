import React, { useEffect, useState } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { useParams, useNavigate, Link } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import {v4 as uuid} from 'uuid';

export default observer(function ActivityForm() {
    const history = useNavigate();
    const {activityStore} = useStore();
    const {selectedActivity, createActivity, updateActivity, loadActivity, loadingInitial, loading} = activityStore;
    const {id} = useParams();

    const [activity, setActivity] = useState({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });
    
    useEffect(() => {
        if (id) {
            loadActivity(id).then((activity) => {
                setActivity(activity);
            });
        }
    }, [id, loadActivity]);

    function handleSubmit() {
        if (activity.id.length === 0) {
            let newActivity = {...activity, id: uuid()};
            createActivity(newActivity).then(() => history(`/activities/${newActivity.id}`));
        }
        else {
            updateActivity(activity).then(() => history(`/activities/${activity.id}`));
        }
       //updateActivity(activity) : createActivity(activity);
    }

    function handleInputChange(changeEvent) {
        const{name, value} = changeEvent.target;
        setActivity({...activity, [name]: value});
    }

    if (loadingInitial) return <LoadingComponent />

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleInputChange} />
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChange} />
                <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleInputChange} />
                <Form.Input type="Date" placeholder='Date' value={activity.date} name='date' onChange={handleInputChange} />
                <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleInputChange} />
                <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handleInputChange} />
                <Button floated='right' positive type='submit' content='Submit' loading={loading}></Button>
                <Button floated='right' type='button' content='Cancel' as={Link} to='/activities' ></Button>
            </Form>
        </Segment>
    )
})