import React, { useState } from 'react';
import Tasks from './components/Tasks';
import "./App.css"
import Add from './components/AddTask';

const App = () =>{

  const [tasks, settask] = useState([
    {
      id: 1,
      title: 'Estudar',
      completed: false,
    },
    {
      id: 2,
      title: 'Programar',
      completed: true,
    },
  ])
  const TaskAdd =  (taskTitle) =>{
    const newTasks = [... tasks, {
      title: taskTitle,
      id: Math.random(10),
      completed: false,
    }];
    setTasks(newTasks);
  }

  return (
    <>
      <div className='container'>
        <Add/>
        <Tasks tasks={tasks}/>
      </div>
    </>
  )
}

export default App;