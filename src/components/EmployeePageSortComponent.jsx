import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

function EmployeeTableComponent() {

    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [sortDir, setSortDir] = useState('asc');
    const sortField = 'firstName';

    useEffect(() => {
        if(currentPage === 1) {
            EmployeeService.getEmployeesPageAndSort(currentPage, sortField, sortDir).then(res => {
                setEmployees(res.data.content)
                setTotalPages(res.data.totalPages)
            })
        } else if (currentPage > totalPages) {
            EmployeeService.getEmployeesPageAndSort(totalPages, sortField, sortDir).then(res => {
                setCurrentPage(totalPages)
                setEmployees(res.data.content)
            })
        } else if (currentPage < 1) {
            EmployeeService.getEmployeesPageAndSort(1, sortField, sortDir).then(res => {
                setCurrentPage(1)
                setEmployees(res.data.content)
            })
        } else {
            EmployeeService.getEmployeesPageAndSort(currentPage, sortField, sortDir).then(res => {
                setEmployees(res.data.content)
            })
        }
        
    }, [currentPage, sortDir, totalPages]);

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
                                <th scope="col"><span className='sub' 
                                onClick={() => setSortDir(sortDir => sortDir === 'asc' ? 'desc' : 'asc')}>Name</span></th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map(employee => (
                                    <tr key={employee.id}>
                                        <td>{employee.firstName} {employee.lastName}</td>
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
                    <span className='sub' onClick={() => setCurrentPage(currentPage => currentPage + 1)}>Next Page / </span>
                    <span className='sub' onClick={() => setCurrentPage(currentPage => currentPage - 1)}>Last Page</span>
                </div>
            </div>
        </div>
    )
}

export default EmployeeTableComponent
