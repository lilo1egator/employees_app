
import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data: [
          {id:1, name: "John Smith", salary: 1000, rise:false, increase: false},
          {id:2, name: "Rob Mack", salary: 800, rise:false, increase: true},
          {id:3, name: "Judi Louson", salary: 1600, rise:true, increase: false}
        ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.id === id)
      return {
        // data: [...data.slice(0, index), ...data.slice(index+1)]
        data: data.filter((item) => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    this.setState(({data}) => ({
      data: [...data, {id: data.length+1, name, salary, rise:false, increase:false}]
    }))
  }

  toogleProps = (id, props) => {   
    this.setState(({data}) => {
      // const item = data.find(item => item.id === id)
      return {
        data: data.map(item => {
          return item.id === id ? {...item, [props]: !item[props]} : item;
        })
        // data: [...data.slice(0, data.indexOf(item)), {...item, increase: !item.increase}, ...data.slice(data.indexOf(item)+1)]
      }
    })
  }
  render() {
    const {data} = this.state
    return (
      <div className="app">
          <AppInfo 
            count={data.length}
          />

          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
              data={data}
              onDelete={this.deleteItem}
              toogleProps={this.toogleProps}/>
          <EmployeesAddForm
              onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
