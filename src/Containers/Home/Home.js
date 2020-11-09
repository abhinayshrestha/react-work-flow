import React, { useState } from 'react'
import { Container, RouteContainer  } from './style'
import TopMenuBar from '../../Component/Appbar/Topbar'
import SideDrawer from '../../Component/SideDrawer/SideDrawer';


function Home() {
    const [showDrawer, setShowDrawer] = useState(true); 

    const handleDrawer = () => {
        setShowDrawer(!showDrawer);
    }

    return (
        <div>
            <TopMenuBar handleDrawer = {handleDrawer}/>
            <Container>
                <SideDrawer showDrawer={showDrawer} />
                {/* <RouteContainer>
                        <Switch>
                            <Route path='/' component={Setting} />
                        </Switch>    
                </RouteContainer>     */}
            </Container>    
        </div>
    )
}

export default Home
