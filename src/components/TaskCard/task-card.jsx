import React from 'react';
import './task-card.css';
import deleteIcon from '../../assets/delete.png';
import Tag from '../Tag/tag';

const TaskCard = () => {
    return (
        <>
            <article className='task_card'>
                <p className='task_text'>This is sample text</p>
                <div className='task_card_bottom_line'>
                    <div className='task_card_tags'>
                        <Tag tagName='DEV'/>
                        <Tag tagName='QA'/>
                    </div>
                    <div className='task_delete'>
                        <img src={deleteIcon} alt='' className='delete_icon'></img>
                    </div>
                </div>
            </article>
        </>
    )
}

export default TaskCard
