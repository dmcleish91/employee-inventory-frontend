import React, {useState,useEffect} from 'react'
import StockService from "../service/StockService";

function AvailableStockComponent() {

    const [sumAvailableUnits, setSumAvailableUnits] = useState('');

    useEffect(() => {
        StockService.getSumOfAvailableUnits().then(res => {
            setSumAvailableUnits(res.data)
        })
    })

    return (
        <div className="col">
            <div className="card shadow-sm">
                <div className="card-header">
                    Available Stock
                </div>
                <div className="card-body  d-flex align-items-center">
                    <div>
                        <i className="bi bi-piggy-bank me-3 smallImage"></i>
                    </div>
                    <div>
                        <h5 className="card-title">{sumAvailableUnits}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvailableStockComponent
