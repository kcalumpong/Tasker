import React, { Component } from 'react';
import './App.css';
import Navtabs from './components/Navtabs';
import TodoForm from './components/TodoForm';

class App extends Component {

  state = {
    task: [{
      taskName: "",
      taskDescription: "",
    }]
  }


  // handleSaveButton = (event) => {
  //   event.preventDefault();
  //   let id = undefined;

  //   if (event.target.id === undefined) {
  //     id = null
  //   } else {
  //     id = event.target.id
  //   }
  //   console.log(id)
  // }

  handleSaveButton = (event) => {
    event.preventDefault();

    const newTask = [...this.state.task ];
    newTask[event.target.name] = event.target.value;
    this.setState({ state: newTask })

    console.log("Save", newTask)



  }

  handleChange = (event) => {
    event.preventDefault();

    // const name = event.target.name;
    // const value = event.target.value;

    console.log('Props')

  }

  render() {
    return (
      <div>
        <Navtabs />
        <TodoForm
          handleSaveButton={this.handleSaveButton}
          state={this.state} />
      </div>
    )
  }
}

export default App;
