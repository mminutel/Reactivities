import React from 'react';
import {Button, Container, Menu} from 'semantic-ui-react';

export default function NavBar({openForm}) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="assets/Images/logo.png" alt="logo" style={{marginRight: '10px'}} />
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item>
                    <Button positive content="Create Activity" onClick={openForm}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}