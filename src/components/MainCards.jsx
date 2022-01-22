import React from 'react'
import { Routes, Route } from "react-router-dom"
import AddEmployeeComponent from './AddEmployeeComponent'
import ViewEmployeeComponent from './ViewEmployeeComponent'
import AddStockComponent from './AddStockComponent'
import DashboardComponent from './DashboardComponent'
import ViewStockComponent from './ViewStockComponent'
import ViewAllEmployeesComponent from './ViewAllEmployeesComponent'
import ViewAllStockComponent from './ViewAllStockComponent'
import NotFound from './NotFound'

function MainCards() {
    return (
        <div className="main-content vh-75">
            <div className="d-flex justify-content-between flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 className="ms-3"><strong>Management</strong> Dashboard</h2>
                <div className="btn-toolbar mb-2 mb-md-0">
                    {/* <div className="btn-group me-2">
                        <button type="button" className="btn btn-outline-secondary">Add Employee</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Delete Employee</button>
                    </div> */}
                </div>
            </div>
            <div className="container-fluid">
                <Routes>
                    <Route exact path="/" element={<DashboardComponent />}></Route>
                    <Route exact path="/employees" element={<DashboardComponent />}></Route>
                    <Route path="/add-employee/:id" element={<AddEmployeeComponent />}></Route>
                    <Route path="/add-stock/:id" element={<AddStockComponent />}></Route>
                    <Route path="/view-employee/:id" element={<ViewEmployeeComponent />}></Route>
                    <Route path="/view-stock/:id" element={<ViewStockComponent />}></Route>
                    <Route path="/viewallEmployees" element={<ViewAllEmployeesComponent/>}></Route>
                    <Route path="/viewallStocks" element={<ViewAllStockComponent/>}></Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    )
}

export default MainCards
