import React from 'react';
import { Item, Segment, Button, Label } from 'semantic-ui-react';

export default function ActivityList({activities, selectActivity, deleteActivity}) {
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
                                <Button onClick={() => (deleteActivity(activity.id))} floated='right' content='Delete' color='red' />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}