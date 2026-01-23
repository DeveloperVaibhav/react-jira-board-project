import React, { useState } from 'react';
import './task-form.css';
import Tag from '../Tag/tag';

const TaskForm = () => {

    const [taskData, setTaskData] = useState({
        task : '',
        status: 'Ready for Development'
    });

    const handleData = (e) => {
        const {name, value} = e.target;
        setTaskData((prev) => {
            return { ...prev, [name]: value};
        });
    };
    console.log("data received", taskData);

    // const [task, setTask] = useState("");
    // const [status, setStatus] = useState("");

    // const handleTask = (e) => {
    //     setTask(e.target.value);
    // }
    // console.log("task from state", task);
    // const handleStatus = (e)=>{
    //     setStatus(e.target.value);
    // }
    // console.log("task status", status);
    

    return (
        <>
            <header className='app_header'>
                <form>
                    <input type='text' className='task_input' name='task' placeholder='Enter Task Name' onChange={handleData}/>
                    <div className='task_form_bottom'>
                        <div>
                            <Tag tagName='DEV'/>
                            <Tag tagName='QA'/>
                            <Tag tagName='Product Owner'/>
                        </div>
                        <div>
                            <select className='task_status' name='status' onChange={handleData}>
                                <option value='Ready for Development'>Ready for Development</option>
                                <option value='In Progress'>In Progress</option>
                                <option value='Ready for Testing'>Ready for Testing</option>
                                <option value='Closed'>Closed</option>
                            </select>
                            <button type='submit' className='task_submit'>+ Add</button>
                        </div>
                    </div>
                </form>
            </header>
        </>
    )
}

export default TaskForm
