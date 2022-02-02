import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "https://spring-boot-employeestock-api.herokuapp.com/api/employees"
class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL + '/all')
    }

    getEmployeesPageAndSort(pageNumber, sortField, sortDirection) {
        //http://localhost:8080/api/employees/page/2?sortField=firstName&sortDir=asc
        //console.log(EMPLOYEE_API_BASE_URL + '/page/' + pageNumber + '?sortField=' + sortField + '&sortDir=' + sortDirection)
        return axios.get(EMPLOYEE_API_BASE_URL + '/page/' + pageNumber + '?sortField=' + sortField + '&sortDir=' + sortDirection)
    }

    getEmployeeCount() {
        return axios.get(EMPLOYEE_API_BASE_URL + "/total")
    }

    getEmployeesById(employeeId) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId)
    }

    findEmployeeByFirstName(firstName) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/firstName/' + firstName)
    }

    addEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + '/save', employee)
    }

    updateEmployee(employee, employeeId) {
        return axios.put(EMPLOYEE_API_BASE_URL + '/update/' + employeeId, employee)
    }

    deleteEmployee(employeeid) {
        return axios.delete(EMPLOYEE_API_BASE_URL + '/delete/' + employeeid)
    }

}

export default new EmployeeService();