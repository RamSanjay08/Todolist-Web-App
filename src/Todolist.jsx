import React, { useState } from 'react'
import Todostyles from './Todolist.module.css'
 
function Todolist() {
  let [task,setTask] = useState("")
  let [tasks,setTasks] = useState([])
  let [add,setAdd] = useState(false)
  let [del,setDel] = useState(false)
  let [efm,setEfm] = useState("")
 
  let getInputData = ({target:{value}}) => {
    setTask(value)
  }

  let addTask = () => {

    if (task !== ""){
      setTasks([...tasks,task])
      setTask('')
      setAdd(true)
      setTimeout(()=> {
      setAdd(false)
    },2500)
    setEfm("")
    } else {
      setEfm("Field is Empty")
  }
  }

  let deleteTask = (index) => {
    let remainingTask = tasks.filter((t,i) => {
      return index!==i
    })
    setTasks(remainingTask)
    setDel(true)
    setTimeout(() => {
      setDel(false)
    },2500)
  }

  return (
  <>
    <nav>
      <h1>TODO LIST APP</h1>
    </nav>

    <section className={Todostyles.todoSection}>
      <div className={Todostyles.inputField}>
        <input type="text" placeholder={efm || 'Add your Task'} onChange={getInputData} value={task}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        {tasks.map((t,i) => {
          return <div className={Todostyles.tasks} key={i}>
          <p>{t}</p>
          <button onClick={() => {
            {deleteTask(i)}
          }}><i className="fa-solid fa-trash-can"></i></button>
        </div>
        })}
      </div>
      {add && <p className={Todostyles.add}>Task Added Successfully</p>}
      {del && <p className={Todostyles.del}>Task Deleted Successfully</p>}
    </section>
      <ul className={Todostyles.uli}>
      </ul>
    </>
  )
}


export default Todolist
