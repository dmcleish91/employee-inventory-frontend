import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from "../service/EmployeeService";

function EmployeeTableComponent() {

    let { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        EmployeeService.getEmployeesById(id).then(response => {
            setEmployee(response.data)
        })
    }, [id])

    function deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            navigate('/')
        })
    }

    return (
        <div className="row mt-3 mb-3">
            <div className="col-6 col-md-6">
                <div className="card card-width">
                    <div className="card-header">
                        <strong>Employee Name:</strong> {employee.firstName} {employee.lastName}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Department: </strong>{employee.department}</li>
                        <li className="list-group-item"><strong>Email: </strong>{employee.email}</li>
                        <li className="list-group-item"><strong>Salary: </strong>${employee.salary}</li>
                        <li className="list-group-item">
                            <Link to={`/add-employee/${employee.id}`} className="btn btn-info btn-sm">Update</Link>
                            <button onClick={() => deleteEmployee(employee.id)}
                                className="btn btn-danger btn-sm ms-2">Delete</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default EmployeeTableComponent
