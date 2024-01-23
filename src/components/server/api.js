
import axios from 'axios';

const URL=`http://localhost:8080/`;

export const addEmployee = async(user)=>{
    console.log(user)
    return await axios.post(`${URL}`,user);
}

export const getEmployee = async(id)=>{
    id=id || '';
    try{
        return await axios.get(`${URL}/${id}`)
    }catch(error){
        console.log("Error while calling getUserApi",error);
    }
}

export const deleteEmployee = async (id)=>{
    return await axios.delete(`${URL}/${id}`)
}

export const getEmployeeOrder =async(id)=>{
    id=id || '';
    try{
        return await axios.get(`${URL}/${id}`);
    }catch(error){
        console.log("Error while calling getEmployeeOrderApi",error);
    }
}

export const orderDelivery = async(user)=>{
    return await axios.post(URL,user);
}







  