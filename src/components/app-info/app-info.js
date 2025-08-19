import "./app-info.css";

const AppInfo = ({count, prize}) => {
    return (
        <div className="app-info">
            <h1>Employee registration at company N</h1> 
            <h2>Total number of employees: {count}</h2> 
            <h2>The prize will be awarded to: {prize}</h2>
        </div>
    )
}

export default AppInfo;