import React from 'react'
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import LibraryBooksSharpIcon from '@mui/icons-material/LibraryBooksSharp';
import ForumSharpIcon from '@mui/icons-material/ForumSharp';
import LogoutIcon from '@mui/icons-material/Logout';
import store from '../features/storage';
import { logout } from '../features/admin';


export default function SidePanel(props) {
    
    const navigate = useNavigate();
    // const worker = store.getState().store.worker

    return (
        <Paper sx={{ flex: '0 0 auto', position: 'static', height: '100%', width: '275px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} elevation={3}>
            <List sx={{ mt: 6 }}>
                {/* dashboard */}
                <ListItem sx={{ mt: 1 }}>
                    <ListItemButton component={Link} to='/admin'>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary='Dashboard' />
                    </ListItemButton>
                </ListItem>

                {/* users */}
                <ListItem sx={{ mt: 1 }}>
                    <ListItemButton component={Link} to='/adminUsers'>
                        <ListItemIcon>
                            <PeopleAltSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary='Users' />
                    </ListItemButton>
                </ListItem>

                {/* books */}
                <ListItem sx={{ mt: 1 }}>
                    <ListItemButton component={Link} to='/adminBooks'>
                        <ListItemIcon>
                            <LibraryBooksSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary='Books' />
                    </ListItemButton>
                </ListItem>

                {/* community */}
                <ListItem sx={{ mt: 1 }}>
                    <ListItemButton component={Link} to='/adminCommunity'>
                        <ListItemIcon>
                            <ForumSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary='Community' />
                    </ListItemButton>
                </ListItem>
            </List>

            {/* logout */}
            <Button startIcon={<LogoutIcon />} sx={{ width: '100%', mb: 12, textTransform: 'capitalize', letterSpacing: '.15rem', color: 'red' }}
                onClick={() => {
                    store.dispatch(logout())
                    navigate('/')
                    localStorage.clear()
            }}>Logout</Button>
        </Paper>
    )
}
