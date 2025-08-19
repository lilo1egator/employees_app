import "./app-filter.css";

const BTNS = [
        {name: 'all', content: 'All employees'},
        {name: 'promotion', content: 'For promotion'},
        {name: 'more1000', content: 'Salary is more 1000$'}
    ]

const AppFilter = ({filter, onFilter}) => {
    const buttons = BTNS.map(item => {
        const clazz = item.name === filter ? 'btn-light': 'btn-outline-light';
        return <button type="button"
                    className={"btn " + clazz}
                    name={item.name}
                    onClick={(e) => onFilter('filter', e.target.name)}
                    key={item.name}>
                    {item.content}
            </button>
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;