import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToogleProps}) => {

    const elements = data.map(element => {
        const {id, ...elementProps} = element;
        return(
            <EmployeesListItem 
                key={id} 
                {...elementProps}
                onDelete={() => onDelete(id)}
                onToogleProps={(prop) => onToogleProps(id, prop)}
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