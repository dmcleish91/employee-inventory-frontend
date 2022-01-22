import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StockService from "../service/StockService";


function AddStockComponent() {

    let { id } = useParams();
    const [stockName, setStockName] = useState('');
    const [availableUnits, setAvailable] = useState('');
    const [soldUnits, setSold] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (id === "-1") {
            return
        } else {
            StockService.getStockById(id).then(response => {
                setStockName(response.data.stockName)
                setAvailable(response.data.availableUnits)
                setSold(response.data.soldUnits)
            })
        }

    }, [id])

    const handleStockNameChange = (e) => {
        setStockName(e.target.value);
    }

    const handleAvailableChange = (e) => {
        setAvailable(e.target.value);
    }

    const handleSoldChange = (e) => {
        setSold(e.target.value);
    }

    const saveStock = (e) => {
        e.preventDefault();
        if (id === "-1") {
            let stock = {
                stockName: stockName,
                availableUnits: availableUnits,
                soldUnits: soldUnits
            };
            //console.log('stock =>' + JSON.stringify(stock))

            StockService.addStock(stock).then(res =>{
                navigate('/');
            })
        } else {
            let stock = {
                stockName: stockName,
                availableUnits: availableUnits,
                soldUnits: soldUnits
            }
            //console.log('stock =>' + JSON.stringify(stock))

            StockService.updateStock(stock, id).then(res => {
                navigate('/');
            })
        }
    }

    const cancel = () => {
        navigate('/');
    }

    return (
        <div className="row mt-3 mb-3">
            <div className="col-6 col-md-6 offset-md-3">
                <form action="">
                    <div className="form-group mb-1">
                        <label>Product Name:</label>
                        <input type="text" placeholder='Product Name' name="firstName" className='form-control'
                            value={stockName} onChange={handleStockNameChange} required />
                    </div>
                    <div className="form-group mb-1">
                        <label>Available:</label>
                        <input type="text" placeholder='Available' name="lastName" className='form-control'
                            value={availableUnits} onChange={handleAvailableChange} required />
                    </div>
                    <div className="form-group mb-3">
                        <label>Sold:</label>
                        <input type="text" placeholder='Sold' name="email" className='form-control'
                            value={soldUnits} onChange={handleSoldChange} required />
                    </div>
                    <button className="btn btn-success" onClick={saveStock}>Save</button>
                    <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default AddStockComponent
