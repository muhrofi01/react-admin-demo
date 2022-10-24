import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useRecordContext } from 'react-admin';

export const CompletedField = ({ source }: { source: any }) => {
    const record = useRecordContext();
    const isCompleted = record[source];
    return (
        <>
        {isCompleted ? (
            <CheckIcon />
        ) : (
            <ClearIcon />
        )}
        </>
    );
}
