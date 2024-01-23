import { TableRow, Table, TableHead, TableBody, TableCell, styled, Button, FormGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import { getEmployee, deleteEmployee } from './server/api';
import { Link } from '@mui/material';
import {  FormControl} from "@mui/material"

const StyledTable = styled(Table)`
width:100%;
margin:50px 0 0 50px;
`

const Thead = styled(TableRow)`
    & > th {
        font-size :20px;
        background:#000000;
        color:$#FFFFFF;
    }
`;
const Trow = styled(TableRow)`
& > td{
 font-size:18px;   
}
`;
const Text = styled(TableCell)`
    color:white;
`

const Staffmembers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllEmployees();
    }, []);

    const getAllEmployees = async (id) => {
        let response = await getEmployee(id);
        setUsers(response?.data)
    }

    const deleteEmployeeDetail = async (id) => {
        await deleteEmployee(id);
        getAllEmployees();
    }
    return (
        <StyledTable>
            <TableHead>
                <Thead>
                    <Text>name</Text>
                    <Text>id</Text>
                </Thead>
            </TableHead>
            <TableBody>
                {users?.map((user) => (
                    <Trow key={user.id}>
                        <TableCell >{user.name}</TableCell>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>
                            {/* <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user.id}`}>Edit</Button> */}
                            {/* <Button color="secondary" variant="contained"  onClick={() => deleteEmployeeDetail(user.id)}>Delete</Button> */}
                        </TableCell>
                    </Trow>
                ))
                }
            </TableBody>
        </StyledTable>
    )
}
export default Staffmembers;