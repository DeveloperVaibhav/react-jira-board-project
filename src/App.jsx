import React from 'react';
import './app.css';
import TaskForm from './components/TaskForm/task-form';
import TaskColumn from './components/TaskCoulmn/task-column';
//import closedIcon from './assets/check-mark-button.png';

const App = () => {
  return (
    <div className="app">
      <h1 style={{textAlign: 'center', margin: '50px'}}>Jira Board</h1>
      <TaskForm />
      <main className='app_main'>
        <TaskColumn title='Ready for Development'/>
        <TaskColumn title='In Progress'/>
        <TaskColumn title='Ready for Test'/>
        {/* <TaskColumn title='Closed' icon={closedIcon}/> */}
        <TaskColumn title='Closed'/>
        
      </main>
    </div>
  )
}

export default App
