
import { Header } from './components/Header/Header'
import { AddToDo } from './components/AddToDo/AddToDo'
import { ShowToDo } from './components/ShowToDo/ShowToDo'
import { useEffect, useState } from 'react'

// get the store data from localStorage
const getDataFromLocalStorage = () => {
  const getStoreTasks = localStorage.getItem('tasks');
  if (getStoreTasks) {
    return JSON.parse(getStoreTasks);
  } else {
    return [];
  }
}

function App() {

  // input field handle state
  const [task, setTask] = useState('')
  // added task state 
  const [addedTask, setAddedTask] = useState(getDataFromLocalStorage())

  // handle user input
  const handleInputField = (event) => {
    setTask(event.target.value)
  }
  const handleAddToDo = () => {
    if (task.trim()) {
      setAddedTask((prevTask) => [task, ...prevTask])
      setTask('')
    }

  }

  // handle delete button
  const handleDelete = (delId) => {
    // find the items that is selected
    const newList = addedTask.filter((_, delToDo) => delToDo !== delId);
    setAddedTask(newList)

  }

  // Store user task into local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(addedTask));
  }, [addedTask]);


  return (
    <>
      <Header ></Header>
      <AddToDo

        handleInputField={handleInputField}
        handleAddToDo={handleAddToDo}
        task={task}

      ></AddToDo>

      <ShowToDo
        addedTask={addedTask}
        handleDelete={handleDelete}
      ></ShowToDo>

    </>
  )
}

export default App
