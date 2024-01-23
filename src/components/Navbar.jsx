


import styled from '@emotion/styled';
import {AppBar,Toolbar, Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';


const Header=styled(AppBar)`
    background-color:#111111;
`

const Tabs=styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    color:white;
    text-decoration:none;
`
const Navbar=()=>{
    return(
        
           <Header position="static">
            <Toolbar>
                <Tabs to="/" >Home</Tabs>
                <Tabs to="/allEmployees">StafMembers</Tabs>
                <Tabs to="/totalOrders">TotalOrders</Tabs>
                <Tabs to="/addemployee">AddEmployee</Tabs>
                <Tabs to="/addemployeeorder">AddOrder</Tabs>
            </Toolbar>
            </Header> 
    )
}

export default Navbar;
