import React, { useState, useEffect } from 'react'
import StockService from "../service/StockService";

function TotalSoldComponent() {

    const [sumSoldUnits, setSumSoldUnits] = useState('');

    useEffect(() => {
        StockService.getSumOfSoldUnits().then(res => {
            setSumSoldUnits(res.data)
        })
    })

    return (
        <div className="col">
            <div className="card shadow-sm">
                <div className="card-header">
                    Total Sold
                </div>
                <div className="card-body  d-flex align-items-center">
                    <div>
                    <i class="bi bi-cash-stack smallImage me-3"></i>
                    </div>
                    <div>
                        <h5 className="card-title">{sumSoldUnits}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalSoldComponent
