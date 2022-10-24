import * as React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField, TextInput, ReferenceInput } from 'react-admin'
import { Box } from '@mui/material';
import Aside from './Aside';

const userFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];

const UserList = () => {
    return (
        <Box display="flex">
            <Aside />
            <Box width="calc(100% - 16em)" >
                <List>
                    <Datagrid>
                        <TextField source="id" />
                        <TextField source="name" />
                        <TextField source="username" />
                        <EmailField source="email" />
                    </Datagrid>
                </List>
            </Box>
        </Box>
    );
}

export default UserList;