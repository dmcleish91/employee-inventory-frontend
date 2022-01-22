import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import StockService from "../service/StockService";


function ViewAllStockComponent() {

    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        StockService.getStock().then(res => {
            setStocks(res.data)
        })
    })

    function deleteStock(id) {
        StockService.deleteStock(id).then(res => {
            window.location.reload();
        })
    }

    return (
        <div className="col">
            <div className="card shadow-sm">
                <div className="card-header">
                    Stocks
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"><span className='sub' >Product</span></th>
                                <th scope="col">Available Units</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                stocks.map(stock => (
                                    <tr key={stock.id}>
                                        <td>{stock.stockName}</td>
                                        <td>{stock.availableUnits}</td>
                                        <td>
                                            <Link to={`/view-stock/${stock.id}`}
                                                className="btn btn-success btn-sm me-2">View</Link>
                                            <Link to={`/add-stock/${stock.id}`}
                                                className="btn btn-info btn-sm me-2">Update</Link>
                                            <button onClick={() => deleteStock(stock.id)}
                                                className="btn btn-danger btn-sm">Delete</button></td>
                                    </tr>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewAllStockComponent;
