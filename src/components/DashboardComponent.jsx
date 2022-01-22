import React from 'react'
import AvailableStockComponent from './AvailableStockComponent'
import EmployeeTableComponent from './EmployeePageSortComponent'
import StockTableComponent from './StockPageSortComponent'
import TotalEmployeeComponent from './TotalEmployeeComponent'
import TotalSoldComponent from './TotalSoldComponent'

function DashboardComponent() {
    return (
        <div>
            <div className="row mt-4 mb-4">
                <TotalEmployeeComponent />
                <AvailableStockComponent />
                <TotalSoldComponent />
            </div>
            <div className="row mb-3">
                <EmployeeTableComponent />
                <StockTableComponent />
            </div>
        </div>
    )
}

export default DashboardComponent
