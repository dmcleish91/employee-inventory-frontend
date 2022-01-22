import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from "../service/EmployeeService";

function AddEmployeeComponent() {
    let { id } = useParams();
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [department, setDepartment] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (id === "-1") {
            return
        } else {
            EmployeeService.getEmployeesById(id).then(response => {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
                setSalary(response.data.salary)
                setDepartment(response.data.department)
            })
        }

    }, [id])

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSalaryChange = (e) => {
        setSalary(e.target.value);
    }

    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value);
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        if (id === "-1") {
            let employee = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                salary: salary,
                department: department
            };
            EmployeeService.addEmployee(employee).then(res =>{
                navigate('/');
            })
        } else {
            let employee = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                salary: salary,
                department: department
            }
            console.log('employee =>' + JSON.stringify(employee))

            EmployeeService.updateEmployee(employee, id).then(res => {
                navigate('/')
            })
        }

    }

    const cancel = () => {
        navigate('/')
    }

    return (
        <div className="row mt-3 mb-3">
            <div className="col-6 col-md-6 offset-md-3">
            <form action="">
                <div className="form-group mb-1">
                    <label>First Name:</label>
                    <input type="text" placeholder='First Name' name="firstName" className='form-control'
                        value={firstName} onChange={handleFirstNameChange} required />
                </div>
                <div className="form-group mb-1">
                    <label>Last Name:</label>
                    <input type="text" placeholder='Last Name' name="lastName" className='form-control'
                        value={lastName} onChange={handleLastNameChange} required />
                </div>
                <div className="form-group mb-3">
                    <label>Email:</label>
                    <input type="text" placeholder='Email' name="email" className='form-control'
                        value={email} onChange={handleEmailChange} required />
                </div>
                <div className="form-group mb-3">
                    <label>Salary:</label>
                    <input type="text" placeholder='Salary' name="salary" className='form-control'
                        value={salary} onChange={handleSalaryChange} required />
                </div>
                <div className="form-group mb-3">
                    <label>Department:</label>
                    <input type="text" placeholder='Department' name="department" className='form-control'
                        value={department} onChange={handleDepartmentChange} required />
                </div>
                <button className="btn btn-success" onClick={saveEmployee}>Save</button>
                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
            </form>
            </div>
        </div>
    )
}

export default AddEmployeeComponent
