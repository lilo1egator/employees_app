
import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import NoItems from '../no-items/no-items';
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
        ],
        term: '',
        filter: 'all'
    }
  }

  changeSalary = (id, salary) => {
    this.setState(({data}) => ({
      data: data.map(item => {
          return item.id === id ? {...item, salary} : item;
        })
    }))
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

  onToogleProps = (id, props) => {   
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

  searchItems = (items, term) => {
    if(term.length === 0) {
      return items;
    }

    return items.filter(item => item.name.toLowerCase().includes(term.toLowerCase()))
  }

  filterItems = (btn) => {
    switch (btn) {
      case 'promotion':
        return this.state.data.filter(item => item.rise === true);
      case 'more1000':
        return this.state.data.filter(item => item.salary >= 1000);
      default:
        return this.state.data;
    }
  }
  
  onVisble = (state, prop) => {
    this.setState({[state]: prop})
  }


  render() {
    const {data, term, filter} = this.state
    const visibleDate = this.searchItems(this.filterItems(filter), term)

    return (
      <div className="app">
          <AppInfo 
            count={data.length}
            prize={data.filter(item => item.increase).length}
          />

          <div className="search-panel">
              <SearchPanel onSeach={this.onVisble}/>
              <AppFilter onFilter={this.onVisble} filter={filter}/>
          </div>
          
          {visibleDate.length === 0 ? <NoItems/>: <EmployeesList 
              data={visibleDate}
              onDelete={this.deleteItem}
              onToogleProps={this.onToogleProps}
              onChangeSalary={this.changeSalary}/>}
          
          <EmployeesAddForm
              onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
