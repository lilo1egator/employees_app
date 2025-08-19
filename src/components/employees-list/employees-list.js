import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToogleProps, onChangeSalary}) => {

    const elements = data.map(element => {
        const {id, ...elementProps} = element;
        return(
            <EmployeesListItem 
                key={id} 
                {...elementProps}
                onDelete={() => onDelete(id)}
                onToogleProps={(prop) => onToogleProps(id, prop)}
                onChangeSalary={(salary) => onChangeSalary(id, salary)}
                />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;