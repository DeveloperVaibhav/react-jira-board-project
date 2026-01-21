import React from 'react';
import './tag.css';

const Tag = (props) => {
    console.log(props);
    const {tagName} = props;
  return (
    <>
      <button className='tag'>{tagName}</button>
    </>
  )
}

export default Tag
