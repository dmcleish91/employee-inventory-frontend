import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from "../service/EmployeeService";


function Navbar() {
    const [searchTerm, setSearchTerm] = useState()
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const searchButton = (e) => {
        e.preventDefault();
        EmployeeService.findEmployeeByFirstName(searchTerm).then(response => {
            console.log(response.data.id)
            if(response.data.id === undefined) {
                return
            }
            navigate(`/view-employee/${response.data.id}`);
        })
    }

    return (
        <header className="sticky-top shadow-sm">
            <nav className="navbar navbar-expand-md header-bar">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <div>   
                            <form className="d-flex header-items">
                                <input className="form-control me-2" type="search" placeholder="Employee First Name"
                                    onChange={handleSearchChange} />
                                <button className="btn btn-outline-primary" type="submit"
                                    onClick={searchButton}>Search</button>
                            </form>
                        </div>
                        <div className="d-flex">
                            <div className="me-3">
                                <span className="d-flex align-items-center link-dark text-decoration-none">
                                    <img src="https://github.com/dmcleish91.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                                    <strong>Dwight McLeish</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
