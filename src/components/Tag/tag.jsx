import React from 'react';
import './tag.css';

const Tag = (props) => {
    //console.log(props);
    const {tagName, selectedTag} = props;
  return (
    <>
      <button type='button' className='tag' onClick={()=>selectedTag(tagName)}>{tagName}</button>
    </>
  )
}

export default Tag
