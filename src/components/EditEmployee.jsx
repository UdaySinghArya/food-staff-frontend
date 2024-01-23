import { FormGroup, FormControl, styled, InputLabel, Typography, Input, Button } from "@mui/material"
// import Container from "@mui/material";
import { useState ,useParam} from "react";
import { addUser ,getEmployee} from "./server/api";
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

const EditEmployee = () => {

    const [user, setUser] = useState(initialValues);
    const {name}=user;
    const {id}=useParam;


    const navigate=useNavigate();


    useEffect(()=>{
        loadEmployeeDetails();
    },[])


    const loadEmployeeDetails = async ()=>{
        const response = await getEmployee(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        // console.log(user)
    }

    return (
        <Container>
            <Typography variant="h4"> Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>id</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="id" value={id} />
            </FormControl>
            <FormControl>
                <Button  onClick={()=>addUserDetails()}   variant="contained">EditEmployee</Button>
            </FormControl>
        </Container >
    );
}
export default EditEmployee;




