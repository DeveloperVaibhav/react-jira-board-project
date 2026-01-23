import React from 'react';
import './task-card.css';
import deleteIcon from '../../assets/delete.png';
import Tag from '../Tag/tag';

const TaskCard = ({title, tags}) => {
    return (
        <>
            <article className='task_card'>
                <p className='task_text'>{title}</p>
                <div className='task_card_bottom_line'>
                    <div className='task_card_tags'>
                        {tags.map((tag, index) => (<Tag key={index} tagName={tag}/>))}
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
