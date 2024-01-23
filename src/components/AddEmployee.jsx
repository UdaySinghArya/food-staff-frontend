import { FormGroup, FormControl, styled, InputLabel, Typography, Input, Button } from "@mui/material"
// import Container from "@mui/material";
import { useState } from "react";
import { addEmployee } from "./server/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
    margin:5% auto 0 auto;
    & > div {
        margin-top:20px;
    }
`

const initialValues = {
    name: '',
    id: ''
}

const AddEmployee = () => {

    const [user, setUser] = useState(initialValues);
    const {name,id}=user;
    const navigate=useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }
    const addUserDetails=async ()=>{
         await addEmployee(user);
         navigate("/Staffmembers");
    }
    return (
        <Container>
            <Typography variant="h4"> Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>id</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="id" />
            </FormControl>
            <FormControl>
                <Button  onClick={()=>addUserDetails()}   variant="contained">Add Employee</Button>
            </FormControl>
        </Container >
    );
}
export default AddEmployee;




