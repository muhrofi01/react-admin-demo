import { Card, CardContent } from '@mui/material';
import UserIcon from '@mui/icons-material/Group';
import {
    FilterList,
    FilterListItem,
    FilterLiveSearch,
    SavedQueriesList,
    useGetList,
} from 'react-admin';

const Aside = () => {

    return (
        <Card
            sx={{
                display: { xs: 'none', md: 'block' },
                order: -1,
                width: '15em',
                mr: 2,
                alignSelf: 'flex-start',
                mt: 9
            }}
        >
            <CardContent sx={{ pt: 1 }}>
                {/* <FilterLiveSearch /> */}
                <SavedQueriesList />

                <FilterList
                    label="Group"
                    icon={<UserIcon />}
                >
                </FilterList>

            </CardContent>
        </Card>
    );
};

export default Aside;
