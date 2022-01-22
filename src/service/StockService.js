import axios from 'axios';

const STOCK_API_BASE_URL = "https://spring-boot-employeestock-api.herokuapp.com/api/stock"
class StockService {

    getStock() {
        return axios.get(STOCK_API_BASE_URL + '/all')
    }

    getStockPageAndSort(pageNumber, sortField, sortDirection) {
        //http://localhost:8080/api/stock/page/1?sortField=stockName&sortDir=asc
        return axios.get(STOCK_API_BASE_URL + '/page/' + pageNumber + '?sortField=' + sortField + '&sortDir=' + sortDirection)
    }

    getStockById(stockId) {
        return axios.get(STOCK_API_BASE_URL + '/' + stockId)
    }

    getSumOfAvailableUnits() {
        return axios.get(STOCK_API_BASE_URL + '/availableSum')
    }

    getSumOfSoldUnits() {
        return axios.get(STOCK_API_BASE_URL + '/soldSum')
    }

    addStock(stock) {
        return axios.post(STOCK_API_BASE_URL + '/', stock)
    }

    updateStock(stock, stockId) {
        return axios.put(STOCK_API_BASE_URL + '/' + stockId, stock)
    }

    deleteStock(stockId) {
        return axios.delete(STOCK_API_BASE_URL + '/' + stockId)
    }

}

export default new StockService();