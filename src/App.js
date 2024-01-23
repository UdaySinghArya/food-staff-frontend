
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import StafMembers from './components/Staffmembers';
import TotalOrders from './components/TotalOrders';
import AddEmployee from './components/AddEmployee';
import AddEmployeeOrderDetails from './components/AddEmployeeOrderDetails';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allEmployees" element={<StafMembers />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/totalorders" element={< TotalOrders/>} />
        <Route path="/addemployeeorder" element={<AddEmployeeOrderDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
