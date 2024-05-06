import React from 'react'

const EditButton = ({onEdit}) => {
    return (
      <button style={{height:'25px'}} onClick={onEdit}>Edit</button>
    );
  }

export default EditButton