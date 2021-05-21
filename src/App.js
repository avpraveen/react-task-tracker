import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

    const [showAddTask, setShowAddTask] = useState (false)
    const [tasks, setTasks] = useState (
      [
          {
              id:1,
              text:'Doctors Appointment',
              day:'May 21st 1:30 PM',
              reminder:true
          },
          {
              id:2,
              text:'Meeting at school',
              day:'May 24th 9 AM',
              reminder:true
          },
          {
              id:3,
              text:'Groceries',
              day:'May 27th 6 PM',
              reminder:false
          },
      ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) +1
    const newTask = {id, ...task}
    setTasks([newTask, ...tasks ])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks( tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks( tasks.map((task) => 
        task.id === id ? { ...task, reminder: !task.reminder} : task
    ))
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask) } showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length >0 ? (
        <Tasks tasks= {tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
         : 'No Tasks to Show'
         }
    </div>
  );
}

export default App;
