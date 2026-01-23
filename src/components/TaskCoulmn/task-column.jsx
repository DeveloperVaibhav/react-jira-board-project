import React from 'react';
import './task-column.css';
import TaskCard from '../TaskCard/task-card';

const TaskColumn = (props) => {
  console.log(props);
  return (
    <>
      <section className='task_column'> 
        <h2 className='task_column_heading'>
          <img src={props.icon} alt='' className='task_column_icon'></img>
          {props.title}
        </h2>
        <TaskCard/>
      </section>
    </>
  )
}

export default TaskColumn