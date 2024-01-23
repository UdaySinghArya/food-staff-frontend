import { TableRow, Table, TableHead, TableBody, TableCell, styled, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { getEmployee ,deleteEmployee} from './server/api';
import {Link} from '@mui/material';


const StyledTable = styled(Table)`
width:90%;
margin:50px 0 0 50px;
`

const Thead = styled (TableRow)`
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


const TotalOrders = () => {

    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllEmployees();
    },[]);

    const getAllEmployees = async (id) => {
        let response = await getEmployee(id);
        setUsers(response?.data)
    }

    const deleteEmployeeDetail = async(id)=>{
        await deleteEmployee(id);
        getAllEmployees();
    }
    return (
        <StyledTable>
            <TableHead>
                <Thead>
                    <Text>employeeId</Text>
                    <Text>deliveryTime</Text>
                    <Text>deliveryDay</Text>
                    <Text>deliveryDate</Text>
                    <Text>orderName</Text>
                </Thead>
            </TableHead>
            <TableBody>
                {users?.map((user) => (
                <Trow key={user.id}>
                       <TableCell>{user.employeeId}</TableCell>
                    <TableCell>{user.deliveryTime}</TableCell>
                    <TableCell>{user.deliveryDay}</TableCell>
                    <TableCell>{user.deliveryDate}</TableCell>
                    <TableCell>{user.orderName}</TableCell>
                    <TableCell>
                        <Button color="primary" variant="constined" style={{ marginRight: 10 }} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                        <Button color="secondary" variant="constined"  onClick={() => deleteEmployeeDetail(user.id)}>Delete</Button>
                    </TableCell>
                </Trow>
                ))
           }
            </TableBody>
        </StyledTable>
    )
}
export default TotalOrders;