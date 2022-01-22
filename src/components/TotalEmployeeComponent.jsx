import React, {useState,useEffect} from 'react'
import EmployeeService from "../service/EmployeeService";


function TotalEmployeeComponent() {

    const [count,setCount] = useState('')

    useEffect(() => {
        EmployeeService.getEmployeeCount().then(res => {
            setCount(res.data)
        })
    }, []);

    return (
        <div className="col">
            <div className="card shadow-sm">
                <div className="card-header">
                    Total Employees
                </div>
                <div className="card-body d-flex align-items-center">
                    <div>
                        <i className="bi bi-person-square me-3 smallImage"></i>
                    </div>
                    <div>
                        <h5 className="card-title">{count}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalEmployeeComponent
