import React, { useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import StockService from "../service/StockService";

function StockTableComponent() {

    const [stock, setStock] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [sortDir, setSortDir] = useState('asc');
    const sortField = 'stockName';

    useEffect(() => {
        if(currentPage === 1) {
            StockService.getStockPageAndSort(currentPage, sortField, sortDir).then(res => {
                setStock(res.data.content)
                setTotalPages(res.data.totalPages)
            })
        } else if (currentPage > totalPages) {
            StockService.getStockPageAndSort(totalPages, sortField, sortDir).then(res => {
                setCurrentPage(totalPages)
                setStock(res.data.content)
            })
        } else if (currentPage < 1) {
            StockService.getStockPageAndSort(1, sortField, sortDir).then(res => {
                setCurrentPage(1)
                setStock(res.data.content)
            })
        } else {
            StockService.getStockPageAndSort(currentPage, sortField, sortDir).then(res => {
                setStock(res.data.content)
            })
        }
    }, [currentPage, sortDir, totalPages]);

    function deleteStock(id) {
        StockService.deleteStock(id).then(res => {
            window.location.reload()
        })
    }

    return (
        <div className="col">
            <div className="card shadow-sm">
                <div className="card-header">
                    Current Stock
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"><span className='sub' 
                                onClick={() => setSortDir(sortDir => sortDir === 'asc' ? 'desc' : 'asc')}>Product</span></th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                stock.map(stock => (
                                    <tr key={stock.id}>
                                        <td>{stock.stockName}</td>
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
                    <span className='sub' onClick={() => setCurrentPage(currentPage => currentPage + 1)}>Next Page / </span>
                    <span className='sub' onClick={() => setCurrentPage(currentPage => currentPage - 1)}>Last Page</span>
                </div>
            </div>
        </div>
    )
}

export default StockTableComponent
