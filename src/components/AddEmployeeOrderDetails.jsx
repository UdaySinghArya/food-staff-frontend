import { FormGroup, FormControl, styled, InputLabel, Typography, Input, Button } from "@mui/material"
// import Container from "@mui/material";
import { useState } from "react";
import { orderDelivery } from "./server/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
    margin:5% auto 0 auto;
    & > div {
        margin-top:20px;
    }
`

const initialValues = {
    employeeId: '',
    deliveryTime: '',
    deliveryDay: '',
    deliveryDate: '',
    orderName: ''
}

const AddEmployeeOrderDetails = () => {

    const [user, setUser] = useState(initialValues);
    const {name,id}=user;
    const navigate=useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }
    const addUserDetails=async ()=>{
         await orderDelivery(user);
         navigate("/Staffmembers");
    }
    return (
        <Container>
            <Typography variant="h4"> Add User</Typography>
            <FormControl>
                <InputLabel>employeeId</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="employeeId" />
            </FormControl>
            <FormControl>
                <InputLabel>deliveryTime</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="deliveryTime" />
            </FormControl>
            <FormControl>
                <InputLabel>deliveryDay</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="deliveryDay" />
            </FormControl>
            <FormControl>
                <InputLabel>deliveryDate</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="deliveryDate" />
            </FormControl>
            <FormControl>
                <InputLabel>orderName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="orderName" />
            </FormControl>
            <FormControl>
                <Button  onClick={()=>addUserDetails()}   variant="contained">Add Order Details</Button>
            </FormControl>
        </Container >
    );
}
export default AddEmployeeOrderDetails;




