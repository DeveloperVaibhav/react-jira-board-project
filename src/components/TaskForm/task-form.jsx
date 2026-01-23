import React, { useState } from 'react';
import './task-form.css';
import Tag from '../Tag/tag';

const TaskForm = () => {

    const [taskData, setTaskData] = useState({
        task : '',
        status: 'Ready for Development',
        tags : []
    });

    const handleData = (e) => {
        const {name, value} = e.target;
        setTaskData((prev) => {
            return { ...prev, [name]: value};
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault(); //prevent default behaviour of refreshing page after form submit
    }; 

    const selectedTag = (tag)=>{
        if(taskData.tags.some((item) => item ===tag)){
            const filterTags = taskData.tags.filter((item)=> item !== tag);
            setTaskData((prev)=>{
                return { ...prev, tags: filterTags };
            });
        }else{
            setTaskData((prev)=>{
                return { ...prev, tags: [...prev.tags, tag] };
            });
        }
    }
    console.log("form data received", taskData);

    return (
        <>
            <header className='app_header'>
                <form onSubmit={handleSubmit}>
                    <input type='text' className='task_input' name='task' placeholder='Enter Task Name' onChange={handleData}/>
                    <div className='task_form_bottom'>
                        <div>
                            <Tag tagName='DEV' selectedTag={selectedTag}/>
                            <Tag tagName='QA' selectedTag={selectedTag}/>
                            <Tag tagName='Product Owner' selectedTag={selectedTag}/>
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
