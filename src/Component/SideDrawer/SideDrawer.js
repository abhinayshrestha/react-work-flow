import React from 'react'
import { AnimatePresence } from "framer-motion";
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { DrawerContainer, CompanyInfo, AvatarContainer, Name, NavigationContainer, Helper } from './styles'
import Navigation from '../Navigation/Navigation'
import logo from '../../Assets/logo.jpg';

const drawerVariants = {
    end : { 
         width : 260,
         x: 0,
         transition : {
             type : 'tween',
             duration : 0.2
         }
     },
     exit : {
         width: 0,
         x: -260,
         transition : {
            type : 'tween',
            duration : 0.2
        }
     }
}

function SideDrawer({ showDrawer }) {
    return (
        <AnimatePresence >
                { showDrawer &&
                    <DrawerContainer variants={drawerVariants} initial='start' animate='end' exit='exit'>
                          <CompanyInfo>
                                <AvatarContainer>
                                     <img src={logo} alt=''/>  
                                </AvatarContainer>
                                <Name>
                                    <Typography variant='subtitle2' color='textPrimary' align='center' style={{ fontSize: '16px' }}>
                                         Kantipur City college
                                    </Typography>
                                </Name>   
                          </CompanyInfo>      
                          <Divider />
                          <NavigationContainer>
                                    <Navigation />
                          </NavigationContainer>  
                          <Divider /> 
                          <Helper>
                                <Typography variant='subtitle2' style={{ color: '#263238' }} gutterBottom>
                                         Need Help?
                                </Typography>
                                <Typography variant='body2' color='primary'>
                                         Check our Docs
                                </Typography>
                           </Helper>    
                    </DrawerContainer>
                }
        </AnimatePresence>  
    )
}

export default SideDrawer;

