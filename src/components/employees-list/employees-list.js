import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, toogleProps}) => {

    const elements = data.map(element => {
        const {id, ...elementProps} = element;
        return(
            <EmployeesListItem 
                key={id} 
                {...elementProps}
                onDelete={() => onDelete(id)}
                toogleProps={(prop) => toogleProps(id, prop)}
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