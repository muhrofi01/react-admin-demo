import * as React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin'

const UserList = () => {
    
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="username" />
                <EmailField source="email" />
                <TextField source="phone" />
                <UrlField source="website" />
                <TextField source="company.name" />
            </Datagrid>
        </List>
    );
}

export default UserList;