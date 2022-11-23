import React, {useState} from 'react';
import { Item, Segment, Button, Label } from 'semantic-ui-react';

export default function ActivityList({activities, selectActivity, deleteActivity, submitting}) {
    const [target, setTarget] = useState("");

    function handleActivityDelete(e, id) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return(
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => (selectActivity(activity.id))} floated='right' content='View' color='blue' />
                                <Button 
                                    name={activity.id}
                                    onClick={(e) => (handleActivityDelete(e, activity.id))} 
                                    floated='right' 
                                    content='Delete' 
                                    color='red' 
                                    loading={submitting && target === activity.id}
                                />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}