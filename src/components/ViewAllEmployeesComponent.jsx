import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";


function ViewAllEmployeesComponent() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeService.getEmployees().then(res => {
            setEmployees(res.data)
        })
    })

    function deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            window.location.reload();
        })
    }

    return (
        <div className="col">
            <div className="card shadow-sm">
                <div className="card-header">
                    Employees
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"><span className='sub'>Name</span></th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map(employee => (
                                    <tr key={employee.id}>
                                        <td>{employee.firstName} {employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                            <Link to={`/view-employee/${employee.id}`}
                                                className="btn btn-success btn-sm me-2">View</Link>
                                            <Link to={`/add-employee/${employee.id}`}
                                                className="btn btn-info btn-sm me-2">Update</Link>
                                            <button onClick={() => deleteEmployee(employee.id)}
                                                className="btn btn-danger btn-sm">Delete</button></td>
                                    </tr>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewAllEmployeesComponent;
