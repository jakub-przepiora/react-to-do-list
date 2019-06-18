import React from 'react';

import './App.css';

const tasks = [];

tasks.push("learn react");
tasks.push("Go shopping");
tasks.push("buy flowers");

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={
      value: ""
    }
    this.addItem = this.addItem.bind(this);
    this.changer = this.changer.bind(this);
  }
  changer(e) {
    this.setState({value: e.target.value});
  }
  addItem() {
      console.log(this.state.value);
      // this.refs.form.reset();
   return tasks.push(this.state.value);
      

  }
  
  render() {
    return (
      
      <div>
        <ul>
          {tasks.map(task => <li key={task}>{task}</li>)}
        </ul>
        <form onSubmit={this.addItem}>
          <input type="text" placeholder="Task" value={this.state.value} onChange={this.changer}  />
          <button type="submit">Add!</button>
        </form>
        
      </div>
    );
  }

}


export default App;
