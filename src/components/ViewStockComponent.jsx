import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import StockService from "../service/StockService";

function ViewStockComponent() {

    let { id } = useParams();
    const navigate = useNavigate();
    const [stock, setStock] = useState([]);

    useEffect(() => {
        StockService.getStockById(id).then(response => {
            setStock(response.data)
        })
    }, [id])

    function deleteStock(id) {
        StockService.deleteStock(id).then(res => {
            navigate('/')
        })
    }

    return (
        <div className="row mt-3 mb-3">
            <div className="col-6 col-md-6">
                <div className="card card-width">
                    <div className="card-header">
                        <strong>Item Name:</strong> {stock.stockName}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Available Units: </strong>{stock.availableUnits}</li>
                        <li className="list-group-item"><strong>Sold Units: </strong>{stock.soldUnits}</li>
                        <li className="list-group-item">
                            <Link to={`/add-stock/${stock.id}`} className="btn btn-info btn-sm">Update</Link>
                            <button onClick={() => deleteStock(stock.id)}
                                className="btn btn-danger btn-sm ms-2">Delete</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ViewStockComponent
