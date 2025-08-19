import './employees-list-item.css';

const EmployeesListItem = (props) => {
    const {name, salary, increase, rise, onDelete, onToogleProps, onChangeSalary} = props;

    let clazz = '';
    let like = '';

    if (increase) {
        clazz += ' increase '
    };
    if (rise) {
        like += ' like '
    };
    return (
        <li className={"list-group-item d-flex justify-content-between " + clazz + like}>
            <span className="list-group-item-label " onClick={() => onToogleProps('rise')}>{name}</span>
            <input type="text" 
                   className="list-group-item-input" 
                   defaultValue={`${salary}$`}
                   onChange={(e) => onChangeSalary(parseInt(e.target.value))}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button" onClick={() => onToogleProps('increase')}
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )

}

export default EmployeesListItem;