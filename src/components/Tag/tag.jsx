import React from 'react';
import './tag.css';

const Tag = (props) => {
  //console.log(props);
  const { tagName, selectedTag, selected } = props;
  const tagStyle = {
    DEV: { backgroundColor: '#04caff' },
    QA: { backgroundColor: '#f17e58' },
    PO: { backgroundColor: '#62ed42' }
  }
  const tagKeyMap = {
    DEV: 'DEV',
    QA: 'QA',
    'Product Owner': 'PO'
  }

  const key = tagKeyMap[tagName];

  return (
    <>
      <button type='button' style={selected ? tagStyle[key]: {}} className='tag' onClick={() => selectedTag(tagName)}>{tagName}</button>
    </>
  )
}

export default Tag
