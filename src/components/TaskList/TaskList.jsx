import React from 'react'
import AceptTask from './AceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  // console.log(data);
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10 '>
       
       {data.tasks.map((elem, idx)=>{
        if(elem.active){
          return <AceptTask key={idx} data={elem}/>
        }
        if(elem.NewTask){
          return <NewTask key={idx} data={elem}/>
        }
        if(elem.CompleteTask){
          return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem}/>
        }

       })}
    </div>
    
    
  )
}

export default TaskList