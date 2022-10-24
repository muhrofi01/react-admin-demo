import * as React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';
import { CompletedField } from './CustomField';

const TodoList = () => {
    return (
        <List>
            <Datagrid>
                <ReferenceField source="userId" reference="users" />
                <TextField source="id" />
                <TextField source="title" />
                <CompletedField source="completed" />
            </Datagrid>
        </List>
    );
}

export default TodoList;