import React, { useMemo, CSSProperties } from 'react';
import { useGetList } from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';
import { subDays, startOfDay } from 'date-fns';


import CardWithIcon from './CardWithIcon';
import UserIcon from '@mui/icons-material/Group';
import TodoIcon from '@mui/icons-material/List';

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Spacer = () => <span style={{ width: '1em' }} />;
const VerticalSpacer = () => <span style={{ height: '1em' }} />;

const Dashboard = () => {
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('lg')
    );

    const { data: users } = useGetList('users');
    const { data: todos } = useGetList('todos', { sort: { field: 'id', order: 'DESC' } });

    let countUsers  = users?.length;
    let countTodos  = todos?.length;
    return isXSmall ? (
        <div>
            <div style={styles.flexColumn as CSSProperties}>
                <VerticalSpacer />
                
                <CardWithIcon
                    to="/users"
                    icon={UserIcon}
                    title={'Users'}
                    subtitle={countUsers}
                />

                <VerticalSpacer />

                <CardWithIcon
                    to="/todos"
                    icon={TodoIcon}
                    title={'Todos'}
                    subtitle={countTodos}
                />

                {/* <MonthlyRevenue value={revenue} />
                <VerticalSpacer />
                <NbNewOrders value={nbNewOrders} />
                <VerticalSpacer />
                <PendingOrders orders={pendingOrders} /> */}
            </div>
        </div>
    ) : isSmall ? (
        <div style={styles.flexColumn as CSSProperties}>
            <VerticalSpacer />
            
            <div style={styles.flex}>
                <CardWithIcon
                    to="/users"
                    icon={UserIcon}
                    title={'Users'}
                    subtitle={countUsers}
                />

                <Spacer />

                
                <CardWithIcon
                    to="/todos"
                    icon={TodoIcon}
                    title={'Todos'}
                    subtitle={countTodos}
                />
            </div>

            {/* <div style={styles.flex}>
                <MonthlyRevenue value={revenue} />
                <Spacer />
                <NbNewOrders value={nbNewOrders} />
            </div>
            <div style={styles.singleCol}>
                <OrderChart orders={recentOrders} />
            </div>
            <div style={styles.singleCol}>
                <PendingOrders orders={pendingOrders} />
            </div> */}
            
        </div>
    ) : (
        <>
            <VerticalSpacer />
            
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <div style={styles.flex}>
                        <CardWithIcon
                            to="/users"
                            icon={UserIcon}
                            title={'Users'}
                            subtitle={countUsers}
                        />

                        <Spacer />

                        
                        <CardWithIcon
                            to="/todos"
                            icon={TodoIcon}
                            title={'Todos'}
                            subtitle={countTodos}
                        />
                    </div>
                </div>
                <div style={styles.rightCol}>
                </div>
            </div>
        
        </>
    );
};

export default Dashboard;
