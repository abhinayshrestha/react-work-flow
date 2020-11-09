import React from 'react'
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { StyledList, StyledNavLink } from './styles'

function Navigation() {
    return (
        <div>
            <StyledList component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" disableSticky disableGutters style={{ fontSize :'0.915rem' }}>
                        Reports
                    </ListSubheader>
                }
                    >
                    <StyledNavLink to='/' activeClassName='activeNav' exact>
                            <ListItem button>
                                    <ListItemIcon>
                                        </ListItemIcon>
                                    <ListItemText primary="Dashboard" />
                            </ListItem>
                    </StyledNavLink>
                    <StyledNavLink to='/' activeClassName='activeNav' exact>
                            <ListItem button>
                                    <ListItemIcon>
                                        </ListItemIcon>
                                    <ListItemText primary="Status" />
                            </ListItem>
                    </StyledNavLink>
                    <StyledNavLink to='/' activeClassName='activeNav' exact>
                            <ListItem button>
                                    <ListItemIcon>
                                        </ListItemIcon>
                                    <ListItemText primary="Setting" />
                            </ListItem>
                    </StyledNavLink>
                </StyledList>
            </div>
    )
}

export default Navigation
