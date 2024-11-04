import React, { useState } from 'react'
import NewTask from '../components/TaskList/NewTask'

const CreateTask = () => {
  const [Title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTasks, setNewTasks] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setNewTasks({Title,
      description,
      date,
      assignTo,
      category,
      active: false,
      NewTask: true,
      failed: true,
      completed: false })

      const data=JSON.parse(localStorage.getItem('employees'))
      data.forEach(function(elem){
        if(assignTo==elem.firstName){
          elem.tasks.push(newTasks)
  
          
        }
      })
      localStorage.setItem('employees',JOSN.stringify(data))
      

    // Reset form fields
    setTitle('')
    setDescription('')
    setDate('')
    setAssignTo('')
    setCategory('')
    
    
  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
            <input
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
              type='text'
              placeholder='Make a UI design'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
              type='date'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
              type='text'
              placeholder='Employee name'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
              type='text'
              placeholder='Design, Dev, etc.'
            />
          </div>
        </div>
        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
            cols='30'
            rows='10'
            placeholder='Task description'
          ></textarea>
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
