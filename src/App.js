import React from 'react';

import './App.css';

class ToDoItems extends React.Component {
  
  render() { 
    
    var todoEntries = this.props.entries;
    
    function createTasks(task){
      return <li key={task.key}>{task.value} <button>Remove</button></li>
    }
    
    var listTasks = todoEntries.map(createTasks);
    
    return (
      <div>
        <ul className="theList">
          {listTasks}
        </ul>
      </div>
    );
  }
}

// class ErrorLog extends React.Component{
  
//   render(){
//     return(
//       <p>{error}</p>
//     );
//   }
// }

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={
      value: "",
      tasks: [],
      error: "",
    }
    this.changer = this.changer.bind(this);
  }
 
  changer(e) {
    this.setState({value: e.target.value});
  }
  addItem(e) {
    
    if(this.state.value){
      var itemArray = this.state.tasks;
      itemArray.push({
        value: this.state.value,
        key: Date.now()
      });
     
      this.setState({
        tasks: itemArray,
        error: ""
      });

      this.state.value = "";
      e.preventDefault();
    }
    else{
      this.setState({
        error: "Empty field"
      })
      this.state.value = "";
      e.preventDefault();
     
    }
  }
  
  render() {
    return (
      
      <div className="container">
        <ToDoItems entries={this.state.tasks} />
        <p>{this.state.error}</p>
        <form onSubmit={this.addItem.bind(this)}>
          <input type="text" placeholder="Task" value={this.state.value} onChange={this.changer}  />
          <button type="submit">Add!</button>
        </form>

      </div>
    );
  }

}


export default App;
