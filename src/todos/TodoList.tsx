import * as React from 'react';
import { List, Datagrid, TextField, ReferenceField, BooleanField } from 'react-admin';
import { Box } from '@mui/material';
import Aside from './Aside';

const TodoList = () => {
    return (
        <Box display="flex">
            <Aside />
            <Box width="calc(100% - 16rem)">
                <List>
                    <Datagrid>
                        <ReferenceField source="userId" reference="users" />
                        <TextField source="id" />
                        <TextField source="title" />
                        <BooleanField source="completed" />
                    </Datagrid>
                </List>
            </Box>
        </Box>
    );
}

export default TodoList;