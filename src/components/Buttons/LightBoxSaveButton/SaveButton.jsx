import React from 'react'

const SaveButton = ({onSavePhoto}) => {
    return (
      <button style={{marginLeft:'2px', height:'25px'}} onClick={onSavePhoto}>Save Photo</button>
    );
  }

export default SaveButton
