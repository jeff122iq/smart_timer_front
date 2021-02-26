import React from 'react';
import {Button, Container} from "@material-ui/core";

const AdminHome = () => {
    return (
        <Container style={{maxWidth: 1365}}>
        <div style={{marginTop: "200px", color: "white"}}>
                <h1>I am Admin!</h1>
                <h4>
                    Hey! Your role is an administrator, which means you have more opportunities on this site!
                </h4>
                <h4>
                    Your possibilities:
                </h4>
                    <ol>
                        <li>Add categories;</li>
                        <li>Add tags;</li>
                        <li>Add and edit cards;</li>
                    </ol>
            <h3>
                Use your opportunities wisely!
            </h3>
            </div>
        </Container>
    );
};

export default AdminHome;