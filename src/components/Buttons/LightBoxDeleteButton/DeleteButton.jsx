import React from 'react'

const DeleteButton = ({onDelete}) => {
    return (
      <button style={{marginLeft:'2px', height:'25px'}} onClick={onDelete}>Delete</button>
    );
  }

export default DeleteButton
