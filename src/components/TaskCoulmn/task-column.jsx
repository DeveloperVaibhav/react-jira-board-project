import React from 'react'

const TaskColumn = (props) => {
  console.log(props);
  return (
    <>
      <section className='task_column'> 
        <h2 className='task_column_heading'>{props.title}</h2>
      </section>
    </>
  )
}

export default TaskColumn